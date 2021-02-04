const item = document.getElementsByTagName('li');

const list = document.querySelector("ul");

const button = document.getElementById("btn");

const input = document.getElementById("inputam");

function inputLength() {
    
    return input.value.length;
} 


function show() {

    let li = document.createElement('li');

    li.appendChild(document.createTextNode(inputam.value));

    list.appendChild(li);

    input.value = "";

    function done() { 

        li.classList.add("delete");
        
    }

    li.addEventListener("click", done);
}

function validate() { 
    if (input.value != null && input.value != "" && inputLength() < 40) {
        show();
    }
}

    function enter(){ 
        if (input.value != null && input.value != "" && event.which == 13 && inputLength() < 40) {
            show();
        }
    }
    
button.addEventListener("click", validate);
input.addEventListener("keypress", enter);