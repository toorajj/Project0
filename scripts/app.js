

$("#wake").on("click", function (event) {
    console.warn("=== Keep Tomagotchi ALIVE !  ===");
    startGame();
    setTime();

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

const setTime = function setTime() {

    const updateTime = function updateTime() {
        console.log("Time!", time);
        $("h1").text(`Age : ${age} Time:${Math.round(time/60000)}`);
        age++;
        time=time-4000;
       /* if (time <= 0) {
            clearInterval(timer);
            age++;
            $("#round").text(`round: ${round}`);
            if (age <= 4) setUpRound();
        }*/
    };
    const timer = setInterval(updateTime, 4000);
};

