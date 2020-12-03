let time = 300000;
let age = 0;
let hunger = 100;
let sleep = 100;
let bordom = 100;

const $toma = $(".tomagotchi").html("<img src='./img/egg1.png' alt='Egg image' width='200' height='300' >");

const setTime = function setTime() {

    const updateTime = function updateTime() {
        if (age > 1) { young(); }
        $("h1").text(`Age : ${age} Countdown: ${(time/60000).toFixed(2)}`);
        age++;
        
        time = time - 4000;
        $("#hunger").text(`Hunger: ${hunger} `);
        hunger -= 6;
        $("#sleep").text(`Sleepiness: ${sleep} `);
        sleep -= 4;
        $("#boredom").text(`Boredom: ${bordom} `);
        bordom-=3;
        if (time <= 0 || hunger <= 0 || sleep <= 0 || bordom <= 0) {
            killThePet();
            $("h1").text(`Age : ${age} Tomagotchi Died`);
            clearInterval(timer);
        }

    };
    const timer = setInterval(updateTime, 4000);
};

// <--- button---->

$("#wake").on("click", function (event) {
    setTime();
    hatch();
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

/////////////////////////////////


$(".element").html("<img src='./img/light8.png' alt='light' width='90' height='160' >");

const killThePet = function killThePet() {

    console.log('killed pet');
    $(".tomagotchi").fadeOut(3000);
};

const hatch = function hatch() {
    $(".tomagotchi").html("<img src='./img/hatch.png' alt='Hatched Egg' width='200' height='300' >");
   
};
const young = function young(){
    $(".tomagotchi").fadeIn(1000).html("<img src='./img/young.png' alt='young rooster' width='200' height='300' >");
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
    bordom+=3;
};

const feed = function feed() {
        
    $("#elements").fadeIn(1000).html("<img src='./img/worm.png' alt='worm' width='50' height='150' >").fadeOut(1000);
    hunger+=5
};

const light = function light() {

    $(".element").fadeOut(1000).fadeIn(5000);
    sleep+=5;
};



