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
  $('.back_btn').click(function(){
    $('.fixed_navigation .nav_content').toggleClass('open_fic');
  });
  $('.toggle_annonces').click(function(){
    // $('.fixed_navigation .nav_content').toggleClass('open_fic');
    console.log('asdfasd');
    $(this).siblings('.a_description').slideToggle()
  });

  $('.sandbox-container .input-group.date').datepicker({ });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

let cs = $('.custom_select');
let csMenu = $('.select_menu');
let csMenuOpt = $('.select_menu li')

cs.click(function() {
  $(this).attr('tabindex', 1).focus();
  $(this).toggleClass('active');
  $(this).children('.select_menu').slideToggle(300);
})
cs.focusout(function() {
  $(this).removeClass('active');
  $(this).children('.select_menu').slideUp(300);
})
csMenuOpt.click(function() {
  $(this).parents('.custom_select').find('.selected').text($(this).text());
  $(this).parents('.custom_select').find('.data_input').attr('value',$(this).attr('id'));
})





$(document).ready(function(){
  $("input.file_upload1").change(function(){
        var parent = $(this).parents('.main_img');
        console.log(parent.find('.up_image'));
        parent.find('.previewImg').attr('src', $(this).val());
        parent.find('.up_image').attr('src',  $(this).val()); 
        
  });
});

})

$(function () { $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html"); });