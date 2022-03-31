$(document).ready(() => {
  // SideNav Initialization
  $(".button-collapse").sideNav();
	new WOW().init();

  var swiper = new Swiper(".product_swiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".testimonial_swipe", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('.mega_menu').click(function () {
    $('.mega_menu_content').toggleClass('show_megamenu');
  });
})

$(function () { $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html"); });