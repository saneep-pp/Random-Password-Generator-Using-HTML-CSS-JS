const inputEl = document.querySelector(".input-container input");
const copyEl = document.querySelector(".input-container i");
const rangeEl = document.querySelector(".range-container input");
const spanEl = document.querySelector(".range-container span");
const generateBtnEl = document.querySelector(".generateBtn");

// All characters
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var password = "";

// when we change the input range it automatically calls the generatePassword Function
rangeEl.addEventListener("input",()=>{
    spanEl.innerHTML = rangeEl.value
    generatePassword()
})

// Generates random password
function generatePassword(){
    value = rangeEl.value
    var password = "";
    for(var i=0; i<value; i++){
    var randomNumber = Math.floor(Math.random() * chars.length);
    password = password + chars[randomNumber];
    }
    inputEl.value = password;
    copyEl.classList.replace("fa-clipboard-check","fa-clipboard");
}

// Whenever we click on the generate button it call generatePassword function
generateBtnEl.addEventListener("click",()=>{
    generatePassword();
})

// if we click on the copy icon, the password will copy to our clipboard
copyEl.addEventListener("click",()=>{
    navigator.clipboard.writeText(inputEl.value)
    copyEl.classList.replace("fa-clipboard","fa-clipboard-check");
    setTimeout(() => {
    copyEl.classList.replace("fa-clipboard-check","fa-clipboard");
    }, 1500);
})

generatePassword();