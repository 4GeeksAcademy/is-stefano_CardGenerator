/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let palos = ["♦", "♥", "♠", "♣"];
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let indexpalos = Math.floor(Math.random() * palos.length);
  let indexnumbers = Math.floor(Math.random() * numbers.length);

  let topElement = document.querySelector("#top");
  let numbersElement = document.querySelector("#numbers");
  let bottomElement = document.querySelector("#bottom");

  let palo = palos[indexpalos];
  let number = numbers[indexnumbers];

  topElement.innerHTML = palo;
  numbersElement.innerHTML = number;
  bottomElement.innerHTML = palo;

  if (palo === "♦" || palo === "♥") {
    topElement.classList.add("red");
    bottomElement.classList.add("red");
  } else {
    topElement.classList.remove("red");
    bottomElement.classList.remove("red");
  }
};
