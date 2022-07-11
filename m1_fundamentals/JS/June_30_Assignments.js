// Majid's assignments

const score= [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
let newScore= score.filter((i) => i>30)
console.log("Original scores:", score)
console.log("Filtered scores:", newScore)


console.log(" ")


let desert= ['ice cream', 'cookies', 'pancakes'] 
desert.forEach((i) => console.log("I love", i));


console.log(" ")


let users= ['user1', 'user2', 'user3']

let username = users.map(i => {
    if (i === 'user1') {
        return 'Mark';
    }
    if (i === 'user2') {
        return 'Mike'
    }
    if (i === 'user3') {
        return 'Milo'
    }
    return i;
} );

console.log(users)
console.log(username)


console.log(" ")






console.log(" ")

// Carter's Assignments

let arr= ['Hello', 'What', 'Are', 'You']

for (let i=0; i < arr.length; i++) {
    console.log("Without forEach:", arr[i].length);
}

console.log("(or)")


arr.forEach((i) => console.log("With forEach:", i.length));

console.log(" ")

let numArr= [13, 84, 21, 58, 41, 20, 63]

let numArr2= numArr.filter((s) => s< 50)
console.log("Original scores:", numArr)
console.log("With filter:", numArr2)

console.log("(or)")

let res= []
for(let i = 0; i < numArr.length; i++) {
    if(numArr[i]< 50) {
        res.push(numArr[i]);
    }
}

console.log("Original scores:", numArr)
console.log("Without filter:", res)


console.log(" ")





