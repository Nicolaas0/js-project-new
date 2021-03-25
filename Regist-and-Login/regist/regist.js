const BTN = document.getElementById("btn");
const STAT = document.getElementById("stat");
var input = document.getElementsByTagName("input");

  // var x = document.getElementsByTagName('INPUT');
  function empval(){
    for (var i = 0; i < input.length; i++) {
      var value = input[i].value;

      if (value !== null && value !== "") {
        input[i].style.borderColor = "#e9ff70";
        input[i].style.transition = "all 0.7s";
      } else if (value == null || value == "") {
        input[i].style.borderColor = "#70d6ff";
        input[i].style.transition = "all 1s";
        STAT.innerHTML = "Highlighted input cannot be empty.";
      }
      input[i].addEventListener("focusout", empval);
    }
}

BTN.addEventListener("click", empval);
