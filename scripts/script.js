
//Pages
var seanConneryPage = document.querySelector('.info-page:nth-of-type(1)');
var georgeLazenbyPage = document.querySelector('.info-page:nth-of-type(2)');
var rogerMoorePage = document.querySelector('.info-page:nth-of-type(3)');
var timothyDaltonPage = document.querySelector('.info-page:nth-of-type(4)');
var pierceBrosnanPage = document.querySelector('.info-page:nth-of-type(5)');
var danielCraigPage = document.querySelector('.info-page:nth-of-type(6)');

var blood = document.querySelector('.blood');
var infoPage = document.querySelector('.info-page');



//Targets
var firstTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(1)');
var secondTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(2)');
var thirdTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(3)');
var fourthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(4)');
var fifthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(5)');
var sixthTarget = document.querySelector('section:nth-of-type(2) img:nth-of-type(6)');


// Targets flipping up
setTimeout( () => {
    firstTarget.classList.add("up");
}, 2500);

setTimeout( () => {
    secondTarget.classList.add("up");
}, 2800);

setTimeout( () => {
    thirdTarget.classList.add("up");
}, 3100);

setTimeout( () => {
    fourthTarget.classList.add("up");
}, 3400);

setTimeout( () => {
    fifthTarget.classList.add("up");
}, 3700);

setTimeout( () => {
    sixthTarget.classList.add("up");
}, 4000);





firstTarget.addEventListener('click', function(){
    firstTarget.classList.remove('up');
    blood.classList.add('active-blood');
    seanConneryPage.classList.add('active-info');
});

secondTarget.addEventListener('click', function(){
    secondTarget.classList.add('shot-target');
    blood.classList.add('active-blood');
    georgeLazenbyPage.classList.add('active-info');
});

thirdTarget.addEventListener('click', function(){
    thirdTarget.classList.add('shot-target');
    blood.classList.add('active-blood');
    rogerMoorePage.classList.add('active-info');
});

fourthTarget.addEventListener('click', function(){
    fourthTarget.classList.add('shot-target');
    blood.classList.add('active-blood');
    timothyDaltonPage.classList.add('active-info');
});

fifthTarget.addEventListener('click', function(){
    fifthTarget.classList.add('shot-target');
    blood.classList.add('active-blood');
    pierceBrosnanPage.classList.add('active-info');
});

sixthTarget.addEventListener('click', function(){
    sixthTarget.classList.add('shot-target');
    blood.classList.add('active-blood');
    danielCraigPage.classList.add('active-info');
});






//Buttons
var seanConneryButton = document.querySelector('section.info-page.sean-connery .button-primary');
var georgeLazenbyButton = document.querySelector('section.info-page.george-lazenby .button-primary');
var rogerMooreButton = document.querySelector('section.info-page.roger-moore .button-primary');
var timothyDaltonButton = document.querySelector('section.info-page.timothy-dalton .button-primary');
var pierceBrosnanButton = document.querySelector('section.info-page.pierce-brosnan .button-primary');
var danielCraigButton = document.querySelector('section.info-page.daniel-craig .button-primary');


seanConneryButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    seanConneryPage.classList.remove('active-info');
});

georgeLazenbyButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    georgeLazenbyPage.classList.remove('active-info');
});

rogerMooreButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    rogerMoorePage.classList.remove('active-info');
});

timothyDaltonButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    timothyDaltonPage.classList.remove('active-info');
});

pierceBrosnanButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    pierceBrosnanPage.classList.remove('active-info');
});

danielCraigButton.addEventListener('click', function(){
    blood.classList.remove('active-blood');
    danielCraigPage.classList.remove('active-info');
});






// Logo reset
var logo = document.querySelector('.home-page > section:nth-of-type(1) > img');

logo.addEventListener('click', function(){
    location.reload();
});





// Custom cursor
var cursor = document.getElementById("cursor");
var cursorDelay = 600;

// gebruikte bron: https://www.youtube.com/watch?v=UMdvufdewD8
window.onmousemove = e => {
    var x = e.clientX - cursor.offsetWidth / 2,
            y = e.clientY - cursor.offsetHeight / 2;
  
    var keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }

    cursor.animate(keyframes, { 
        duration: cursorDelay, 
        fill: "forwards" 
    });
};





// Wasted page
var wastedBackground = document.querySelector('.wasted-page div:nth-of-type(1)');
var wastedText = document.querySelector('.wasted-page div:nth-of-type(2)');
var pierceBrosnanImage = document.querySelector('section.info-page.pierce-brosnan img');




pierceBrosnanImage.addEventListener('click', function(){
    if(cursorDelay === 9600){
        var shakenNotStirred = new Audio('audio/shaken-not-stirred.mp3');
        shakenNotStirred.play();
        wastedBackground.classList.add('wasted-background-active');
        wastedText.classList.add('wasted-text-active');
    }

    else {
        cursorDelay += 1000;
        var shakenNotStirred = new Audio('audio/shaken-not-stirred.mp3');
        shakenNotStirred.play();
    }
});


// Wasted button
var resetButton = document.querySelector('.wasted-page button');

resetButton.addEventListener('click', function(){
    location.reload();
});




