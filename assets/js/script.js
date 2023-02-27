let FuPlayer = document.getElementById("fu-player");
let ShiPlayer = document.getElementById("shi-player");
let MiPlayer = document.getElementById("mi-player");
let FuComputer = document.getElementById("fu-computer");
let ShiComputer = document.getElementById("shi-computer");
let MiComputer = document.getElementById("mi-computer");
let ButtonFu = document.getElementById("button-fu");
let ButtonShi = document.getElementById("button-shi");
let ButtonMi = document.getElementById("button-mi");
let player = document.querySelector(".card-player");
let computer = document.getElementsByName("card-computer");

console.log(player);

ButtonFu.addEventListener("click", () => {
    player.style.display = "none";
    FuPlayer.style.display = "block";
})

ButtonShi.addEventListener("click", () => {
    player.style.display = "none";
    ShiPlayer.style.display = "block";
})

ButtonMi.addEventListener("click", () => {
    player.style.display = "none";
    MiPlayer.style.display = "block";
})

FuComputer = '0';
ShiComputer = '1';
MiComputer = '2';

function getRandomInt(0,2) {
    min = Math.ceil(0);
    max = Math.floor(2);
    return Math.floor(Math.random() * (max - min)) + min;
};