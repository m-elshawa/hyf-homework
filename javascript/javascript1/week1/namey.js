let firstWords = ['Easy', 'Awesome', 'Corporate', 'Sweet', 'Smart', 'Funky', 'Cranky', 'Positive', 'Funny', 'Solid'];
let secondWords = ['This', 'is', 'great', 'to', 'understand', 'javascript', 'in', 'a', 'short', 'period'];

console.log(firstWords);
console.log(secondWords);

const randomNumberFirst = Math.floor(Math.random(1) * 10) + 0
const randomNumberSecond = Math.floor(Math.random(5) * 10) + 0

let startUpName = firstWords[randomNumberFirst] + "" + secondWords[randomNumberSecond];

console.log("The startup " + "startupname " + "has " + "startupname.length " + "characters ")
