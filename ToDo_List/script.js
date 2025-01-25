'use strict'

let AddBtn = document.getElementById("AddList");
let InputText = document.getElementById("InputTag");
let Limit, trigger, IDFind = 1;
let CountUpt = document.getElementById("countAlpha");
let AlertMsg = document.getElementById("ErrMsg");
let AlertImg = document.getElementById("AlertImg");
let PlaceHolder = document.getElementById("InputPlaceHolder");


InputText.addEventListener('input', () => {
    Limit = 100;
    let velChk = InputText.value;
    let Len = velChk.length;
    Limit = Limit - Len;
    

    if((velChk.trim(" ")).length > 100){
      AlertImg.style.opacity = "1";
      AlertMsg.textContent = "Limit Reached";
      InputText.value = InputText.value.slice(0,100);
    }else{
      if(Limit >= 0 && Limit <= 100){
        CountUpt.textContent = Limit;
      }

      AlertImg.style.opacity = "0";
      AlertMsg.textContent = "";
      InputText.style.height = InputText.scrollHeight + "px";
    }
})


function AddNewEle(){
  CountUpt.textContent = 100;


  let labelList = document.createElement("label");
    labelList.textContent = InputText.value;

    if((InputText.value.trim()) !== ""){
        let Cont = document.createElement("div");
        let InputBox = document.createElement("input");
        InputBox.type = "checkbox";
        let BtnDel = document.createElement("button");
        BtnDel.classList.add("Del-btn");

        Cont.appendChild(InputBox);
        Cont.appendChild(labelList);
        Cont.appendChild(BtnDel);

        let contBox = document.getElementById("List");

        contBox.appendChild(Cont);
        InputText.value = "";
    }else{
      PlaceHolder.style.color = "red";
        PlaceHolder.innerText = "Please Write First";
        PlaceHolder.animate([
            {transform : "translateX(0%)"},
            {transform : "translateX(5%)"},
            {transform : "translateX(0%)"},
            {transform : "translateX(10%)"},
            {transform : "translateX(0%)"}
        ],{
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
  if(e.key === "Enter"){
    AddNewEle();
  }
})

let DelBtn = document.getElementById("List");

DelBtn.addEventListener('click', (e) => {
  if(e.target.classList.contains("Del-btn")){
    e.target.parentNode.remove();
  }
})