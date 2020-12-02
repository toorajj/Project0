


$("#wake").on("click", function (event) {
    console.warn("=== Keep Tomagotchi ALIVE !  ===");
    startGame();
    setTime();
    hatch();
    

});

const startGame = function startGame() {
    console.log('Call timer func');
}

$(".feed").on("click", function (event) {
    console.warn("feed your pet!");
    feedPet();

});

const feedPet = function feedPet() {
    console.log('feed your pet');

}
$(".play").on("click", function (event) {
    console.warn("play with your pet!");
    playPet();

});

const playPet = function playPet() {
    console.log('play with your pet');

}



let time = 300000;
let age = 0;
let hunger = 100;
let sleep = 100;
let bordom = 100;

$(".tomagotchi").html("<img src='./img/egg1.png' alt='Egg image' width='200' height='300' >");

const setTime = function setTime() {

    const updateTime = function updateTime() {
        console.log("Time!", time); ///.pow .tofixed
        $("h1").text(`Age : ${age} Countdown: ${(time/60000).toFixed(2)}`);
        age++;
        time = time - 4000;
        $("#hunger").text(`Hunger: ${hunger} `);
        hunger-=3;
        $("#sleep").text(`Sleepiness: ${sleep} `);
        sleep-=2;
        $("#boredom").text(`Boredom: ${bordom} `);
        bordom--;
        if (time <= 0 || hunger <= 0 || sleep <= 0 || bordom <= 0 ) {
            killThePet();
            $("h1").text(`Age : ${age} Tomagotchi Died`);
            clearInterval(timer);
        }

    };
    const timer = setInterval(updateTime, 4000);
};

const killThePet = function killThePet() {

    console.log('killed pet');
};


/*const char = function char () {

    $(".tomagotchi").html("<img src='./img/egg1.png' alt='Egg image' width='200' height='300' >");
}
char();*/

const hatch = function hatch () {
    $(".tomagotchi").html("<img src='./img/hatch.png' alt='Hatched Egg' width='200' height='300' >");
}

