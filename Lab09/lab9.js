
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
        let mystr = document.getElementById('input').value;
        output = window[value](mystr);
        output = "For algorithm " + value + " and input '" + mystr + "', output is '" + output +"'";
        document.getElementById('output').innerText = output;
    } );
}

/**
 * Function to compute the GCD of the smallest and largest number 
 * in an input array of numbers.
 * 
 * @param {number[]} numbers, an input array of numbers
 * @returns {number} the greatest common divisor of the smallest and largest number in the input.
 */
function gcd( numbers ) {
    /* write your own code here! */
    let divisorArray = [];
    let biggestNum = 0;
    let smallestNum = numbers[0];
    let counter = 0;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > biggestNum){
            biggestNum = numbers[i];
        }
    }

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] < smallestNum){
            smallestNum = numbers[i];
        }
    }

    while (counter <= smallestNum){
        if (biggestNum % counter === 0 && smallestNum % counter == 0){
            divisorArray.push(counter);
            
        }

        counter ++;

    }

    let gcd = divisorArray.pop();

    return gcd;

}

/**
 * Function to compute the intersection of numbers 
 * in two input arrays of numbers.  Each number in 
 * the output should be unique.
 * 
 * @param {number[]} nums1, an input array of numbers
 * @param {number[]} nums2, an input array of numbers
 * @returns {number []} an array containing every number that appears in both nums1 and nums2
 */
function intersection(nums1,nums2) {
    /* write your own code here! */
    let intersectArray = [];

    for (let i = 0; i < nums1.length; i++){
        for (let j = 0; j < nums2.length; j++){
            if (nums1[i] == nums2[j]){
                intersectArray.push(nums1[i]);
            }
        }
    }
    
    intersectArray.sort();
    let sameValue = [];

    for (let k = 0; k < intersectArray.length; k++){
        if (intersectArray[k] == intersectArray[k + 1]){
            sameValue.push(intersectArray[k]);
        }
    }

    for (let m = 0; m < sameValue.length; m++){
        for (let z = 0; z < intersectArray.length; z++){
            if (sameValue[m] == intersectArray[z] && sameValue[m] == intersectArray[z + 1]){
                intersectArray.splice((z + 1), 1);
            }
        }
    } 

    return intersectArray;

}


/**
 * Function to encode an input string using a ceasar
 * cipher that shifts letters in the input string
 * forward by one letter. 
 * 
 * @param {string} inputstring, an input string
 * @returns {string} an encoding of the input string according to the ceasar cipher.
 */
function ceasar( inputstring ) {
    /* write your own code here! */
    let input = inputstring.toLowerCase().split('');

    const alphabet = {
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z'

    }

    let codeKeys = Object.keys(alphabet);
    let codeValues = Object.values(alphabet);
    let code = [];
    


    for (let i = 0; i < input.length; i++){
        for (let j = 0; j < codeValues.length; j++){
            if (input[i] == codeValues[j]){
                code.push(codeKeys[j]);
            
            }
        }
    }

    for (let k = 0; k < code.length; k++){
        code[k] = Number(code[k]);
    }
    

    for (let r = 0; r < code.length; r++){
        if (code[r] == 26){
            code[r] = alphabet[1];
        }
        else{
            code[r] = alphabet[code[r] + 1];
        }
        
    }

    let codeString = code.join('');

    return codeString;

}



/**
 * Function to determine if an input string is a 
 * palindrome
 * 
 * @param {string} word, an input string
 * @returns {boolean} true if the word is a palindrome, else false.
 */
function isPalindrome( word ){
    /* write your own code here! */
    let wordLowecase = word.toLowerCase();
    let checkWord = wordLowecase.split('');
    

    for (let i = 0; i < checkWord.length; i++){
        if ('abcdefghijklmnopqrstuvwxyz'.includes(checkWord[i]) == false && 'abcdefghijklmnopqrstuvwxyz'.includes(checkWord[i + 1]) == false){
            checkWord.splice(i, 2);
        }
        else if ('abcdefghijklmnopqrstuvwxyz'.includes(checkWord[i]) == false){
            checkWord.splice(i, 1);
        }
    }

    let wordForward = [];

    for (let k = 0; k < checkWord.length; k++){
        wordForward.push(checkWord[k]);
    }

    let wordReverse = checkWord.reverse();
    let checkerArray = [];
    let counter = 0;
    
    while (counter < checkWord.length){
        if (wordForward[counter] == wordReverse[counter]){
            checkerArray.push(true);
        }
        else{
            checkerArray.push(false);
        }
        counter ++;
    }

    let notEqual = 0;

    for (let j = 0; j < checkerArray.length; j++){
        if (checkerArray[j] == false){
            notEqual ++;
        }
    }

    if (notEqual == 0){
        return true;
    }
    else{
        return false;
    }

}

/**
 * Function to determine if an input string is isomorphic 
 * with the word "YORK"
 * 
 * @param {string} word, an input string
 * @returns {boolean} true if the word is isomorphic with the word "YORK", else false
 */
function isIsomorphic( s ) {
    /* write your own code here! */
    let input = s.toLowerCase().split('');
    let word = ['y', 'o', 'r', 'k'];
    let checker = [];
    var dictionary = {};

    if (input.length == word.length){
        checker.push(word, input);
        for (let i = 0; i < 4; i++){
            dictionary[checker[1][i]] = checker[0][i];
        }

        let checkIsomorphic = Object.values(dictionary).join('');

        if (checkIsomorphic == 'york'){
            return true;
        }
        else{
            return false;
        }

    }
    else{
        return false;
    }

}


/**
 * Function to determine if a multidimensional array which represents a
 * Sudoku board is valid
 * 
 * @param {number[]} board, an input of a multidimensional array of numbers that is 9 x 9
 * @returns {boolean} true if the board is valid, else false
 * 
 */

function isSolved(board){
    let rowCounter = 0;
    let totalRow = 0;
    let columnCounter = 0;
    let totalColumn = 0;
    let rowValid;
    let columnValid;
    let subBoxCounter = 0;
    let nineCounter = 0;
    let subBoxValid = [];
    let counter = 0;

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < 9; j++){
            if (board[i][j] == 9){
                rowCounter ++;

            }
        }
        if (rowCounter == 1){
            totalRow ++;

        }
        rowCounter = 0;
    }
    if (totalRow == 9){
        rowValid = true;

    }
    else{
        rowValid = false;

    }

    for (let k = 0; k < board.length; k++){
        for (let z = 0; z < 9; z++){
            if (board[z][k] == 9){
                columnCounter ++;

            }  
        }
        if (columnCounter == 1){
            totalColumn ++;

        }
        columnCounter = 0;
       
    }
    if (totalColumn == 9){
        columnValid = true;

    }
    else{
        columnValid = false;

    }

    for (let b = 0; b < board.length; b++){
        for (let a = 0; a < 3; a++){
            if (board[b][a] == 9){
                subBoxCounter ++;

            }
            counter ++;

        }
        if (counter % 9 == 0){
            if (subBoxCounter == 1){
                nineCounter ++;
                subBoxCounter = 0;

            }
        }

    }
    if (nineCounter == 3){
        subBoxValid.push(true);

    }
    else{
        subBoxValid.push(false);

    }

    subBoxCounter = 0;
    nineCounter = 0;
    counter = 0;

    for (let d = 0; d < board.length; d++){
        for (let s = 3; s < 6; s++){
            if (board[d][s] == 9){
                subBoxCounter ++;

            }
            counter ++;

        }
        if (counter % 9 == 0){
            if (subBoxCounter == 1){
                nineCounter ++;
                subBoxCounter = 0;

            }
        }

    }
    if (nineCounter == 3){
        subBoxValid.push(true);

    }
    else{
        subBoxValid.push(false);

    }

    subBoxCounter = 0;
    nineCounter = 0;
    counter = 0;
    
    for (let t = 0; t < board.length; t++){
        for (let p = 6; p < 9; p++){
            if (board[t][p] == 9){
                subBoxCounter ++;

            }
            counter ++;

        }
        if (counter % 9 == 0){
            if (subBoxCounter == 1){
                nineCounter ++;
                subBoxCounter = 0;

            }
        }
        
    }
    if (nineCounter == 3){
        subBoxValid.push(true);

    }
    else{
        subBoxValid.push(false);

    }

    let notValid = 0

    for (let m = 0; m < subBoxValid.length; m++){
        if (subBoxValid[m] == false){
            notValid ++;

        }
    }

    if (rowValid == true && columnValid == true && notValid == 0){
        return true;

    }
    else{
        return false;

    }

}


//uncomment this line to test with vitest at the command line!
//comment it to test your algorithms in the browser.
//export { gcd, isSolved, intersection, isIsomorphic, ceasar, isPalindrome };

