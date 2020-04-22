console.log("Spirit Animal Name Generator");

const inputElement = document.createElement("input");
inputElement.setAttribute("type", "text");
document.body.appendChild(inputElement);

const btn = document.createElement("button");
btn.innerText = "Enter Name";
document.body.appendChild(btn);

const btn2 = document.createElement("button");
btn2.innerText = "Get New Animal";
document.body.appendChild(btn2);
btn2.addEventListener ("click", ()=> console.log("Get New ANimal"))

const para = document.createElement("p");
para.innerText = "Your Spirit Animal";
document.body.appendChild(para);

btn.addEventListener("click", () => console.log(inputElement.value));

const parag = document.createElement("p");
document.body.appendChild(parag);

const spiritAnimal = ["The Clapping Penguin", "The Donald Duck", "The Tough Rat", "The Scary Chick", "The Funny Wolf", "The Kungfu Panda", "The Ninja Turtle", "The Smart Donkey", "The Super Mouse", "The Flying Elephant"];
btn.addEventListener("click", giveAnimal);
var currentName = "";
function giveAnimal () {
    if (inputElement.value === "") {
        alert ("Please enter your name");
    } else {
    parag.innerText = inputElement.value + ": " + spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)];
    currentName = inputElement.value;
    inputElement.value = "";
    console.log(currentName);
}
};

btn2.addEventListener("click", giveNewAnimal);
function giveNewAnimal () {
    if (currentName !== "") {
        parag.innerText = currentName + ": " + spiritAnimal[Math.floor(Math.random() * spiritAnimal.length)]; 
    }
    
};




