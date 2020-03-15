console.log('-----For loop exercise');

for (let i=74; i <= 98; i++) {
    console.log(i);
}

console.log('-----for loop in a function');

function logString(stringToLog, numberOfTimesLog) {
    let result = "";
    for (let i = 0; i < numberOfTimesLog; i++) {
        result += stringToLog;
    }
    return result;
}

const myString= logString('hello ', 3);
console.log(myString);


console.log("-----Full Name");

function getFullName (firstname, surname) {
       
    return (firstname + surname);
}

fullName = getFullName('Benjamin ', 'Hughes');

console.log(fullName);


console.log("-----Formal Full Name");

function formalName(useformalname, firstname, surname) {

    if (useformalname) {
        return ("Lord " + firstname + " " + surname);
    } else {
        return (firstname + surname);
    }
}

getFullNameFormal = formalName ("Lord" , "Benjamin", "Hughes");
console.log(getFullNameFormal);


console.log("-----Event Application");
// Can't I use forloop to solve this exercise? (tried but gave me undefined)

function getEventWeekday(day) {
    const today = new Date();
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const eventDate = today.getDay() + (day % 7);

    return week[eventDate];
}

console.log('The event is ' + getEventWeekday(2));

console.log("-----Weather Wear");

function wearWhat(temp) {
      if (temp < 10) {
        return "Jacket & Boots"
    } else if (temp < 20) {
        return "Sweaters and Sneakers"
    } else {
        return "Shorts T-shirts & Flip Flops"
    }
}

console.log(wearWhat(30));
console.log(wearWhat(15));

console.log("-----Student Manager")
// Couldn't do this exercise- very confusing

const class07Students = [];
function addStudentToClass(studentName) {
    
}

newStudents = class07Students.push("Ahmed", "Mindi", "Amin");
console.log(newStudents);

function getNumberOfStudents() {
    // You write code here
}

console.log("-----Candy Helper");
// tough exercise