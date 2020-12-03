/* === Variables  === */

let time = 300000;
let age = 0;
let hunger = 100;
let sleep = 100;
let bordom = 100;

/* === Functions  === */

const setTime = function setTime(event) {

    const updateTime = function updateTime() {
        if (age > 1) { young(); }
        $("h1").text(`Age : ${age} Countdown: ${(time/60000).toFixed(2)}`);
        age++;
        
        time = time - 4000;
        $("#hunger").text(`Hunger: ${hunger} `);
        hunger -= 7; 
        $("#sleep").text(`Sleepiness: ${sleep} `);
        sleep -= 8;
        $("#boredom").text(`Boredom: ${bordom} `);
        bordom-=8;
      
        if (time <= 0 || hunger <= 0 || sleep <= 0 || bordom <= 0) {
            killThePet();
            let alert = "";
            if (time<=0) {alert="Out of time";}
            if (hunger<=0) { alert="Out of hunger";}
            if (sleep<=0) { alert = "Out of sleepness";}
            if (bordom<=0) { alert = "Out of bordom";}
            $("h1").text(`Age : ${age} Pet Died ${alert}`);

            clearInterval(timer);
        }

    };
    const timer = setInterval(updateTime, 4000);
};

/* === Event Listeners  === */

$("#wake").on("click", function (event) {
  
    setTime();
    hatch();
    $("#wake").remove();
    
});
$(".feed").on("click", function (event) {
    feed();
  
});

$(".play").on("click", function (event) {
    play();
   
});
$(".light").on("click", function (event) {
    light();
    

});

/* === Dom Elements  === */

const $toma = $(".tomagotchi").html("<img src='./img/egg1.png' alt='Egg image' width='200' height='300' >");
const $feed = $("#elements");
const $light = $(".element").html("<img src='./img/light8.png' alt='light' width='130' height='190' >");

/* Invoked Functions */

const killThePet = function killThePet() {
    $light.remove();
    $feed.remove();
    $toma.fadeOut(3000);
    $toma.remove();
};

const hatch = function hatch() {
    $toma.html("<img src='./img/hatch.png' alt='Hatched Egg' width='200' height='300' >");
   
};
const young = function young(){
    $toma.fadeIn(1000).html("<img src='./img/young.png' alt='young rooster' width='200' height='300' >");
};

const play = function play(){
    
    document.getElementById("tom").animate([
    // keyframes
    { transform: 'translateX( 0px)' }, 
    { transform: 'translateY( -100px)' },
    { transform: 'rotate(-80deg)' }
  ], { 
    // timing options
    duration: 500,
    iterations: 1
  });
    if(bordom<100) { bordom+=10;}
};

const feed = function feed() {
        
    $feed.fadeIn(1000).html("<img src='./img/worm.png' alt='worm' width='80' height='180' >").fadeOut(1000);
    if (hunger<100) {hunger+=10;}
};

const light = function light() {

    $light.fadeOut(1000).fadeIn(5000);
    if (sleep<100) {sleep+=8;}
};



