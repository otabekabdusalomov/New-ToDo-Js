"use-scrict";

const from = document.querySelector("#formone");
let firstNameInput = document.querySelector("#exampleInputFirs");
let ageNameInput = document.querySelector("#exampleInputAge");
let countryNameInput = document.querySelector("#exampleInputCountry");

let firstNameOutPut = document.querySelector ("#firstName");
let ageNameOutPut = document.querySelector ("#age");
let countryNameOutPut = document.querySelector ("#country");
let idOutPut = document.querySelector("#id");

from.addEventListener('submit', (e) => {
    e.preventDefault();

    firstNameOutPut.innerHTML = firstNameInput.value;
    ageNameOutPut.innerHTML = ageNameInput.value;
    countryNameOutPut.innerHTML = countryNameInput.value;
    idOutPut.innerHTML = "1";

  
   
    firstNameInput.value = " ";
    ageNameInput.value = " ";
    countryNameInput.value = " ";
});