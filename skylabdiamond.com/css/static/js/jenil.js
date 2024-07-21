
var d = new Date();
let body =document.getElementsByTagName('body');


// document.onreadystatechange = function () {
//     if (document.readyState !== "complete") {
//         body.style.display=='none';
//     }
//     else{
//         body.style.display=='block';
//     }
// }

let p = 0;

let preload=document.getElementsByClassName('preload');
$(document).ready(function(){
   preload[0].style.display="none";
});


let btn = document.getElementById('homebergMenu');
let dropMenu = document.getElementById('drop-down-menu-desktop');
// let dropMenu = document.getElementById('drop-down-menu-desktop');
let jenil = document.getElementsByClassName('jenil');
let a = document.getElementById('drop-down-menu-desktop').getElementsByClassName('nav-item');

let milan = document.getElementById('next');




jenil[0].style.display = "none";

let hamburger = document.getElementById('hamburger');
let dropDownMenu = document.getElementById('drop-down-menu');

hamburger.addEventListener('click', function () {
    if (dropDownMenu.style.display == "none") {
        dropDownMenu.style.display = "block";
    }
    else {
        dropDownMenu.style.display = "none";
    }
})


var header = document.getElementsByClassName("jenil-header");

var sticky = header.offsetTop;
let logo = document.getElementById('logo');
// window.onscroll = function () { videoPause();};
let vp=0;

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
            $(".jenil-header.sticky").css("background" , "rgb(255 238 244 / 50%)");
            $(".jenil-header.sticky").css("backdrop-filter" , "blur(2px)");
        }

        else{
            $(".jenil-header.sticky").css("background" , "white");  
            $(".jenil-header.sticky").css("transition" , "backdrop-filter 2s ease 0s, background 500ms ease 0s");  
                              
        }
    })
})






// Front image slider
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let liTag = document.getElementsByClassName('liTag');

let bgImage;
let count = 1;

setTimeout(frontImage, 7000);
function frontImage() {
    count++;
    if (count > liTag.length) {
        count = 1;
    }
    for (j = 1; j <= liTag.length; j++) {
        if (count == j) {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'block';
            liTag[j - 1].classList.add("active");
        }
        else {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'none';
            liTag[j - 1].classList.remove("active");
        }
    }
    setTimeout(frontImage, 5000);
}


    next.addEventListener('click', () => {
    count++;
    if (count > liTag.length) {
        count = 1;
    }
    for (j = 1; j <= liTag.length; j++) {
        if (count == j) {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'block';
            liTag[j - 1].classList.add("active");
        }
        else {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'none';
            liTag[j - 1].classList.remove("active");
        }
    }

});

prev.addEventListener('click', () => {
    count--;
    if (count < 1) {
        count = liTag.length;
    }
    for (j = 1; j <= liTag.length; j++) {
        if (count == j) {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'block';
            liTag[j - 1].classList.add("active");
        }
        else {
            bgImage = document.getElementsByClassName(`prev-slide${j}`);
            bgImage[0].style.display = 'none';
            liTag[j - 1].classList.remove("active");
        }
    }
});

for (let i = 0; i < liTag.length; i++) {
    liTag[i].addEventListener('click', () => {
        
        count = i + 1;
        for (j = 1; j <= liTag.length; j++) {
            if (count == j) {
                bgImage = document.getElementsByClassName(`prev-slide${j}`);
                bgImage[0].style.display = 'block';
                liTag[j - 1].classList.add("active");
            }
            else {
                bgImage = document.getElementsByClassName(`prev-slide${j}`);
                bgImage[0].style.display = 'none';
                liTag[j - 1].classList.remove("active");
            }
        }
    });
}
        
