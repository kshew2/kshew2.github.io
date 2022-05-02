function greeting()
{
    let name = document.getElementById("name").value;
    let feeling = document.getElementById("feeling").value;
    let message = "The Khaki Salamander says hi, " + name + "! We're glad you are doing " + feeling + "!";
    document.getElementById("greetingMessage").innerHTML = message;
}
function randomFact1()
{
    let factList = new Array(
        "Salamanders are generally 4 to 6 inches long."
    );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact1").innerHTML = factList[randNum];
}
function randomFact2()
{
    let factList = new Array(
        "Many are camouflaged, whereas others are boldly patterned or brightly coloured."
    );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact2").innerHTML = factList[randNum];
}
function randomFact3()
{
    let factList = new Array(
        "The largest species is the Chinese Giant Salamander."
    );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact3").innerHTML = factList[randNum];
}
function randomFact4()
{
    let factList = new Array(
        "Amphibians in the family of over 740 species moist skinned animals with tails and feet."
    );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact4").innerHTML = factList[randNum];
}

function randomFact5()
{
    let factList = new Array(
        "The name Salamander comes from the Greek word for Fire Lizard."
    );

    let randNum = Math.floor(Math.random() * factList.length);   
    document.getElementById("randomFact5").innerHTML = factList[randNum];
}