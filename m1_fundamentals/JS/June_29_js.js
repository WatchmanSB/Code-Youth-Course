// Arrays
 

let a=4;
let arr1= [2,4,6,8,10,12]
let arr2= ["red","green","purple","blue", "yellow"]
let arr3= ["Gamestop", "gme", "Loopring", "lrc", "ImmutibleX", "imx", "Ryan Cohen", "Kieth Gill"]
let arr4= []
let arr5= ["one element"]
console.log("array size", arr1.length)
console.log("array size", arr2.length)
console.log("array size", arr3.length)

console.log(arr1[0])
console.log(arr1[4])
console.log(arr1[arr1.length-1])

for(let i=0;i<=arr3.length-1; i++)
console.log("array3:", arr3[i])

console.log(" ")

for(let a=0; a<arr2.length; a++)
console.log("array2:",arr2[a])

console.log(" ")

let count=0;

for(let b=0; b<arr1.length; b++) { 
    console.log(arr1[b]);
    if(arr1[b]%2===0){
        count++;
    }
}

console.log("number of even elements:", count);



console.log(" ")

let marks = [50, 56, 62, 69, 71, 77, 81, 83, 86, 91, 96]
let total = 0
for (let m=0; m<marks.length; m++) {
    total= total + marks[m]
}

console.log("sum", total)
console.log("average", total/11)


console.log(" ")

let marks1 = [50, 56, 62, 69, 71, 77, 81, 83, 86, 91, 96]
let total1 = 2
for (let n=0; n<marks1.length; n++) {
    total1= total1 + marks1[n]
}

console.log("sum", total1)
console.log("average", total1/11)


console.log(" ")

let list= ["list1", "list2", "list3", "list4", "list5", "list6", "list7", "list8", "list9", "list10", "list11", "list12", "list13"]

list.push("list2");
console.log("push", list);


let ele= list.pop();
console.log("pop", ele);


let un= list.unshift();
console.log("unshift:", un)

let item= list.shift();
console.log("shift:", item)


let slice = list.slice();
console.log("slice:", slice)


let sort = list.sort();
console.log("sort", sort)