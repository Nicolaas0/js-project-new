function calculation(){

    var amount = document.getElementById('ab').value;
    var service = document.getElementById('as').value;
    var person = document.getElementById('np').value;

    if (amount === "" || service == 0) {

        alert("Please input the value");

        return;
    }

    if (person === "" || person <= 1) {

        person = 1;

        document.getElementById('each').style.display="none";

    }else{

        document.getElementById('each').style.display="inline-block";

    }

    var total = (amount * service) / person;


    document.getElementById('rs').style.display="block";

    document.getElementById('total').innerHTML =total;
    
}


document.getElementById('btn').onclick = function(){
    calculation();
};
