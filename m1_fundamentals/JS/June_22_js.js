// Assignment 1

let month= "Feb"

if (
    month == "Jan" ||
    month == "Mar" ||
    month == "May" ||
    month == "Jul" ||
    month == "Aug" ||
    month == "Oct" ||
    month == "Dec" 
) {
    console.log("This month has 31 days")
}

else if (
    month == "apr" ||
    month == "Jun" ||
    month == "Sep" ||
    month == "Nov"
) {
    console.log("This month has 30 days")
}

else if (
    month == "Feb"
) {
    console.log ("This month has 28-29 days")
}



 
// Assignment 2

let range1=100, range2=90, range3=80, mark=93

if (mark=range1){
    console.log("The mark is A+")
}

else if (mark>=range2 && mark<=range1) {
    console.log("The mark is an A")
}

else if (mark>=range3 && mark<=range2) {
    console.log("this mark is a B")
}

