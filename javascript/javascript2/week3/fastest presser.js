const pressFaster = document.getElementById("h1");
const btn1 = document.getElementById("btn1");
const myInput = document.querySelector("#input");

btn1.addEventListener("click", () => {
 if (myInput.value > 0) {const delayed = myInput.value * 1000;
  console.log(myInput.value);
  setTimeout(() => {
    const timeIsUp = document.createElement("h2");
    document.body.appendChild(timeIsUp);
    timeIsUp.innerHTML = "Time Out Bitches!!"
    timeIsUp.style.color = "gold";

    if (sCount > lCount) {
     const winText = document.createElement("p");
     document.body.appendChild(winText);
     winText.innerHTML = "Congrats to the S Presser: Wohooo";
     winText.style.color = "fuchsia";
     winText.style.fontSize = "30px";
     
    } else if (sCount < lCount) {
      const winText = document.createElement("p");
      document.body.appendChild(winText);
      winText.innerHTML = "Congrats to the L Presser: Wohooo";
      winText.style.color = "lime";
      winText.style.fontSize = "30px";
    }
    //console.log("Time Out Biatch");
  }, delayed);
}
});

const sKey = document.createElement("p");
const lKey = document.createElement("p");

document.body.appendChild(sKey);
document.body.appendChild(lKey);

sKey.innerHTML = "Press S";
lKey.innerHTML = "Press L";


let sCount = 0;
let lCount = 0;

window.addEventListener("keydown", function (e) {
  if (e.key.toLowerCase() == "s"){
    console.log(e.key);
    sCount++;
    sKey.innerHTML = sCount; 
} if (e.key.toLowerCase() == "l"){
    console.log(e.key); 
    lCount++;
    lKey.innerHTML = lCount;
}
});

//STYLING--------------------------------------
document.body.style.textAlign = "center";
pressFaster.style.fontSize = "50px";
pressFaster.style.color = "mediumslateblue";

btn1.style.height = "50px";
btn1.style.width = "120px";

myInput.style.width = "200px";
myInput.style.display = "block";
myInput.style.margin = "auto";
myInput.style.marginBottom = "30px"


btn1.style.borderWidth = "5px";
btn1.style.borderColor = "blue";
btn1.style.margin = "auto";
btn1.style.display = "block";
btn1.style.color = "olive";
btn1.style.backgroundColor = "lavender";
btn1.style.marginBottom = "30px"

sKey.style.color = "forestgreen";
lKey.style.color = "crimson";

sKey.style.fontSize = "30px";
lKey.style.fontSize = "30px";

sKey.style.display = "inline";
lKey.style.display = "inline";
sKey.style.textAlign = "left";
lKey.style.textAlign = "right";

sKey.style.paddingRight = "50px";
lKey.style.paddingLeft = "50px";

sKey.style.marginBottom = "0px";
lKey.style.marginTop = "0px";



//---------------------------------------------


