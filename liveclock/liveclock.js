const BTN = document.getElementById('chg');
const IMG = document.getElementById('img');
const cc = document.getElementById('clickcounter');
var arr = ["assest/dogmemes.jpg", "assest/meme2-min.jpg"];
var arrIndex = 1;

function clock() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  m = time(m);
  s = time(s);

  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(clock, 500);
}

function time(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

BTN.addEventListener("click", () => {
  IMG.setAttribute("src", arr[arrIndex]);
  arrIndex++;
  if (arrIndex > 1) {
    arrIndex = 0;
  };
  });

