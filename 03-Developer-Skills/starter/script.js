// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// - What is temp amplitude? Answer: difference between highest and lowest temp

const tempAmplitude = (arr) => {
    arr.sort((a, b) => a - b); //sorts the array that was passed 
    
    console.log("sorted array:",arr);
    
    let finalArr = [];
    for (let i = arr.length - 1; i >= 0; i--) { //backwords loop 
        // console.log(i, arr[i])
        if (typeof arr[i] !== "number") continue; { //if the value is not a number it loops backwords untill it finde one
            console.log(arr[i], typeof arr[i])//logs the number and the type
            finalArr.push(arr[i]); //pushes the value of the index in the new array
            console.log(finalArr); 
            console.log(finalArr[0]); // the value of index 0
            console.log(finalArr[finalArr.length -1]); //the value of the last index
            console.log(finalArr[0] - finalArr[finalArr.length -1]); // the value of the first index - the value of the last index 
        }             
    }

    return `${finalArr[0]} - (${finalArr[finalArr.length -1]}) = ${finalArr[0] - finalArr[finalArr.length - 1]}`//difference between highest and lowest temp.
};

const temperatures = ["error", 3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5, "error"];
console.log(tempAmplitude(temperatures));

///////////////////////////////////////////////////////////////////////

//note: finding the max number in an array

const calcTempAmplitude = (temps) => {
    let max = temps[0];//this variable holds the first index value of the array that will be passed in. 
    
    for (let i = 0; i < temps.length; i++) {
        if (temps[i] > max) { //compares the value of the index to the value of the max variable. the first time it loops thru, it will be comparing the same value: index 0 to max. which max is index 0
            max = temps[i]; //if the index in the array is greater than the value of max variable. max becomes the value of the index.
            // first loop: 3 > 3 false, max = stays the same  
            //second loop: 7 > 3 true, max = 7
            //third loop: 4 > 7 false, stays the same
            //fourth loop: 8 > 7 true, max = 8
        }
    };
    return max;
};
console.log(calcTempAmplitude([3, 7, 4, 8]));