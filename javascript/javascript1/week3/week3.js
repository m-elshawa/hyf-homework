let user = {
    Name: "Mizo",
    age: 35
}
console.log (typeof user);
console.log (user.Name);
console.log(user.age);

console.log("-----Item array removal");

const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

names.splice(1, 1);
console.log(nameToRemove);
console.log(names);

console.log("-----Array functions practice");

const myArr = ["Mizo", "Mindi", "Amin", "Ahmed", "Søren"];

console.log(myArr);

myArr.push("Felix");
console.log(myArr);

myArr.unshift("Simo");
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.splice(1, 0, "Moatassem");
console.log(myArr);

console.log("-----When we'll be there?");

function calculateTime(speed, distance) {
    
    const time = distance / speed;
    const hours = Math.floor(time);   // need explanation for line 41 & 42
    const minutes = Math.floor((time - hours) * 60);

    return hours + ' hours and ' + minutes + ' minutes';
}

const speed = 50;
const destinationDistance = 432;
const travelTime = calculateTime(speed, destinationDistance);

console.log(travelTime);

console.log("-----Series Duration of my life"); //need more explanation for the answer

const seriesDurations = [
    {
      title: 'Friends',
      days: 3,
      hours: 14,
      minutes: 32,  
    },
    {
      title: 'How I met your Mother',
      days: 3,
      hours: 4,
      minutes: 16,
    },
    {
      title: 'Brooklyn Nine-Nine',
      days: 2,
      hours: 1,
      minutes: 0,
    }
  ]

  // I don't understand parseFloat!!!!
  function calculatePercentage(years) {
    return parseFloat(years * 100 / 80).toFixed(4);
}

function calculateYears(days, hours, minutes) {
    const newHours = hours + (minutes / 60);
    const newDays = days + (newHours / 24);

    const years = (newDays / 365);

    return years;
}

function calculateTimeOfMyLife(seriesObject) {
    let totalTime = 0;

    for (let i = 0; i < seriesObject.length; i++) {
        const time = calculateYears(seriesObject[i].days, seriesObject[i].hours, seriesObject[i].minutes);
        totalTime += time;
        console.log(seriesObject[i].title + " took " + calculatePercentage(time) + "% of my life");
    }

    return totalTime;
}

const totalTime = calculateTimeOfMyLife(seriesDurations);
console.log("In total that is " + calculatePercentage(totalTime) + "% of my life");

console.log("-----Favorite songs");

// add songs
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

console.log(songDatabase);
 
function addSongToDatabase(song, songDatabase) {
    songDatabase.push(song);
    
    return songDatabase;
};

const newSong = {
    songId: 5,
    title: 'Real Love',
    artist: 'Masary',
    };

const otherSong = {
    songId: 6,
    title: 'Valio la pena',
    artist: 'Marc Anthony',
    }
const moreSong = {
    songId: 7,
    title: 'Despacito',
    artist: 'Fonzi',  
    }
const lastSong = {
    songId: 8,
    title: 'La Mordidita',
    artist: 'Ricky Martin',
    };

addSongToDatabase(newSong, songDatabase);
addSongToDatabase(otherSong, songDatabase);
addSongToDatabase(moreSong, songDatabase);
addSongToDatabase(lastSong, songDatabase);

console.log(songDatabase); // is it correct to make an array of new songs(objects) then add them all?!

// searching for a song, creating own playlist (Copied code, need explanation)

