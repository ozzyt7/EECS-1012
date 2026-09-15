/**
 * Introduction to Computing: A Net-centric Approach

=== EECS Fall 2024 ===
Lassonde School of Engineering

=== Module Description ===
This is the back end code for a simple distributed web application.
It reponds tp API calls from a client.
**/

'use strict';

const constants = require('./constants'); //import constants, save to the variable 'constants'.  You will need these!
const express = require('express');
const port = 8080;
const app = express();

//route
app.get('/getresult', (req, res) => {
  console.log("Starting GET to getResult!",);
  // prepare the response
  let selected = JSON.parse(req.query.data);
  var jsontext = JSON.stringify(getResult(selected));
  // send the response to the client	
  res.header("Access-Control-Allow-Origin", "*");
  res.send(jsontext);  
});

//listen
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); //server will need to listen ... all the time!!

/**
 * This function will accept a JS object containing key-value pairs, as follows:
 * { one: a, two: b, three: c, four: d }
 * where a, b, c and d are characters.
 * It will return a JS object derived containing key-value pairs as follows:
 * { title: e, contents:f }
 * where  e and f are strings. These key-values are stored in the variable `constants'.
 * For example, if the input is { one: 'I', two: 'N', three: 'F', four: 'J' }
 * you should return the value in `constants' that corresponds to the key `INFJ'.  
 * This key/value pair follows:
 * 'INFJ': {
      title: 'Introverted, Intuitive, Feeling, Judging people like ALTERNATIVE ROCK',
      contents: "INFJs are a highly cause-oriented personality type, and as such ..."
    }
 * 
 * @param{ Object } selected - key-value pairs (e.g. { one: a, two: b, three: c, four: d } )
 * @return{ Object } key-value pairs (e.g. { title: e, contents:f } )
 */
function getResult( selected ) {
  /* write your code here! */

  // Obtain all values from object 'selected'
  var values = Object.values(selected);

  // Puts all values into a single string
  var result = values.join("");
  
  // Returns the correspong key-value pairs in constants matching the string in variable 'result'
  return constants[result];

}



///uncomment the line below to run the unit tests on some back end functions!
//export { getResult } //for testing at the CLI!