const person = {
    firstname: "John",
    lastname: "Smith",
    age: 25,
    display: function(){
        return "Hello";
    }
}


console.log(person.firstname,person.lastname,person.age,person.display())


const person2 = {
    firstname: "Adam",
    lastname: "Smith",
    age: 27,
    display: function(){
        return this.firstname + " " + this.lastname;
    },
    show: function(id){
        return this.firstname+" with id "+id;
    }
}


console.log("Name:", person2.display())
console.log("Name:", person2.show(10))


let a=5;
console.log(a)
let b=a;
console.log(b)
b=7;
console.log(b)