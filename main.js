/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".
function helloWorld(){
    console.log("Hello World!");
}
helloWorld();


// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

function greeting(name){
    name = "Adam";
    console.log("Hello, " + name + "." );
    
}
greeting();

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

let number = prompt("Enter a number to see if it is divisible by three.");
divisibleByThree(number);

function divisibleByThree(number){
    if (number % 3 === 0) {
        console.log("Even")
      } else {
       console.log("Odd") 
      }
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.

var num1 = Number(prompt("Enter a number.", NaN));

var num2 = Number(prompt("Enter a second number.", NaN));

var num3 = Number(prompt("Enter a third number.", NaN)); 

console.log(num1, num2, num3);

averageAge(num1, num2, num3);

function averageAge(num1, num2, num3) {

    var array = [];
    var total = 0;

    if(isNaN(num1)){
        array = [num2, num3];
    }
    else if(isNaN(num2)){
        array = [num1, num3];
    }
    else if(isNaN(num3)){
        array = [num1, num2];
    }
    else{
        array = [num1, num2, num3];
    }

    console.log(array)

    for(var i = 0; i < array.length; i++){
        total = total + array[i];
        console.log(array[i]);
    }

    console.log(total);
    var avg = total / array.length;
    console.log(avg);
}

averageAge();

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.

let word = prompt("Enter a word.");



function leetSpeak(word){ 

word.replace("e", "3");

word.replace("a", "4");
}

leetSpeak();
