'use strict'

let AddBtn = document.getElementById("AddList");
let InputText = document.getElementById("InputTag");
let Limit, trigger, IDFind = 1;
let CountUpt = document.getElementById("countAlpha");


InputText.addEventListener('input', () => {
    Limit = 100;
    let velChk = InputText.value;
    let Len = velChk.length;
    Limit = Limit - Len;

    if(Len > 100){
        trigger = confirm("Limit-Reached Only 100 Alphabets will be considered In list");
    }else{
      CountUpt.textContent = Limit;
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
        InputText.setAttribute("placeholder", "Enter Text Please");
    }else{
        InputText.setAttribute("placeholder", "Enter Text Please");
        InputText.animate([
            {transform : "translateX(0%)"},
            {transform : "translateX(55%)"},
            {transform : "translateX(0%)"},
            {transform : "translateX(55%)"},
            {transform : "translateX(0%)"}
        ],{
            duration: 1000,
            iterations: 1,
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