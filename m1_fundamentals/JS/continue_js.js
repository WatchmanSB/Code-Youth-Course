let num= Math.random()*100;
let num1= Math.random()*(20-10)+1;
console.log(num);
console.log(num1);

let start=10;
let end=50;

let num3= Math.floor(Math.random()*(end-start)+start);
console.log(num3);

// Assignment 1

let range1= 20, range2= 50, number= 35;

if (number>=range1 && number<=range2) {
    console.log ("Number is within the range of 20-50")
}
else {
    console.log ("number is not within the value range")
}


// Assignment 2

let value= prompt("Enter a value")
console.log ("The value is", value)

console.log ("Pull random earlier value",range1, num1, number)

console.log (`pull random values with curley brackets, ${num}`)

// assignment 3

let choice =3, val1= 10, val2=5, result=0;

switch(choice) {
    case 1: result=val1+val2;
            break;

    case 2: result=val1-val2;
            break;

    case 3: result=val1*val2;
            break;

    case 4: result=val1/val2;
            break;

    default: console.log("No such choice");
}

console.log (`result is: ${result}`)

 
