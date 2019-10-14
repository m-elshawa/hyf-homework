var arr = [2, 4, 6, 8, 10];

function halfArr(arr1) {
    const temp = []
    for(var i =0; i < arr1.length; i++) {
        temp.push(arr1[i]/2);
    }
    return temp;
}

console.log(halfArr(arr));




