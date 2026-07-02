document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements Selection
  const largeTrack = document.getElementById('largeTrack');
  const smallTrack = document.getElementById('smallTrack');
  const startCard = document.getElementById('startCard');

  // Guard clause to prevent execution if core slider elements are missing
  if (!largeTrack || !smallTrack || !startCard) return;

  // State Management Flags
  let isJumping = false;
  let isUserScrolling = false; // Prevents the dual-track sync engine from fighting the browser's native physics
  let syncTimeout = null;

  /**
   * 1. Initial Carousel Setup
   * Centers the starting card within the viewport layout dynamically on load.
   */
  function initCarousel() {
    largeTrack.style.scrollSnapType = 'none';
    const scrollOffset = startCard.offsetLeft - (window.innerWidth - startCard.offsetWidth) / 2;
    largeTrack.scrollLeft = scrollOffset;
    
    setTimeout(() => {
      largeTrack.style.scrollSnapType = 'x mandatory';
      syncTracks();
    }, 60);
  }

  /**
   * 2. Dual-Track Synchronizer
   * Pairs the top (large) and bottom (small) track scroll positions via percentages.
   */
  function syncTracks() {
    const largeMax = largeTrack.scrollWidth - largeTrack.clientWidth;
    const smallMax = smallTrack.scrollWidth - smallTrack.clientWidth;
    
    if (largeMax > 0) {
      const percentage = largeTrack.scrollLeft / largeMax;
      smallTrack.scrollLeft = percentage * smallMax;
    }
  }

  // Interaction Guards: Suppresses real-time cross-track synchronization during active manual drag 
  largeTrack.addEventListener('touchstart', () => { isUserScrolling = true; }, { passive: true });
  largeTrack.addEventListener('mousedown', () => { isUserScrolling = true; });

  /**
   * 3. Scroll Event Listener & Infinite Loop Controller
   * Handles user interaction bounds and snaps layouts safely when looping.
   */
  largeTrack.addEventListener('scroll', () => {
    // Only synchronize inline if the user is not actively forcing displacement coordinates
    if (!isUserScrolling) {
      syncTracks();
    }

    if (isJumping) return;

    const cardWidth = startCard.getBoundingClientRect().width + 20;
    const totalMainWidth = cardWidth * 4;

    // Infinite boundary management: Left threshold check
    if (largeTrack.scrollLeft < totalMainWidth) {
      isJumping = true;
      largeTrack.style.scrollSnapType = 'none';
      largeTrack.scrollLeft += totalMainWidth;
      setTimeout(() => {
        largeTrack.style.scrollSnapType = 'x mandatory';
        isJumping = false;
      }, 50);
    } 
    // Infinite boundary management: Right threshold check
    else if (largeTrack.scrollLeft > totalMainWidth * 2) {
      isJumping = true;
      largeTrack.style.scrollSnapType = 'none';
      largeTrack.scrollLeft -= totalMainWidth;
      setTimeout(() => {
        largeTrack.style.scrollSnapType = 'x mandatory';
        isJumping = false;
      }, 50);
    }

    // Debounce Engine: Re-enables seamless cross-track locks only when scroll vector rest is confirmed
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(() => {
      isUserScrolling = false;
      syncTracks();
    }, 100);
  });

  // Initialization triggers and window mutation subscriptions
  setTimeout(initCarousel, 150);
  window.addEventListener('resize', initCarousel);
});