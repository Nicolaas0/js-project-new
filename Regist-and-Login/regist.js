var btn = document.getElementById("btn");

var input = document.getElementById("fn");
var input2 = document.getElementById("ln");
var input3 = document.getElementById("ca");
var input4 = document.getElementById("pn");
var input5 = document.getElementById("em");
var input6 = document.getElementById("pass");

var allinput = document.getElementsByTagName("input");

const emp = "Highlighted input cannot be empty.";

function validation() {
  var status = document.getElementById("stat");

  if (fnval() || lnval() || caval() || pnval() || emval()|| passval() == true) {
    for (let i = 0; i < allinput.length; i++) {
      allinput[i].style.borderColor = "#e9ff70";
      status.style.display = "none";
    }
  }
}

function fnval() {
  var fullname = document.getElementById("fn").value;
  var status = document.getElementById("stat");
  if (fullname == null || fullname == "") {
    status.innerHTML = emp;
    input.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

function lnval() {
  var lastname = document.getElementById("ln").value;
  var status = document.getElementById("stat");
  if (lastname == null || lastname == "") {
    status.innerHTML = emp;
    input2.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

function caval() {
  var codearea = document.getElementById("ca").value;
  var status = document.getElementById("stat");
  if (codearea == null || codearea == "") {
      status.innerHTML = emp;
      input3.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

function pnval() {
  var phonenum = document.getElementById("pn").value;
  var status = document.getElementById("stat");
  if (phonenum == null || phonenum == "") {
    status.innerHTML = emp;
    input4.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

function emval() {
  var email = document.getElementById("em").value;
  var status = document.getElementById("stat");
  if (email == null || email == "") {
    status.innerHTML = emp;
    input5.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

function passval() {
  var pass = document.getElementById("pass").value;
  var status = document.getElementById("stat");
  if (pass == null || pass == "") {
    status.innerHTML = emp;
    input6.style.borderColor = "#70d6ff";
  } else {
    return true;
  }
}

btn.addEventListener("click", validation);
