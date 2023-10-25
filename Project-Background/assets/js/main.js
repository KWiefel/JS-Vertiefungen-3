"use strict";

const changeColor = () => {
  let inputColor = document.body.querySelector("#color").value;
  let background = document.body.querySelector("main");
  let text = document.body.querySelector("#text");

  if (inputColor == 0) {
    text.textContent = "Bitte gib eine Farbe ein!";
  } else {
    background.style.backgroundColor = inputColor;
  }
};
