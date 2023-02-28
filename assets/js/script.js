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
let computer = document.querySelector(".card-computer");

console.log(player);

ButtonFu.addEventListener("click", () => {
    player.style.display = "none";
    FuPlayer.style.display = "block";

    let randomResult = getRandomInt(0, 3) 
    let tableImages = ["fu-computer", "shi-computer", "mi-computer" ]
    let imageComputer = tableImages[randomResult];


    document.getElementById(imageComputer).style.display = "block";
    computer.style.display = "none";
})

ButtonShi.addEventListener("click", () => {
    player.style.display = "none";
    ShiPlayer.style.display = "block";

    let randomResult = getRandomInt(0, 3) 
    let tableImages = ["shi-computer", "fu-computer", "mi-computer" ]
    let imageComputer = tableImages[randomResult];


    document.getElementById(imageComputer).style.display = "block";
    computer.style.display = "none";
})

ButtonMi.addEventListener("click", () => {
    player.style.display = "none";
    MiPlayer.style.display = "block";

    let randomResult = getRandomInt(0, 3) 
    let tableImages = ["shi-computer", "fu-computer", "mi-computer" ]
    let imageComputer = tableImages[randomResult];


    document.getElementById(imageComputer).style.display = "block";
    computer.style.display = "none";
})


function getRandomInt(borneMin, borneMax) {
    min = Math.ceil(borneMin);
    max = Math.floor(borneMax);

    return Math.floor(Math.random() * (max - min)) + min;
};

