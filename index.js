const send = document.querySelector("#forma");
const cancel = document.querySelector(".btn-secondary");
const allInputs = document.querySelectorAll(".form-control");
const errorAlert = ["Card #", "CVC #", "Amount", "First Name", "Last Name", "City", "State", "Postal Code", "Message"];
const errorTab = document.querySelector("#error");
const usaStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
usaStates.forEach((stat,index) => document.querySelector("#inputState").innerHTML += `<option>${usaStates[index]}</option>`)

let failure = document.createElement("div");
errorTab.appendChild(failure)


function Information(event) {
    event.preventDefault();
    let counter = 0;
    let flag = 0;
    allInputs.forEach(function(inpt, index){
        if(inpt.value){
            counter += 1;
            inpt.className = "form-control"
        } else if(flag == 0){
            failure.innerHTML = (`Some fields are missing: ${errorAlert[index]} field`)
            failure.className = `alert alert-danger`
            flag = 1;
            inpt.className += ` alert-danger`
        } else{
            failure.innerHTML += `, ${errorAlert[index]} field`
            inpt.className += ` alert-danger`
        }
    if(counter == allInputs.length){
        failure.innerHTML = `The information was successfully submited`
        failure.className = `alert alert-success`
    }
    })
}
send.addEventListener("submit", Information);

