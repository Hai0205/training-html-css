$(document).ready(function () {
  $(".img-slider").slick({
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,

    prevArrow:
      "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  });
});
const btnToggle = document.querySelector(".toggle-menu");
const overlayMenu = document.querySelector(".overplay-menu-mobile");
const menuMobile = document.querySelector(".navigation-menu");
const menuMobileWrap = document.querySelector(".menu-mobile");
const btnClose = document.getElementById("btn-close-menu");

function openMenu() {
  overlayMenu.classList.add("activeAnimation");
  menuMobile.classList.add("activeMenuSidebar");
  menuMobileWrap.classList.add("activeAnimation");
}

function closeMenu() {
  overlayMenu.classList.remove("activeAnimation");
  menuMobile.classList.remove("activeMenuSidebar");
  menuMobileWrap.classList.remove("activeAnimation");
}

btnToggle.onclick = function () {
  openMenu();
};

overlayMenu.onclick = function () {
  closeMenu();
};

btnClose.onclick = function () {
  closeMenu();
};
jQuery(document).ready(function ($) {
  // browser window scroll (in pixels) after which the "back to top" link is shown
  var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 300,
      //grab the "back to top" link
      $back_to_top = $('.cd-top');

  //hide or show the "back to top" link
  $(window).scroll(function () {
      ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if ($(this).scrollTop() > offset_opacity) {
          $back_to_top.addClass('cd-fade-out');
      }
  });

  //smooth scroll to top
  $back_to_top.on('click', function (event) {
      event.preventDefault();
      $('body,html').animate({
          scrollTop: 0,
      }, scroll_top_duration
      );
  });

});
VanillaTilt.init(document.querySelector(".logo-img"), {
  max: 25,
  speed: 400,
  scale: 2
});
VanillaTilt.init(document.querySelector(".footer-logo-img"), {
  max: 25,
  speed: 400,
  scale: 3
});