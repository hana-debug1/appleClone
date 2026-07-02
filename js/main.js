$(document).ready(function () {
  var mobileFooterQuery = window.matchMedia("(max-width: 768px)");
  var footerHeadings = $(".footer-links-wrapper h3");

  function resetFooterLinks() {
    if (mobileFooterQuery.matches) {
      footerHeadings.each(function () {
        var heading = $(this);
        var links = heading.next("ul");

        if (heading.hasClass("expanded")) {
          links.show();
        } else {
          links.hide();
        }
      });
    } else {
      footerHeadings.removeClass("expanded");
      footerHeadings.next("ul").show();
    }
  }

  resetFooterLinks();

  footerHeadings.on("click", function () {
    if (!mobileFooterQuery.matches) {
      return;
    }

    var heading = $(this);
    var links = heading.next("ul");

    heading.toggleClass("expanded");
    links.stop(true, true).slideToggle(300);
  });

  $(window).on("resize", resetFooterLinks);
});
