'use strict'

const AddBtn = document.getElementById("AddList");
const InputText = document.getElementById("InputTag");
const DelBtn = document.getElementById("List");
const CountUpt = document.getElementById("countAlpha");
const AlertMsg = document.getElementById("ErrMsg");
const AlertImg = document.getElementById("AlertImg");
const PlaceHolder = document.getElementById("InputPlaceHolder");
let contBox = document.getElementById("List");
let Initial_Limit, CurrentCount;
let BtnDel;
let Cont;
let InputBox;
let InputString, Alphabets;
let Len;
let labelList;

let DarkLight = document.getElementById("DarK-Light");
let InDrk = document.getElementById("inBtn");
let DrkSwitch = true;


DarkLight.addEventListener('click', () => {
  if(DrkSwitch){
    DarkLight.style.justifyContent = "flex-end";
    DarkLight.style.background = "#222222";
    InDrk.style.background = "white";

    document.documentElement.style.setProperty("--bg", "white");
    document.documentElement.style.setProperty("--bg_2", "black");
    document.documentElement.style.setProperty("--TextWhite", "black");
    document.documentElement.style.setProperty("--TextListBlk", "rgb(75, 71, 71)");
    document.documentElement.style.setProperty("--placeHolbg", "white");
    document.documentElement.style.setProperty("--listbg", "#222222");
    DrkSwitch = false;
  }else {
    DarkLight.style.justifyContent = "flex-start";
    DarkLight.style.background = "#fff";
    InDrk.style.background = "black";

    document.documentElement.style.setProperty("--bg", "black");
    document.documentElement.style.setProperty("--bg_2", "white");
    document.documentElement.style.setProperty("--TextWhite", "white");
    document.documentElement.style.setProperty("--TextlistBlk", "#rgba(255, 255, 255, 0.478)");
    document.documentElement.style.setProperty("--placeHolbg", "black");
    document.documentElement.style.setProperty("--listbg", "#ffffff3d");
    DrkSwitch = true;
  }
})


InputText.addEventListener('input', () => {
  Initial_Limit = 100;
  InputString = InputText.value;
  Alphabets = InputString.replace(/\s+/g, "");

  //console.log("Alphabets = ", Alphabets);
  
  Len = Alphabets.length;
  //console.log("Length = ", Len);
  CurrentCount = Initial_Limit - Len;
  //console.log("Current = ", CurrentCount);

  console.log("\n\n");
  console.log(" Actual slice lim = ", InputText.value.length - (Len - Initial_Limit));
  console.log(" Actual slice Input len = ", InputText.value.length);
  console.log(" Actual slice Initial lim = ", Initial_Limit);
  console.log(" Actual slice len = ", Len);
  console.log(" Actual slice len - initial = ", (Len - Initial_Limit));
  console.log(InputText.value.slice(0, InputText.value.length - (Len - Initial_Limit)));

  if (CurrentCount < 0) {
    AlertImg.style.opacity = "1";
    AlertMsg.textContent = "Letter Limit Reached";
    InputText.value = InputText.value.slice(0, InputText.value.length - (Len - Initial_Limit));
  } else {
    if (CurrentCount >= 0 && CurrentCount <= Initial_Limit) {
      CountUpt.textContent = CurrentCount;
    }

    AlertImg.style.opacity = "0";
    AlertMsg.textContent = "";
    InputText.style.height = InputText.scrollHeight + "px";
  }
})


function AddNewEle() {
  CountUpt.textContent = 100;


  labelList = document.createElement("label");
  labelList.textContent = InputText.value;

  if ((InputText.value.trim()) !== "") {
    Cont = document.createElement("div");
    InputBox = document.createElement("input");
    InputBox.type = "checkbox";
    BtnDel = document.createElement("button");
    BtnDel.classList.add("Del-btn");

    Cont.appendChild(InputBox);
    Cont.appendChild(labelList);
    Cont.appendChild(BtnDel);


    contBox.appendChild(Cont);
    InputText.value = "";
  } else {
    PlaceHolder.style.color = "red";
    PlaceHolder.innerText = "Please Write First";
    PlaceHolder.animate([
      { transform: "translateX(0%)" },
      { transform: "translateX(5%)" },
      { transform: "translateX(0%)" },
      { transform: "translateX(10%)" },
      { transform: "translateX(0%)" }
    ], {
      duration: 200,
      iterations: 2,
      easing: "ease-in-out"
    })

    InputText.focus();
  }
}

AddBtn.addEventListener("click", () => {
  AddNewEle();
});

InputText.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    AddNewEle();
  }
})


DelBtn.addEventListener('click', (e) => {
  if (e.target.classList.contains("Del-btn")) {
    e.target.parentNode.remove();
  }
})