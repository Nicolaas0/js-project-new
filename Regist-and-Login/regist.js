
const fn = document.getElementById('fn');
const btn = document.getElementById('btn');

function fnLength() {

    return fn.value.length;

}

function validate() {
    if (fn.value != null && fn.value !="") {
        document.getElementById('container').style.display = "none";
    }
}

btn.addEventListener('click', validate);


