// JavaScript Document
console.log("Howdy!");


//TEST

var blood = document.querySelector('.blood');

var infoPage = document.querySelector('.info-page');








// TARGETS FALLING DOWN
var firstTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(1)');
var secondTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(2)');
var thirdTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(3)');
var fourthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(4)');
var fifthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(5)');
var sixthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(6)');


firstTarget.addEventListener('click', function(){
    firstTarget.classList.add('shot-target'); // TARGETS FALLING DOWN
    blood.classList.add('active-blood');
    infoPage.classList.add('active-info');

});



secondTarget.addEventListener('click', function(){
    secondTarget.classList.add('shot-target');
})

thirdTarget.addEventListener('click', function(){
    thirdTarget.classList.add('shot-target');
})

fourthTarget.addEventListener('click', function(){
    fourthTarget.classList.add('shot-target');
})

fifthTarget.addEventListener('click', function(){
    fifthTarget.classList.add('shot-target');
})

sixthTarget.addEventListener('click', function(){
    sixthTarget.classList.add('shot-target');
});





// CUSTOM CURSOR
var cursor = document.getElementById("cursor");

window.onmousemove = e => {
    var x = e.clientX - cursor.offsetWidth / 2,
            y = e.clientY - cursor.offsetHeight / 2;
  
    var keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    cursor.animate(keyframes, { 
        duration: 800, 
        fill: "forwards" 
    });
}






var button = document.querySelector('.button-primary');

button.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    infoPage.classList.remove('active-info');

});



var logo = document.querySelector('.home-page > section:nth-of-type(1) > img');

logo.addEventListener('click', function(){
    firstTarget.classList.remove('shot-target');
    secondTarget.classList.remove('shot-target');
    thirdTarget.classList.remove('shot-target');
    fourthTarget.classList.remove('shot-target');
    fifthTarget.classList.remove('shot-target');
    sixthTarget.classList.remove('shot-target');
});