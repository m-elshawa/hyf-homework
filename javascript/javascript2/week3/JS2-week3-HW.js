console.log("setTimeOut..etc");
// -------------1----------- 

setTimeout(() => {
   console.log("Called after 2.5 seconds"); 
}, 2500);

// -------------2------------ 

function notThisFunctionName(delay, stringToLog) {
     setTimeout(() => {
        console.log(stringToLog);
     }, delay);
};

notThisFunctionName(5000, "This string logged after 5 seconds");
notThisFunctionName(10000, "This string logged after 10 seconds");

// --------------3--------------- 

const button1 = document.querySelector('#btn1');
button1.addEventListener("click", () => notThisFunctionName(5000, "Called after five seconds"));

// --------------4 Earth/Saturn------------ 
 
const firstVariable = function earthLogger() {
   console.log("Earth");
};
const secondVariable = function saturnLogger() {
   console.log("Saturn");
};

function planetLogFunction(paraLog) {
   paraLog();
}

planetLogFunction(firstVariable);
planetLogFunction(secondVariable);

// -------------5 Geolocation---------------

const btn2 = document.createElement("button");
btn2.innerHTML = "Log Location";
document.body.appendChild(btn2);
const lat = document.createElement("p");
const long = document.createElement("p");
document.body.appendChild(lat);
document.body.appendChild(long);
btn2.addEventListener('click', function() {
   navigator.geolocation.getCurrentPosition(function(position) {
      let latPosition = position.coords.latitude;
      let longPosition = position.coords.longitude;

      lat.innerHTML = "This is the Latitude:" + " " + latPosition;
      long.innerHTML = "This is the Longitude:" + " " + longPosition;
   });
}); 

// -------------6 Show location on map----------------

// -------------7-Run after delay---------(code copied)-------   

function runAfterDelay(delay, callback){
   setTimeout(delay, 4000);
   if(typeof(callback)==='function'){
       callback();
   }
};
runAfterDelay(function(){
console.log('Should be logged after 4 seconds!');
});

//--------------8-Double Clicked----------------

document.body.addEventListener('dblclick', function(doubleClicked) {
  // if(true) {
      console.log ("I Was Double Clicked");
   //};
});

// -------------9-Joke Creator---------------


function jokerCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
   if (shouldTellFunnyJoke) {
      logFunnyJoke();
   } else {
      logBadJoke;
   }

};

function logFunnyJoke() {
   console.log("What's the difference between peenut butter and jam?.....No one can peenut butter your ass :D");
};

function logBadJoke() {
   console.log("ain't got no jokes");
};

jokerCreator(true, logFunnyJoke, logBadJoke); // tried to switch to false, didn't log out logBadJoke !! why?

