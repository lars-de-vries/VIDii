// JavaScript Document
console.log("Howdy!");








// TARGETS FALLING DOWN
var firstTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(1)')
var secondTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(2)')
var thirdTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(3)')
var fourthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(4)')
var fifthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(5)')
var sixthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(6)')


firstTarget.addEventListener('click', function(){
    firstTarget.classList.add('shot-target');
})

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
})





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