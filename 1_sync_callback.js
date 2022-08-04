//let's create a function that takes an array and a callback
// our function loops through the array and for each item it applies a callback function
// the callback takes an array of numbers and multiplies it by two

const myNumbers = [ 1, 2, 3, 4, 5]


function loopMyNumbers (array, callback) {
    for(i=0; i<array.length; i++){
        callback(array[i])
    }
}

function multiplyByTwo (number){
    const newNumber = number * 2
    console.log(newNumber)
}


loopMyNumbers(myNumbers, multiplyByTwo)



