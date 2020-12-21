const send = document.querySelector("#myForm");
const cancel = document.querySelector(".btn-secondary");
const allInputs = document.querySelectorAll(".form-control");
const card = allInputs[0];
const cvc = allInputs[1];
const amount = allInputs[2];
const fname = allInputs[3];
const lname = allInputs[4];
const cities = allInputs[5];
const state = allInputs[6];
const postal = allInputs[7];
const errorTab = document.querySelector("#error")
console.log(card.innerHTML.value);

send.addEventListener("submit", (event) => {
    event.preventDefault();
    let counter = 0;
    let error = 0;
    allInputs.forEach(function(inpt, index){
        if(inpt.innerHTML.value != undefined){
            counter += 1;
        } else {
            error = index;
        }
    if(counter == allInputs.length){
        
    }
        console.log("The form has been submitted");
    })
})
