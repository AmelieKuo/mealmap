// // nav
// let mbNav = document.getElementById('mbNav');

function myFunction() {
    var x = document.getElementById("mbNav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }



// 第二屏
// 點選按鈕選擇圖片
(function(){

    document.getElementById('btn1').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = 0 +'px',
      document.getElementById('feature_img').style.transition = 0.3; +'s';
    });
    document.getElementById('btn2').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = -705 +'px',
      document.getElementById('feature_img').style.transition = 0.3; +'s';
    });
    document.getElementById('btn3').addEventListener('click', function(){
      document.getElementById('feature_img').style.left = -1410 +'px',
      document.getElementById('feature_img').style.transition = 0.3; +'s';
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

// 印出scrolltop高度
let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
console.log(heightTop);



/* Header show & hide */
let bodyClass = document.body.classList,
lastScrollY = 0;
window.addEventListener('scroll', function(){
    let st = this.scrollY;

    // 判斷是向上捲動，而且捲軸超過某數字px
        if( st > lastScrollY && lastScrollY > 20) {
            bodyClass.add('hideUp');
        }else{
            bodyClass.remove('hideUp');
        }
    lastScrollY = st;
});




// index.html  --------  -------- 第二屏 right_img.sprite
// 第四屏 faq
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this
            .classList
            .toggle("active",);
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var panel = this.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + "px";
//     } 
//   });
// }


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


// nav 選單點選顏色改變
let Main_LeftListLiSelector = $("#Main_LeftListLiSelector li a");

$(Main_LeftListLiSelector).on('click', function() {
  $(Main_LeftListLiSelector).removeClass('active');
  $(this).addClass('active');
});

