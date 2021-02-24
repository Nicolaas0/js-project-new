var btn = document.getElementById('btn');

function validation() {

  var x = document.getElementsByTagName('INPUT');

  for (var i = 0; i < x.length; i++){
    var value = x[i].value;

    if (value !== null && value !== "") {
      x[i].style.borderColor = "#e9ff70";
    } else if (value == null || value == "") {
      x[i].style.borderColor = "#70d6ff";
    }
  };
}

btn.addEventListener("click", validation);