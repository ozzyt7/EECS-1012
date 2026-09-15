/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
This is the front end code for a simple distributed web application.
It contains an API call to code that will run on a node server.
**/

/** CONSTANTS **/
const CHECKED_IMG = "./assets/checked.png"; //the checkbox, checked
const UNCHECKED_IMG = "./assets/unchecked.png"; //the checkbox, unchecked
const checkboxes = document.querySelectorAll('.checkbox'); //holds every checkbox object in the DOM!!
const selected = {"one": null, "two": null, "three": null, "four": null} //to store checkbox selections
const apiUrl = 'http://localhost:8080/getresult'; //URL where we will send our data

/**
 * Start the game. 
 * This function will zero out the 'selections' dictionary.
 * It will also attach event listeners to the checkboxes
 * and the "restart button", hide the results section, and
 * disable the restart button.
 * 
 * It will also unselect every checkbox using a function
 * that you will write (called unselectOption).
 */
function startGame() {
  for (const key in selected){ //to loop over keys use 'key in collection'
    selected[key] = null;
  }

  for (let checkbox of checkboxes){ //to loop over items use 'item of collection'
    unselectOption(checkbox); //you must write this function!!
    checkbox.addEventListener('click', check); //attach event listeners to each checkbox

    
  }
  
  const firstQuestion = document.querySelector(".question");
  firstQuestion.scrollIntoView();

  const overlay = document.getElementById("results")
  overlay.style.visibility = 'hidden';

  const btn = document.getElementById("submit");
  btn.addEventListener('click', startGame); //attach event listener to restart the game
  btn.disabled = true; //disable button for time being

}

/**
 * This function will send data in the `selected' variable ... to the external API!
 * It will then receive a response and pass this a function of yours, so 
 * that it ca be displayed.
 */
function getResult(){
  fetch(apiUrl + '?data=' + JSON.stringify(selected)).then(response => {
    if (!response.ok) { //If there server reports a problem, throw an error!
      throw new Error('Network response was not ok');
    }
    return response.json(); //If not, send the response down the line.
  })
  .then(data => {
    setResultBox(data); //Once the response has been returned, pass the response to your function!
  })
  .catch(error => {
    console.error('Error:', error); //Any other unexpected errors?  If yes, display the error.
  });
}

/**
 * This function:
 * 1. Removes the event listeners from every checkbox.
 * 2. Calls getResult() in order to retrieve and display a quiz result from a remote API.
 */
function processComplete(){
  for (const checkbox of checkboxes){
    checkbox.removeEventListener('click', check); //stop the checkboxes from listening 
  }
  getResult(); //get the result from the server
}

/**
 * This function adds a key-value pair to the select variable.
 * 
 * @param {string} key, the name of the key
 * @param {string} value, the value to add at the key
 */
function select(key, value){
  selected[key] = value;
}

/**
 * This function should:
 * 1. Determine every selection has been made by the user.
 * You can do this by looking at the values of the 'selected' dictionary.
 * If there are no null values in the dictionary, the quiz is complete.
 * 2. Return true if the quiz is complete, else false.
 * 
 * @returns {boolean} true, if quiz is complete, else false
 */
function isComplete() {
  /* write your code here */

  //Declares variables
  let quizComplete = false;
  let counter = 0;
  let letterCounter = 0;
  let selectedValues = Object.values(selected);
  let valueLength = Object.values(selected).length;
  let arrayLetter;

  //Iterates over each element in the array of values 
  while (counter <= valueLength){
    arrayLetter = selectedValues[counter];

    //If an element in the array is not null adds 1 to variable letterCounter
    if(arrayLetter != null){
      letterCounter ++;

    }

    counter ++;

  }

  //If the variable letterCounter is the same value as the length of array of values assigns true boolean and returns quizComplete
  if (letterCounter === valueLength){
    quizComplete = true;
    return quizComplete;

  }

  //Else returns variable quizComplete as already assigned false boolean
  else{
    return quizComplete;

  }
  
}


/**
 * This function accepts an image element (a checkbox) in the DOM.  It should:
 * 1. Make the SRC attribute of the given checkbox image = CHECKED_IMG
 * 2. Locate the parent element of the image and make it's background colour "#cceeff".
 * 3. Access the values of the `data-selection' and `data-qid' attribute of the parent elemnt. 
 * These should be stored as a key-value pair in the global variable `selected'.
 * 
 * @param {Object} a checkbox element in the DOM
 */
function selectOption(checkbox){
  /* write your code here */

  //Changes the element src attribute
  checkbox.src = CHECKED_IMG;

  //Locates the parent element and changes its background color
  const boxParent = checkbox.parentElement;
  boxParent.style.backgroundColor = "#cceeff";

  //Obtains the attributes values of the parent element 
  var value = boxParent.getAttribute("data-selection");
  var key = boxParent.getAttribute("data-qid");

  //Calls function to store values in 'selected' variable
  select(key, value);

}




/**
 * This function accepts an image element (a checkbox) in the DOM.  It should:
 * 1. Make the SRC attribute of the given checkbox image = UNCHECKED_IMG
 * 2. Locate the parent element of the image and make it's background colour WHITE.
 * 3. You do NOT need to manipulate the global variable `selected' in this function.
 * 
 * @param {Object} a checkbox element in the DOM
 */
function unselectOption(checkbox){
  /* write your code here */

  //Changes the element src attribute 
  checkbox.src = UNCHECKED_IMG;

  //Locates the parent element and changes the background color to white
  const boxParent = checkbox.parentElement;
  boxParent.style.backgroundColor = "white";
 
}


/**
 * This function should do the following:
 * 
 * 1. call `selectOption' on the HTML element that was clicked. Note that you the DOM 
 * element that triggered the event will be stored in event.currentTarget
 * 2. call `unselectOption' on every other HTML img element that is a sibling of the 
 * element that was clicked. 
 * 3. Check to determine if every selection has been made. You can do this using the
 * isComplete() function.
 * 4. If every selection has been made, call processComplete().
 * 
 * @param {*} event A click event
 */
function check(event) {
  /* write your code here */

  //Declares element that was clicked and declares 'uncheckedBoxParent' variable as empty variable
  const clicked = event.currentTarget;
  var uncheckedBoxParent;
  
  //Calls the 'selectOption' function on element that was clicked
  selectOption(clicked);

  //Locates the parent element of element that was clicked and the parent element's attribute 
  var elementParent = clicked.parentElement;
  var parentAttribute = elementParent.getAttribute("data-selection");

  //Determines if the unchecked box is the next element sibling of the element that was clicked
  if (parentAttribute === "I" || parentAttribute === "S" || parentAttribute === "T" || parentAttribute === "J"){
    uncheckedBoxParent = elementParent.nextElementSibling;

  }

  //Else the unchecked box is determined to be the previous element sibling of the element that was clicked
  else{
    uncheckedBoxParent = elementParent.previousElementSibling;

  }

  //Declares the uchecked box as the last element child of the parent element
  var uncheckedBox = uncheckedBoxParent.lastElementChild;

  //Calls the function on the unchecked box
  unselectOption(uncheckedBox);

  //Stores the value of 'isComplete' function in variable 'gameOver'
  var gameOver = isComplete();
  
  //If gameOver is true boolean then call function 'processComplete'
  if (gameOver == true){
    processComplete();

  }
  

}


/**
 * This function should display the result of a server call to the page.  
 * The format of the result will be JSON, as follows:
 * {"title":"Some title","contents":"Some text"}
 * Your function should:
 * 
 * 1. Place the contents ("Some title" in the example above) in the "title" element within the DOM.
 * 2. Place the contents ("Some text" in the example above) in the "text" element within the DOM.
 * 3. Change the style of the results section in the DOM so it is visible.
 * 4. Enable the submit button (i.e. the button with id="submit")
 * 
 * @param {string} result A JSON string containing the server's response.
 */
function setResultBox( result ){
  /* write your code here */

  //Identify title element and place corresponding content
  const title = document.getElementById('title');
  title.innerText = result["title"];

  //Identify the text element and place corresponding content
  const text = document.getElementById('text');
  text.innerText = result["contents"];

  //Makes the result element visible to user 
  const outcome = document.getElementById('results');
  outcome.style.visibility = 'visible';

  //Enables the submit button
  const submit = document.getElementById('submit');
  submit.disabled = false;

}

//for testing at the CLI!
//export { isComplete, select }