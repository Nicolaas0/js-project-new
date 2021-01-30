const item = ['Tomatoes','Chicken','Cabbage'];

const list = document.getElementsByTagName('ul');


document.body.onload = show;

function show() {

    var li = document.createElement("li");
    const items = item[0];

    li.appendChild(items);

    list.appendChild(li);
}

const button = document.getElementsById("btn");

button.addEventListener("click",show);