
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
};

// 點選 to top button
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// scrolltop高度
let heightTop = document.documentElement.scrollTop || document.body.scrollTop;
// console.log(heightTop);

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

// Get the modal
var modal = document.getElementById('signup_overlay');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};


// index.html  --------  -------- 
// 第一屏
// nav

let burgerBtn = document.getElementById('burger')
let mbNav = document.getElementById('mbNav');

burgerBtn.addEventListener('click', () => {
    mbNav.classList.toggle('open');
});



// 第二屏
// 第二屏 right_img.sprite
// 點選按鈕選擇圖片
let featureImg = document.getElementById('feature_img');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

if (featureImg && btn1 && btn2 && btn3) {
  btn1.addEventListener('click', function() {
    featureImg.style.left = '0';
    featureImg.style.transition = '0.3s';
  });

  btn2.addEventListener('click', function() {
    featureImg.style.left = '-705px';
    featureImg.style.transition = '0.3s';
  });

  btn3.addEventListener('click', function() {
    featureImg.style.left = '-1410px';
    featureImg.style.transition = '0.3s';
  });
};



// 第四屏 faq
let questions = document.getElementsByClassName("accordion");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function() {
    // 移除其他問題的 .active 類別
    for (let j = 0; j < questions.length; j++) {
      if (i !== j) {
        questions[j].classList.remove("active");
        questions[j].nextElementSibling.style.display = "none";
      }
    }

    // 切換當前問題的 .active 類別
    this.classList.toggle("active");

    // 切換顯示/隱藏下一個元素
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};


// calorie.html --------  -------- 
// 計算貓咪熱量、飲水量計算

function validateInput() {
    let weightInput = document.getElementById("weight");
    let weightValue = weightInput.value.trim();
    let weightError = document.getElementById("weightError");
  
    if (!/^\d+$/.test(weightValue)) {
      weightError.style.display = "inline-block";
      weightInput.value = "";
    } else {
      weightError.style.display = "none";
    }
};


function calculateTotal() {
    let weight = document.getElementById("weight").value;
    let cat_type = document.getElementById("cat_type").value;
    let calories = (70 * Math.pow(weight, 0.75) * cat_type);
    
    console.log("熱量：" + "70 * " + "(" + weight + " ** 0.75) * " + cat_type);

    document.getElementById("calories").value = Math.round(calories) + ' kcal';
    waterTotal();
};

function waterTotal() {
    let weight = document.getElementById("weight").value;
    let water = weight * 60;

    console.log("飲水量：" + weight +" * 60");

    document.getElementById("water").value = (water) + ' ml';
};

