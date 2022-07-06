//  Continuation of Arrays

let arr= ["red","green","purple","blue", "yellow", "orange", "brown", "pink"]

let spliced= arr.splice(0,3)
console.log("Spliced array:", spliced)
console.log("Original array", arr)

arr.splice(1,0, "white", "black")
console.log("adding with a splice:", arr)

spliced.splice(3,0, "new element", "new element 2")
console.log("adding with a splice:", spliced)



console.log(" ")

let spliced2 = arr.splice(-1,1, "removed element", "removed element2")
console.log("removed and added from the back:", spliced2)
console.log(arr)

console.log(" ")


for (let i=0; i < arr.length; i++) {
    console.log(arr[i].length);
}

console.log("(or)")


arr.forEach(function(i){
    console.log(i.length);
})

console.log("(or)")

arr.forEach((i) => console.log(i.length));


console.log(" ")

const score= [30,23,56,33,77,28]
let newScore= score.filter((a) => a>30)
console.log(newScore)

console.log("or")

let reduce = score.reduce((total,ele) => total+ele);
console.log("sum of array elements", reduce);


