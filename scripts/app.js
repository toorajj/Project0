
$("#wake").on("click", function (event) {
    console.warn("=== Keep Tomagotchi ALIVE !  ===");
    startGame();

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