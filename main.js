//function calculate

function calculate(){
    //variable declaration
    var a =parseInt(document.querySelector("#valueone").value);
    var b =parseInt(document.querySelector("#valuetwo").value);

    var operator=(document.querySelector("#operator").value);

    var calculator;

    if(operator == "add"){
        calculator = a + b;
    }
    else if(operator == "mult"){
        calculator = a * b;
    }

    else if(operator == "sub"){
        calculator = a - b;
    }

    else if(operator == "div"){
        calculator = a / b;
    }

  var answer=document.querySelector("#calculatedValue").innerHTML = calculator;



}