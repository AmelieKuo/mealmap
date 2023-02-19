// 第二屏
// 點選按鈕選擇圖片
(function(){

    document.getElementById('btn1').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = 0 +'px';
    });
    document.getElementById('btn2').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = -834 +'px';
    });
    document.getElementById('btn3').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = -1688 +'px';
    });

})();


// document.getElementById('feature_img').style.transition = all + '0.6s';


//點選按鈕出現按鈕樣式
$('#navigation li').click(function() {
    $('#navigation li').removeClass('.btn_selected');
    $(this).addClass('selected');
});







// global  --------  -------- 

// 回到頁面最上方 fab_gototop Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// index.html  --------  -------- 第二屏 right_img.sprite
// 第四屏 faq
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this
            .classList
            .toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}


// Get the modal
var modal = document.getElementById('signup_overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// 登入介面 還沒有帳號?點此註冊 關閉當前視窗
$(".tosignup").on("click", function () {
    $(".login_overlay").fadeOut();
});

// 登入介面 還沒有帳號?點此註冊 開啟註冊視窗
$(".tosignup").on("click", function () {
    $(".signup_overlay").fadeIn();
});

// 註冊介面 已有帳號?點此登入 關閉當前視窗
$(".tologin").on("click", function () {
    $(".signup_overlay").fadeOut();
});

// 註冊介面 已有帳號?點此登入 開啟註冊視窗
$(".tologin").on("click", function () {
    $(".login_overlay").fadeIn();
});


// calorie.html --------  -------- 貓咪熱量、飲水量計算
function calculateTotal() {
    var weight = document
        .getElementById("weight")
        .value;
    var cat_type = document
        .getElementById("cat_type")
        .value;
    var calories = (70 * Math.pow(weight, 0.75) * cat_type);
    document
        .getElementById("calories")
        .value = Math.round(calories) + ' kcal';
    waterTotal();
}

function waterTotal() {
    var weight = document
        .getElementById("weight")
        .value;
    var water = weight * 60;
    document
        .getElementById("water")
        .value = (water) + ' ml';
}

// $(function(){     $("#myBtn").on("click", function(){       $('html,
// body').animate({// 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去         scrollTop: 0},
// 750);//750毫秒     }); End：fab_gototop Start：header nav 上滑出現下滑消失 $(function ()
// {      show hide subnav depending on scroll direction     var position =
// $(window).scrollTop();     $(window).scroll(function () {         var scroll
// = $(window).scrollTop();         if (scroll > position) {             only
// piece that matters             $('nav')             	.stop(true, false)
// .removeClass('up')                 .addClass('down');              scrolling
// downwards, only here for dev purposes             console.log('moving DOWN
// the page');             $('input').val('down');         } else { only piece
// that matters             $('nav')                 .stop(true, false)
// .removeClass('down')                 .addClass('up'); scrolling upwards
// console.log('moving UP the page'); $('input').val('up');         }
// position = scroll;     }); }); End：header nav 上滑出現下滑消失 客戶推薦滑動輪播 {/* <script
// src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> <!-- Initialize
// Swiper --> <script>   var swiper = new Swiper(".mySwiper", {
// slidesPerView: 3,     spaceBetween: 30,     slidesPerGroup: 3,     loop:
// true,     loopFillGroupWithBlank: true,     pagination: {       el:
// ".swiper-pagination",       clickable: true,     },     navigation: {
// nextEl: ".swiper-button-next",       prevEl: ".swiper-button-prev",     },
// }); </script> */ } owl-carousel $(".owl-carousel").owlCarousel({     loop:
// true,  循環播放 margin: 10,  外距 10px     nav: true,  顯示點點     responsive: {
// 0: { items: 1  螢幕大小為 0~600 顯示 1 個項目       },       600: {         items: 2
// 螢幕大小為 600~1000 顯示 3 個項目       },       1000: {         items: 3  螢幕大小為 1000
// 以上 顯示 5 個項目       }     }   }); $(document).ready(function(){
// $(".owl-carousel").owlCarousel(         {                 loop: true,  循環播放
// margin: 10,  外距 10px                 nav: true,  顯示點點 responsive: {
// 0: {                     items: 1  螢幕大小為 0~600 顯示 1 個項目                   },
// 600: { items: 2  螢幕大小為 600~1000 顯示 3 個項目                   }, 1000: {
// items: 3  螢幕大小為 1000 以上 顯示 5 個項目 }                 }}     );   });
// $(".owl-carousel").owlCarousel({     loop: true,  循環播放     margin: 10,  外距
// 10px     nav: true,  顯示點點     responsive: { 0: {         items: 1  螢幕大小為
// 0~600 顯示 1 個項目       },       600: { items: 3  螢幕大小為 600~1000 顯示 3 個項目
// },       1000: {         items: 5 螢幕大小為 1000 以上 顯示 5 個項目       }     }   });
// AOS AOS.init({    Global settings:   disable: false,  accepts following
// values: 'phone', 'tablet', 'mobile', boolean, expression or function
// startEvent: 'DOMContentLoaded', name of the event dispatched on the document,
// that AOS should initialize on initClassName: 'aos-init',  class applied after
// initialization animatedClassName: 'aos-animate',  class applied on animation
// useClassNames: false,  if true, will add content of `data-aos` as classes on
// scroll   disableMutationObserver: false,  disables automatic mutations'
// detections (advanced)   debounceDelay: 50,  the delay on debounce used while
// resizing window (advanced)   throttleDelay: 99,  the delay on throttle used
// while scrolling the page (advanced)    Settings that can be overridden on
// per-element basis, by `data-aos-*` attributes:   offset: 120,  offset (in px)
// from the original trigger point   delay: 0,  values from 0 to 3000, with step
// 50ms   duration: 400,  values from 0 to 3000, with step 50ms   easing:
// 'ease',  default easing for AOS animations   once: false,  whether animation
// should happen only once - while scrolling down   mirror: false,  whether
// elements should animate out while scrolling past them   anchorPlacement:
// 'top-bottom',  defines which position of the element regarding to window
// should trigger the animation }); plans function check() {   var checkBox =
// document.getElementById("checbox");   var monthly =
// document.getElementsByClassName("monthly");   var annually =
// document.getElementsByClassName("annually");   for (var i = 0; i <
// text1.length; i++) {     if (checkBox.checked == true) {
// monthly[i].style.display = "block";       annually[i].style.display = "none";
// } else if (checkBox.checked == false) {       monthly[i].style.display =
// "none";       annually[i].style.display = "block";     }   } } check();  開啟
// 登入 Modal彈跳視窗 $(".header_navigation_log-in").on("click", function(){
// $(".login_overlay").fadeIn(); });  關閉 登入 Modal彈跳視窗
// $(".btn_modal_login_close").on("click", function(){
// $(".login_overlay").fadeOut(); });