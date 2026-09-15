/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
In this module we write some simple functions in that illustrate
basic logical operations and the use of selection statements (if
and switch).
**/


/**
 * An Example function!
 * Return a string that says hello.
 * @return {string} the string 'hello'.
 */

function hello () {
    return 'hello';
}


/**
 * Test to see if a, b and c are all equal in value
 * @return {boolean} true if all equal, else false
 */

function allEqual (a, b, c) {

    // Compares all inputs too see if they are equal in type and value and returns true boolean
    if(a === b && a === c && b === c){
        return true;
    }

    // Returns false boolean if conditions aren't met
    else {
        return false;
    }
}



/**
 * Returns a number between 1 and 6, representing
 * the roll of a loaded die.
 * 
 * The probability of rolling a 1 is 1/10.
 * The probability of rolling a 2 is 1/10.
 * The probability of rolling a 3 is 1/10.
 * The probability of rolling a 4 is 1/10.
 * The probability of rolling a 5 is 1/10.
 * The probability of rolling a 6 is 1/2.
 * 
 * @return {number} a number between 1 and 6
 */

function rollLoadedDie () {
    
    // Generates a random number between 0 and 1 including 0 and stores in variable dice_num
    let dice_num = Math.random();

    //Assigns 1/10 probability and returns the appropriate number
    if (dice_num < 0.1){
        return 1;
    }

    // Assigns 1/10 probability and returns the appropriate number
    else if (dice_num < 0.2){
        return 2;
    }

    // Assigns 1/10 probability and returns the appropriate number
    else if (dice_num < 0.3){
        return 3;
    }

    // Assigns 1/10 probability and returns the appropriate number
    else if (dice_num < 0.4){
        return 4;
    }

    // Assigns 1/10 probability and returns the appropriate number 
    else if (dice_num < 0.5){
        return 5;
    }

    // The remianing 1/2 probability is designated to returning the number 6
    else {
        return 6;
    }
    
}



/**
 * Returns a string indicating the most likely
 * animal, given the inputs.
 * 
 * Returns the string "It's a cat" if hasFourLegs and climbsTrees are both true.
 * Returns the string "It's a snake" if hasFourLegs is not true but climbsTrees is.
 * Returns the string "It's a dog" if hasFourLegs is true but climbsTrees is not.
 * Returns the string "It's a fish" if hasFourLegs and climbsTrees are both false.
 * 
 * @param {boolean} hasFourLegs - true if has four legs, else false
 * @param {boolean} climbsTrees - true if climbs rrees, else false
 * @return {string} a string with a guess as to the animal
 */

function guessAnimal (hasFourLegs,climbsTrees) {

    // Assess if both inputs are true and returns 'It's a cat' string
    if (hasFourLegs == true && climbsTrees == true){
        return "It's a cat";
    }

    // Assess if hasFourLegs boolean is false and climbsTrees boolean is true and returns 'It's a snake' string
    else if (hasFourLegs == false && climbsTrees == true){
        return "It's a snake"
    }

    // Assess if hasFourLegs boolean is true and climbsTrees boolean is false and returns 'It's a dog' string
    else if (hasFourLegs == true && climbsTrees == false){
        return "It's a dog"
    }

    // Returns 'It's a fish' string if no conditions are met
    else{
        return "It's a fish"
    }

}



/**
 * Returns a string indicating the name of the month,
 * given a number between 1 and 12
 * 
 * Returns the string "January" the input is 1,
 * Returns the string "February" the input is 2,
 * and so on.
 * Returns the string "Error" if the input is not a number or not in 
 * the range between 1 and 12.
 * 
 * @param {number} num - the number of the month
 * @return {string} a string with the name of the month
 */

function month (num) {

    let month_test;

    //Checks if the input is within the designated range and rounds the number to nearest whole number to avoid decimals and stores in variable month_test
    if (num >= 1 && num <= 12){
         month_test = Math.round(num);

        // Examines month_test variable against the case values and returns the appropriate month string
        switch(month_test) {
            case 1:
                return "January"; 

            case 2:
                return "February";

            case 3:
                return "March";

            case 4:
                return "April";

            case 5:
                return "May";

            case 6:
                return "June";

            case 7:
                return "July";

            case 8:
                return "August";

            case 9:
                return "September";

            case 10:
                return "October";

            case 11:
                return "November";

            case 12:
                return "December";

            }

}
    // Returns 'Error' string if conditions aren't met
    else {
        return "Error"
}
} 



/**
 * Returns a boolean indicating if the input year is a leap year.
 * 
 * All leap years are divisible by 4, however
 * No leap years are divisible by 100 unless they are
 * also divisible by 400.
 * 
 * @param {number} year - the year to test
 * @return {boolean} true, if is leap year, else false
 */

function isLeapYear (year) {

    // Checks if the input is divsible by 4 and not divisble by 100 and returns true boolean
    if (year % 4 == 0 && year % 100 != 0){
        return true;
        }

    // Checks if the input is divisble by 400 and 100 and returns true boolean
    else if(year % 400 == 0 && year % 100 == 0){
        return true;
    }

    // Returns false boolean no conditions are met
    else{
        return false;
    }

}




/**
 * Returns a boolean indicating if the input character is a vowel
 * 
 * @param {string} character - a character to test
 * @return {boolean} true, if input is a vowel (upper or lower case); else false.
 */

function isVowel (character) {

    let vowelTest;

    // Assess the type of the input and adjust the input to lowercase to accomadate for capitalization and stores in variable vowelTest
    if (typeof character === 'string'){

        vowelTest = character.toLowerCase();

        // Examines the vowelTest variable against the cases values and returns the appropriate boolean
        switch (vowelTest){
            case "a":
                return true;

            case "e":
                return true;

            case "i":
                return true;
                
            case "o":
                return true;

            case "u":
                return true;

            // Returns false boolean if there is no match between variable and case values 
            default:
                return false
    }
        }
        // Returns false boolean if conditions aren't met
        else {
            return false
        }

}




/**
 * DO NOT CHANGE THE LINE THAT IS BELOW.

*/

export {  hello, guessAnimal, month, isVowel, isLeapYear, allEqual, rollLoadedDie }


