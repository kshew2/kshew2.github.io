var memory = 0;
var totalAfterOperation = null;
var operationList = new Array("addition", "subtraction", "multiplication", "division");
var operation = "none";
var justClickedOperation = false;


function addition1()
{
    var currVal;
    currVal = document.getElementById("display").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("display").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("display").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("display").innerHTML;
    operation = operationList[0];
    justClickedOperation = true;
}

function subtraction1()
{
    var currVal;
    currVal = document.getElementById("display").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("display").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("display").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("display").innerHTML;
    operation = operationList[1];
    justClickedOperation = true;
}

function multiplication1()
{
    var currVal;
    currVal = document.getElementById("display").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
        currVal = document.getElementById("display").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("display").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("display").innerHTML;
    operation = operationList[2];
    justClickedOperation = true;
}

function division1()
{
    var currVal;
    currVal = document.getElementById("display").innerHTML
    computeFunction(currVal, operation);

    if (totalAfterOperation != null)
    {
       currVal = document.getElementById("display").innerHTML
        computeFunction(currVal, operation);
        document.getElementById("display").innerHTML = totalAfterOperation;
    }

    memory = document.getElementById("display").innerHTML;
    operation = operationList[3];
    justClickedOperation = true;
}

function equals1()
{
    var currVal = document.getElementById("display").innerHTML
    computeFunction(currVal, operation);

    if(totalAfterOperation != null)
    {
        document.getElementById("display").innerHTML = totalAfterOperation;
    } 
    totalAfterOperation = null;
    operation = "none";
    justClickedOperation = true;
}

function clear1()
{
    document.getElementById("display").innerHTML = 0;
    memory = 0;
    totalAfterOperation = null;
    operation = "none";
    justClickedOperation = false;
}

function computeFunction(value, operationType)
{
    if (operationType == "addition")
    {
        totalAfterOperation = parseFloat(memory) + parseFloat(value);
    }
    else if (operationType == "subtraction")
    {
        totalAfterOperation = parseFloat(memory) - parseFloat(value);
    }
    else if (operationType == "multiplication")
    {
        totalAfterOperation = parseFloat(memory) * parseFloat(value);
    }
    else if (operationType == "division")
    {
        totalAfterOperation = parseFloat(memory) / parseFloat(value);
    }
}


function decimal1()
{
    var value = document.getElementById("display").innerHTML;
    if (!value.includes("."))
    {
        var decimal = value + ".";
        document.getElementById("display").innerHTML = decimal;
    }
}

function zero1()
{
    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 0;
        justClickedOperation = false;
    }
    else 
    {   
        document.getElementById("display").innerHTML += 0;
    }
}

function one1()
{
    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 1;
        justClickedOperation = false;
    }
    else 
    { 
        document.getElementById("display").innerHTML += 1;
    }
}

function two1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 2;
        justClickedOperation = false;
    }
    else 
    {  
        document.getElementById("display").innerHTML += 2;
    }
}

function three1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 3;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 3;
    }
}

function four1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 4;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 4;
    }
}

function five1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 5;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 5;
    }
}

function six1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 6;
        justClickedOperation = false;
    }
    else 
    { 
        document.getElementById("display").innerHTML += 6;
    }
}

function seven1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 7;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 7;
    }
}

function eight1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 8;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 8;
    }
}

function nine1()
{

    if (parseFloat(document.getElementById("display").innerHTML) == 0.0 || justClickedOperation)
    {
        document.getElementById("display").innerHTML = 9;
        justClickedOperation = false;
    }
    else 
    {
        document.getElementById("display").innerHTML += 9;
    }
}