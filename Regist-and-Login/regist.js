const btn = document.getElementById('btn');

function validation() {
    var username = document.getElementById('fn').value;
    var password = document.getElementById('pass').value;
    var stat = document.getElementById('stat');

    if (username == null && password == null) {
        stat.innerHTML = "Please set your Username And password";
    }
}

btn.addEventListener('click', validation);