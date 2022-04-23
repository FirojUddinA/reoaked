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


let image_10 = '<div class="main_img"><label for="main_image"><input class="file_upload1" id="main_image" name="file_cover" type="file"> <img id="previewImg" src="./img/svg/phote_up.svg" alt=""></label> <div class="uploaded_image"> <img src="./img/product_2.jpg" alt="" class="up_image"> <label for="main_image" class="action_button edit">  <span class="icon-lead-pencil"></span></label> <button class="action_button delete"> <span class="icon-trash-can-outline"></span> </button></div></div>';






})

$(function () { $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html"); });


$(document).ready(function(){

  $("input.file_uploa").on('change',function(){
    let reader = new FileReader();
    var image_sorce = '';
    var parent = $(this).parents('.main_img');
    reader.addEventListener('load', ()=>{
      image_sorce = reader.result;
      parent.find('.up_image').attr('src',  image_sorce); 
      // alert(image_sorce);
    })
    reader.readAsDataURL(this.files[0]);
  });
$('body').on('click','input[class^="file_upload"]',function(){
 
  $(this).on('change',function(){
    console.log("Ok")
    let reader = new FileReader();
    var image_sorce = '';
    var parent = $(this).parents('.main_img');
    reader.addEventListener('load', ()=>{
      image_sorce = reader.result;
      parent.find('.up_image').attr('src',  image_sorce).addClass('used'); 
    })
    reader.readAsDataURL(this.files[0]);

    var item_length = $('#more_images').children().length;
    let image_10 = '<div class="main_img"><label for="main_image' + item_length + '"><input class="file_upload' + item_length + '" id="main_image' + item_length + '" name="file_cover" type="file"> <img id="previewImg" src="./img/svg/phote_up.svg" alt=""></label> <div class="uploaded_image"> <img src="./img/product_2.jpg" alt="" class="up_image"> <label for="main_image' + item_length + '" class="action_button edit">  <span class="icon-lead-pencil"></span></label> <button class="action_button delete"> <span class="icon-trash-can-outline"></span> </button></div></div>';
    if(item_length < 10){
      $('#more_images').append(image_10);
    }
    
  });
   
})
});
