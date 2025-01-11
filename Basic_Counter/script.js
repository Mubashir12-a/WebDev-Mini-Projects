
let display = document.querySelector("p");
let btns = document.querySelectorAll("button");
let InputBox = document.querySelector("input");

let ButtonSound = new Audio("mouseClick.mp3");
let ResetSound = new Audio("clickReset.mp3");
let EnterSound = new Audio("EnterSound.mp3");

let count = InputBox.value;

let IncrementButton = btns[0];
let DecrementButton = btns[1];
let ResetButton = btns[2];
let EnterButton = btns[3];

EnterButton.addEventListener('click', () => {
    EnterSound.currentTime = 0;
    EnterSound.play();
    count = InputBox.value;
    //console.log(count);
})

IncrementButton.addEventListener('click', () => {
    ButtonSound.currentTime = 0;
    ButtonSound.play();
    display.innerText = parseInt(display.innerText) + parseInt(count);
    display.style.color = "#00ff80";
})

DecrementButton.addEventListener('click', () => {
    ButtonSound.currentTime = 0;
    ButtonSound.play();

    if (parseInt(display.innerText) > 0 && parseInt(display.innerText) > count) {
        display.innerText = parseInt(display.innerText) - parseInt(count);
        display.style.color = "#ff4b4b";
    } else {
        display.innerText = 0;
        display.style.color = "red";
    }
})

ResetButton.addEventListener('click', () => {
    ResetSound.currentTime = 0;
    ResetSound.play();
    display.innerText = 0;
    display.style.color = "red";
})
