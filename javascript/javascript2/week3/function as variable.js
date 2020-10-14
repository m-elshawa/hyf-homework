
let myArr = [
    function arg1(){console.log("I'm func1")},
    function arg2(){console.log("I'm func2")},
    function arg3(){console.log("I'm func3")},
 ];

 myArr.forEach (x => x());

// for (var i = 0; i < myArr.length; i++) {
//     myArr[i]();
// };

//-----------------------------------------

const myFirstFunc = function () {
   console.log("1st function is called");
};

function mySecondFunc () {
    console.log("2nd Function is called");
};

myFirstFunc();
mySecondFunc();

//----------------------------------------

const myObj = {
    name: "Mino",
    address: "flakholmen 10",
    doThis: function() {
        console.log(myObj.address);
    }
};

myObj.doThis();

//--------------------------------------
