const BTN = document.getElementById('hb');
const NAV = document.getElementById('resp-nav');

function display() {
    if (NAV.style.display === "block") {
        NAV.style.display = "none";
    } else {
        NAV.style.display = "block";
    }
}
BTN.addEventListener('click', display);