function addValue(){
    let num1 = parseInt(document.getElementById("input_a").value, 10)
    let num2 = parseInt(document.getElementById("input_b").value, 10)
    let text = "";

    if (isNaN(num1) || isNaN(num2))
    {
        text = "Error: Please Enter a Valid Integer";
        document.mycalculator.output.value = text;
        return;
    }

    let total = num1 + num2;

    text = num1 + " + " + num2 + " = " + total;

    console.log(text);
    document.mycalculator.output.value = text;
}


function mulValue(){
    let num1 = parseInt(document.getElementById("input_a").value, 10)
    let num2 = parseInt(document.getElementById("input_b").value, 10)
    let text = "";

    if (isNaN(num1) || isNaN(num2))
    {
        text = "Error: Please Enter a Valid Integer";
        document.mycalculator.output.value = text;
        return;
    }

    let total = num1 * num2;

    text = num1 + " " + String.fromCharCode(215) + " " + num2 + " = " + total;

    console.log(text);
    document.mycalculator.output.value = text;
}

function divValue(){
    let num1 = parseInt(document.getElementById("input_a").value, 10)
    let num2 = parseInt(document.getElementById("input_b").value, 10)
    let text = "";

    if (isNaN(num1) || isNaN(num2))
    {
        text = "Error: Please Enter a Valid Integer";
        document.mycalculator.output.value = text;
        return;
    } else if(num2 === 0)
    {
        text = "Error: Can't Divide By Zero!"
        document.mycalculator.output.value = text;
        return;
    }

    let total = num1 / num2;

    text = num1 + " / " + num2 + " = " + total;

    console.log(text);
    document.mycalculator.output.value = text;
}
