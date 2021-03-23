const INPUT = document.getElementById('in');
const BTN = document.getElementById('btn');


function sbmt() {
    let val = INPUT.value;

    let li = document.createElement('li');
    let ul = document.querySelector('ul');

    li.appendChild(document.createTextNode(val));
    
    ul.appendChild(li);

    INPUT.value = "";

    function del() {
        li.classList.add('del')
    }
    li.addEventListener('click', del);
}

function enter() {
    if (event.which == 13) {
        sbmt();
    }
}

BTN.addEventListener('click', sbmt);
INPUT.addEventListener('keypress', enter);