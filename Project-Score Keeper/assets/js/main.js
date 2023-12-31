"use strict";

let scoreHome = document.body.querySelector("#scoreHome");
let scoreAway = document.body.querySelector("#scoreAway");

const plus1Home = () => (scoreHome.innerText = Number(scoreHome.innerText) + 1);
const plus2Home = () => (scoreHome.innerText = Number(scoreHome.innerText) + 2);
const plus3Home = () => (scoreHome.innerText = Number(scoreHome.innerText) + 3);

const plus1Away = () => (scoreAway.innerText = Number(scoreAway.innerText) + 1);
const plus2Away = () => (scoreAway.innerText = Number(scoreAway.innerText) + 2);
const plus3Away = () => (scoreAway.innerText = Number(scoreAway.innerText) + 3);

const reset = () => {
  scoreHome.innerText = "0";
  scoreAway.innerText = "0";
};

const nameHome = document.body.querySelector("#nameHome");
const nameAway = document.body.querySelector("#nameAway");

const changeName = () => {
  const nameHomeInput = window.prompt("Wie ist der Name der Heim-Mannschaft?");
  const nameAwayInput = window.prompt(
    "Wie ist der Name der Auswärts-Mannschaft?"
  );

  nameHome.textContent = nameHomeInput;
  nameAway.textContent = nameAwayInput;
};
