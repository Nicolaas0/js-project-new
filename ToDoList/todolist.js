const INPUT = document.getElementById('in');
const BTN = document.getElementById('btn');


function sbmt() {
    let val = INPUT.value;

    let li = document.createElement('li');
    let ul = document.querySelector('ul');

    li.appendChild(document.createTextNode(val));
    
    ul.appendChild(li);
}

BTN.addEventListener('click', sbmt);