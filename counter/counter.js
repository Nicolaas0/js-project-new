const PLUS = document.getElementById("plus");
const MIN = document.getElementById("minus");
var stat = document.getElementById("stat");

function pl() {
    for (let counter = 0; counter > 0; counter++) {
    stat.innerHTML = counter;
  }
}

PLUS.addEventListener("click", pl);
