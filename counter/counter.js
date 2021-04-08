let stat = document.getElementById('stat');
let set = 0;

let store = () => {
  stat.innerHTML = set;
}

let incrase = () => {
  set++;
}

let descrease = () => {
  set--;
}

document.getElementById('plus').addEventListener('click', function () {
  incrase();
  store();
});

document.getElementById('minus').addEventListener('click', function () {
  descrease();
  store();
})