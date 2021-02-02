const item = 'tomatoes';

const list = document.querySelector("ul");

const button = document.getElementById("btn");

const input = document.getElementById("inputam");

function show() {

    let li = document.createElement('li');

    li.appendChild(document.createTextNode(inputam.value));

    list.appendChild(li);

    input.value = "";
}

function validate() { 
    if (input.value != null && input.value != "") {
        show();
    }
}

    function enter(){ 
        if (input.value != null && input.value != "" && event.which == 13) {
            show();
        }
    }
    
button.addEventListener("click", validate);
input.addEventListener("keypress", enter);