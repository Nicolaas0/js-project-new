var btn = document.getElementById('btn');
var input = document.getElementById('fn');

const emp = "Highlighted input cannot be empty.";

function validation() {
    var fullname = document.getElementById('fn').value;
    var status = document.getElementById('stat');

    if (fullname !== null && fullname !== "") {
        status.style.display = "none";
        input.style.borderColor = "#e9ff70";
        status.innerHTML = nonemp;

    } else if (fullname == null || fullname == "") {
        status.innerHTML = emp;
        input.style.borderColor = "#70d6ff";
    }
}

btn.addEventListener("click", validation);