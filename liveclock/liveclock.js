function clock(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    m = time(m);
    s = time(s);

    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(clock, 500);
}

function time(i){
    if (i < 10) {i = "0"+ i};
    return i;


}