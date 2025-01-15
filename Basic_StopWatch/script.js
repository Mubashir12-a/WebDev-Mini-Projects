let collons = document.getElementsByClassName("Collon");
let FlagBox = document.getElementById("flags");


let StartBtn = document.querySelectorAll("button")[0];
let StopBtn = document.querySelectorAll("button")[1];
let ResetBtn = document.querySelectorAll("button")[2];
let FlagBtn = document.querySelectorAll("button")[3];

let display = document.querySelectorAll("span");

let Min = display[0];
let Sec = display[2];
let Ms = display[4];

let InterValMs;
let FlagForStart = false;

let ClickEffect = new Audio("mouseClick.mp3");
let ClickFlag = new Audio("EnterSound.mp3");
let ResetEffect = new Audio("vanish.mp3");

let flagMessage;
let Create_Para;

let Animate = [{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }];

let Duration = {
    duration: 1000,
    iterations: Infinity,
};

function CollAni() {
    collons[0].animate(Animate, Duration);
    collons[1].animate(Animate, Duration);
}

function ResetAll() {
    ResetEffect.currentTime = 0;
    ResetEffect.play();

    Min.innerText = "00";
    Sec.innerText = "00";
    Ms.innerText = "00";

    FlagBox.innerHTML = " ";

    FlagForStart = false;
    clearInterval(InterValMs);
}

function Minute() {
    Min.innerText = (parseInt(Min.innerText) + 1).toString().padStart(2, "0");

    if (parseInt(Min.innerText) > 59) {
        Sec.innerText = "00";
    }
}

function Second() {
    Sec.innerText = (parseInt(Sec.innerText) + 1).toString().padStart(2, "0");
    CollAni();

    if (parseInt(Sec.innerText) > 59) {
        Sec.innerText = "00";
        Minute();
    }
}

function MilliSecond() {
    ClickEffect.currentTime = 0;
    ClickEffect.play();

    if(!FlagForStart){
        FlagForStart = true;
        InterValMs = setInterval(() => {
            Ms.innerText = (parseInt(Ms.innerText) + 1).toString().padStart(2, "0");
    
            if (parseInt(Ms.innerText) > 99) {
                Second();
                Ms.innerText = "00";
            }
        }, 10);
    }
}

function AddFlag() {
    ClickFlag.currentTime = 0;
    ClickFlag.play();

    console.log(Min.innerText, " : ", Sec.innerText, " : ", Ms.innerText);
    flagMessage = `${Min.innerText} : ${Sec.innerText} : ${Ms.innerText}`;
    Create_Para = document.createElement("p");
    Create_Para.innerText = flagMessage;
    FlagBox.insertBefore(Create_Para, FlagBox.firstChild);
}

function StopWatch() {
    ClickEffect.currentTime = 0;
    ClickEffect.play();

    FlagForStart = false;

    clearInterval(InterValMs);
}

StartBtn.addEventListener("click", MilliSecond);
ResetBtn.addEventListener("click", ResetAll);
FlagBtn.addEventListener("click", AddFlag);
StopBtn.addEventListener("click", StopWatch);