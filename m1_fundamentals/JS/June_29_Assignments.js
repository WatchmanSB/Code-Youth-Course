// Array assignment 1

let arr1= [2,4,6,8,10,12]

for (let i=0;i<arr1.length; i++) {
    console.log("array1:", arr1[i]*arr1[i])
}

console.log(" ")

// Assignment 2


let animal= ["Dog", "Cat"]

animal.push("Bird");
console.log(animal);


let color= ["red", "purple", "green", "yellow"]
color.pop("yellow");
console.log(color);


let numbers = [1,3,5,8,9,10,8]
let check= 8;
for (let i=0; i<numbers.length; i++) {
    if (check==numbers[i]) {
        console.log("The position of 8 is:", i)
    }
}


// Assignment 3

let food = ['burgers', 'fries', 'coke', 'donuts', 'salad', 'nuggets']
console.log(food)
food = food.slice(3,6);
console.log(food)
food.push('burgers', 'fries', 'coke')
console.log(food)

console.log(" ")

let num= [1,2,3,4,5,6,7,8,9,19]
console.log(num)
slice = num.slice(3,6)
console.log(slice)

console.log(" ")

console.log(num)
console.log(slice)


