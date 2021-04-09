const BTN = document.getElementById("btn");
const BODY = document.getElementsByTagName("body")[0];
var bodyColor = (BODY.style.backgroundColor = "#FFFFF" || "white");

function blackMode() {
  BTN.style.color = "#000";
  BTN.style.borderColor = "#000";
}

function lightMode() {
  BTN.style.color = "#FFF";
  BTN.style.borderColor = "#FFF";
}

function check() {
  if (bodyColor) {
    blackMode();
  } else {
    lightMode();
  }
}

function setColor() {
  BODY.style.backgroundColor =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";
}

BODY.addEventListener('load', check);

BTN.addEventListener("click", function () {
  setColor();
});
