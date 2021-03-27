const UNAME = document.getElementById('uname');
const PASS = document.getElementById('pass');
const BTN = document.getElementById('btn');

function validate() {
    var username = UNAME.value;
    var password = PASS.value;

    var warning = document.getElementById('warn');

    if (username || password !== null && username || password !== "") {
        warning.innerHTML = "Login Successfully!";
    } else {
        warning.innerHTML = "Please fill the empty inputs";
    }
}

BTN.addEventListener('click', validate);

