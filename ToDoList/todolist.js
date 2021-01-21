
var input = document.getElementById('in');

var button = document.getElementsByTagName("button");

var result = document.querySelector("ul");

var items = document.getElementsByTagName("li");

function inputlength(){
    return input.nodeValue.length;
}

function createItems(){
var li = document.createElement('li');

    li.appendChild(document.createTextNode(input.nodeValue));

    result.appendChild(li);

    input.value = "";

    // function done(){

    //     li.classList.toggle("done");

    // }

    // li.addEventListener('click',done);

}

function validation(){
    if(inputlength > 0){

        createItems();

    }
}

button.addEventListener("click",validation);