const BTN = document.getElementById("chg");

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

function image() {
  var arr = ["assest/dogmemes.jpg", "assest/meme2-min.jpg"];

  for (let i = 0; i < arr.length; i++) {
    var img = document.getElementById("img");

    img.src = arr[i];
  }
}

BTN.addEventListener("click", image);
