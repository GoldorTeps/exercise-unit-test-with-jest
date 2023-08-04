const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function (valueInEuro){
    let valueInDollar = valueInEuro * 1.2; 
    let valueInYen = valueInDollar * 127.9;
    return valueInYen; 
}


const fromYentoPound = function (valueInEuro){
    let valueInYen = valueInEuro * 127.9;
    let valueInPound = valueInYen * 0.8;
    return valueInPound; 
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYentoPound }

