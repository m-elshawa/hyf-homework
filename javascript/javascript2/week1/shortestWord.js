console.log("find the shortest word");

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
console.log(danishWords);

console.log(
  danishWords.reduce((a, b) => a.length <= b.length ? a : b)
);

//I found the code above, but yet I dont understand it