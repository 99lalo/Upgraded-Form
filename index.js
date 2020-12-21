const send = document.querySelector("#forma");
const cancel = document.querySelector(".btn-secondary");
const allInputs = document.querySelectorAll(".form-control");
const errorAlert = ["Card #", "CVC #", "Amount", "First Name", "Last Name", "City", "State", "Postal Code", "Message"];
// const card = allInputs[0];
// const cvc = allInputs[1];
// const amount = allInputs[2];
// const fname = allInputs[3];
// const lname = allInputs[4];
// const cities = allInputs[5];
// const state = allInputs[6];
// const postal = allInputs[7];
console.log(send);

const errorTab = document.querySelector("#error");
function Information(event) {
    event.preventDefault();
    console.log("Im working bro");
    let counter = 0;
    allInputs.forEach(function(inpt, index){
        if(inpt.value){
            counter += 1;
        } else { 
            errorTab.innerHTML += `<div class="alert alert-danger" role="alert"> Unexpected error at the: ${errorAlert[index]} field </div>`
            inpt.className += ` alert-danger`
        }
    if(counter == allInputs.length){
        alert(`The form was successfully submitted`)

    }
    })
}
send.addEventListener("submit", Information);

