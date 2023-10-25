"use strict";

const numberOne = document.body.querySelector("#numberOne");
const numberTwo = document.body.querySelector("#numberTwo");
const input = document.body.querySelector("form input");
const result = document.body.querySelector("#result");

let anyNumber1 = Math.round(Math.random() * (100 - 0));
let anyNumber2 = Math.round(Math.random() * (100 - 0));

numberOne.textContent = anyNumber1;
numberTwo.textContent = anyNumber2;

const check = () => {
  if (anyNumber1 + anyNumber2 == input.value) {
    result.textContent = "Das ist richtig!";
    result.style.color = "green";
  } else {
    result.textContent = "Das ist leider Quatsch";
    result.style.color = "red";
  }
};

const newOne = () => {
  location.reload();
};
