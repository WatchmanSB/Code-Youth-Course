console.log("Majid's Assignments")

let user= {
    username: "WatchmanSB",
    password: "pass12345",
    email: "abc@hotmail.com",
    id: "a7283512",
}

console.log(user)

console.log("Assignment 2")

let person= {
    firstName: "Steven",
    lastName: "Belenchia",
    score: 150
}

console.log("Hi my name is", person.firstName, person.lastName, "and my hypothetical score is", person.score)

console.log(" ")

console.log("Console log the object:", Object.entries(person))

console.log(" ")


console.log("Assingment 3")

let car= {
    make: "Mazda",
    year: "2013",
    mileage: "50,100K",
}
console.log(car)

console.log(" ")

console.log("Carter's Assignments")

let Test= {
    test1: {
        testname: "Alex",
        numParticipants: 52,
        testPass: true
    },
    
    test2: {
        testname: "Adam",
        numParticipants: 98,
        testPass: false 
    }
}

for(let key in Test){
    if(Test[key]["testPass"] == true){
        console.log(Test[key]["testPass"])
    }
}



console.log(Test, "failed with a score of", Test.test1.numParticipants, "participants.")




console.log("Assignment 2")

