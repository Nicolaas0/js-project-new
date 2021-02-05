const item = document.getElementsByTagName('li');
const list = document.querySelector("ul");
const button = document.getElementById("btn");
const input = document.getElementById("inputam");
const input2 = document.getElementById("inputam2");

function inputLength() {
    
    return input.value.length;

}

function inputLength2() {
    return input2.value.length;
}


function show() {

    let li = document.createElement('li');

    let things = input.value;
    let quantity = input2.value;

    li.appendChild(document.createTextNode(things+ ", " +"Q: " + quantity));

    list.appendChild(li);

    input.value = "";
    input2.value = "";

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
input2.addEventListener("keypress", enter);