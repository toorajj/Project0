/* === Variables  === */

let time = 300000;
let age = 0;
let hunger = 100;
let sleep = 100;
let bordom = 100;

/* === Functions  === */

const setTime = function setTime(event) {

    const updateTime = function updateTime() {
        document.getElementById('noise').play();
        if (age > 1) {
            young();
        }
        $("h1").text(`Age : ${age} Countdown: ${(time/60000).toFixed(2)}`);
        age++;

        time = time - 4000;
        $("#hunger").text(`Hunger: ${hunger} `);
        hunger -= 7;
        $("#sleep").text(` Sleepiness: ${sleep} `);
        sleep -= 8;
        $("#boredom").text(` Boredom: ${bordom} `);
        bordom -= 8;

        if (time <= 0 || hunger <= 0 || sleep <= 0 || bordom <= 0) {
            killThePet();
            let alert = "";
            if (time <= 0 && hunger > 0 && sleep > 0 && bordom > 0) {
                alert = "because of old age, game won !";
            }
            if (hunger <= 0) {
                alert = "Out of hunger";
            }
            if (sleep <= 0) {
                alert = "Out of sleepness";
            }
            if (bordom <= 0) {
                alert = "Out of bordom";
            }
            $("h1").text(`Age : ${age} Pet Died ${alert}`);

            clearInterval(timer);
        }

    };
    const timer = setInterval(updateTime, 4000);
};

/* === Event Listeners  === */

$("#wake").on("click", function (event) {
    document.getElementById('startSound').play();
    setTime();
    hatch();
    $("#wake").hide(1000);

});
$(".feed").on("click", function (event) {
    feed();
    document.getElementById('feed').play();

});

$(".play").on("click", function (event) {
    play();
    document.getElementById('play').play();
});
$(".light").on("click", function (event) {
    light();
    document.getElementById('lightSound').play();

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
    $toma.hide(1000);
    document.getElementById('gameOver').play();
};

const hatch = function hatch() {
    $toma.html("<img src='./img/hatch.png' alt='Hatched Egg' width='200' height='300' >");

};
const young = function young() {
    $toma.fadeIn(1000).html("<img src='./img/young.png' alt='young rooster' width='200' height='300' >");
};

const play = function play() {

    animate("tom", 0, -100, -180);
};

const feed = function feed() {

    $feed.fadeIn(500).html("<img src='./img/worm.png' alt='worm' width='80' height='180' >").fadeOut(2000);
    animate("elements", -20, -20, 90);
    animate("tom", 0, 0, -90);
    if (hunger < 100) {
        hunger += 10;
    }
};

const light = function light() {
    $light.fadeOut(1000).fadeIn(5000);
    if (sleep < 100) {
        sleep += 8;
    }
};
const animate = function animate(elem, x, y, deg) {
    document.getElementById(elem).animate([
        // keyframes
        {
            transform: `translateX( ${x}px)`
        },
        {
            transform: `translateY( ${y}px)`
        },
        {
            transform: `rotate(${deg}deg)`
        }
    ], {
        // timing options
        duration: 500,
        iterations: 1
    });
};