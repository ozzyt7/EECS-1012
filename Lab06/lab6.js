
/**
 * The function below should tie the execution of your algorithms
 * to interactions with elements in your HTML.
 * Once you have completed the lab, this should 
 * allow you to run algorithms within the browser!
 */
function activateButton(){
    const button = document.getElementById('submit');
    button.addEventListener('click', function() {
        let value = document.getElementById('algorithm').value;
        let number = document.getElementById('input').value;
        output = window[value](number);
        output = "For algorithm " + value + " and input " + number + ", output is " + output;
        document.getElementById('output').innerText = output;
    } );
}

//Complete, and add JSDoc to each function below!

/**
 * Accepts a number and determines whether the number is an Armstrong number.
 * Checks if the sum of the values of the digits raised to the power of the number of digits
 * is equal to the number. Returns true boolean if number is an Armstrong number.
 * 
 * Pre-conditions: input is a positive integer 
 * 
 * Post-conditions: true boolean if number is an Armstrong number, false boolean if not an Armstrong number
 * 
 * @param {number}  number - input is a poistive integer
 * @return {boolean} true, if number is an Armstrong number, else false 
 */
function problem1( number ) {
    let original = number;
    let i = 0;
    let digits = [];

    while (number >= 1){
        digits[i] = number % 10;
        number = Math.floor(number / 10);
        i ++;
    }

    let sum = 0;

    for (let i = 0; i < digits.length; i++){
        sum += digits[i]**digits.length;
    }

    return sum == original;
    
}




/**
 * Accepts a number and determines whether the number is a perfect number.
 * Checks if the number is equal to the sum of the number's positive 
 * proper divisors excluding the number itself. 
 * 
 * Pre-condition: input is a poistive integer
 * 
 * Post-condition: true boolean if number is determined to be a perfect number, false boolean if number is not a perfect number
 * 
 * 
 * @param {number} number - a positive integer
 * @return {boolean} - true, if number is a perfect number, else false
 */
function problem2( number ) {
    let counter = 0;
    let i = 1;
    let divisors = [];

    while (i <= number / 2){
        if (number % i == 0){
            divisors[counter] = i;
            counter ++;
        }
        
        i ++;  
    }

    let sum = 0;

    for (let i = 0; i < divisors.length; i ++){
        sum += divisors[i];
    
    }
    return sum == number;

}




/**
 * Accepts a number and determines the sum of first N terms of the following
 * series: 5 + 55 + 555 + 5555.... up to N terms.
 *
 * Pre-conditions: input is a positive integer 
 * 
 * Post-conditions: the sum of the series up to the term of the input
 * 
 * @param {number} number - a poistive integer
 * @returns {number} - sum of the series up to the term of the input
 * 
 */
function problem3( number ) {
    let sum = 0;
    let counter = 1;
    

    while (counter <= number){
        var i = 1;
        var num = 5;

        while (i < counter){
            i++;
            num = 10 * num + 5;
        }

        sum += num;
        counter += 1;
    }

    return sum;
    
}




/**
 * Accepts a number and determines if the number is either a prime
 * number or not a prime number.
 * 
 * Pre-conditions: input is a positive integer
 * 
 * Post-conditions: true boolean if number is a prime number, false boolean if number is not a prime number
 * 
 * @param {number} - number is a positive integer
 * @return {boolean} - true boolean if number is a prime number, else false
 * 
 */
function problem4( number ) {
    let flag = true;
    let i = 2;

    while (i <= Math.floor(number / 2) && flag){
        if (number %  i == 0){
            flag = false;
        }
        else{
            i ++;

        }
    }

    if (number == 1){
        flag = false;
    }

    return flag;

}



/**
 * Accepts a number and detemermines the charge for luggage on railways
 * For the first 40 kg. of weight, the charge is a flat $5.75. 
 * For every additional 20 kg (or part thereof) up to 500kg, there is an additional charge of $3.50. 
 * For weight beyond 500 kg., the charge is calculated at the rate of $0.50 per kg.
 * 
 * Pre-conditions: input is the weight of luggage
 * 
 * Post-conditions: The charge for luggage on railways
 * 
 * @param {number} - number is the weight of the luggage
 * @return {number} - The charge for luggage 
 * 
 */
function problem5( number ) {
    let cost = 5.75;
    let remainder = 0;

    if (number > 40){
        number -= 40;
        remainder = number - 460;
        cost += Math.ceil(Math.min(number, 460) / 20) * 3.50;
        
    }

    if (remainder > 0){
        cost += remainder * 0.50;
    }

    return cost;

}



/**
 * Accepts a number and determines the Nth number in the Fibonacci 
 * sequence inputted by the user. 
 * 
 * Pre-conditions: input is a positive integer
 * 
 * Post-conditions: the Nth number in the Fibonacci sequence
 * 
 * 
 * @param {number} number - input is a positive integer
 * @return {number} - The Nth Fibonacci number
 */
function problem6( number ) {

    if (number >= 2){
        var b = 0;
        var c = 1;
        var val = 2;

        while (val <= number){
            let a = b;
            b = c;
            c = a + b;
            val += 1;

        }
    }

    else{
        var c = number;
    }

    return c;

}

//uncomment this line to test with vitest at the command line!
//comment it to test your algorithms in the browser.
//export { problem1, problem2, problem3, problem4, problem5, problem6 }