console.log("Doubling Of Numbers");

let numbers = [1, 2, 3, 4];

oddNumbers = numbers.filter(x => x % 2 !== 0);

doubeledNumbers = oddNumbers.map(x => x * 2);

console.log(doubeledNumbers);

