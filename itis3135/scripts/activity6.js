/*function getNumSides()
{
let input = promt("The Khaki Salamander asks you to enter the number 1-10 to reveal your chosen polygon");
random entry does not work
}*/
function getNumSides()
{
    var input = prompt("The Khaki Salamander promts you to enter a number 1-10 to get your shape");
    validateNum(input);
}

function validateNum(_input)
{
    if(isNaN(_input)){
        alert("Please enter a number.");
        getNumSides();
    }
    else
    {
        guess = Math.trunc(_input);
        if(guess < 1 || guess > 10)
        {
            alert("Your number must be between 1-10");
            getNumSides();
        }
        else
        {
            getShape(guess);
        }
    }
}
/*returns the number as a shape*/
function getShape()
{
   if(guess == 1)
   {
       alert("Your shape is henagon");
   } 
   else if(guess == 2)
   {
       alert("Your shape is digon");
   }
   else if(guess == 3)
   {
       alert("Your shape is trigon");
   }
   else if(guess == 4)
   {
       alert("Your shape is tetragon");
   }
   else if(guess == 5)
   {
       alert("Your shape is pentagon");
   }
   else if(guess == 6)
   {
       alert("Your shape is hexagon");
   }
   else if(guess == 7)
   {
       alert("Your shape is septagon");
   }
   else if(guess == 8)
   {
       alert("Your shape is octagon");
   }
   else if(guess == 9)
   {
       alert("Your shape is nonagon");
   }
   else if(guess == 10)
   {
       alert("Your shape is decagon")
   }
 
}