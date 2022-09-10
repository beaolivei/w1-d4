//let's create a calculator function that takes two numbers and perfom
// some calculation on it. 
// our calculator should handle sum and subtraction

function calculator (firstNumber, secondNumber, operation){
    const result = operation(firstNumber, secondNumber)
    console.log('The result is: ', result)
}

const sumCallback = (numberA, numberB) => {
    return numberA + numberB
}

const subtractionCallback = (n1, n2) => {
    return n1 - n2
}

calculator(100,30,subtractionCallback)


