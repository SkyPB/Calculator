/* Task List
Function to click button
Function to display text from button clicked
Function to use keyboard to display text
Function to calculate displayed text
Display current numbers, operation, and results
Function to reset input
Function to handle errors
Function to display error message
*/

let text = "";

// Function to handle button click
const buttonClick = function (buttonValue) {
  text += buttonValue;
  displayText();
  console.log(text);
};
// Function to display text on screen
const displayText = function () {
  const displayScreen = document.getElementById("result");
  displayScreen.value = text;
};
// Function to clear screen
const clearText = function () {
  text = "";
  displayText();
};
// Function to delete last character
const deleteText = function () {
  text = text.slice(0, -1);
  displayText();
};

const calculate = function () {
  let result = math.evaluate(text);
  const resultScreen = document.getElementById("result");
  resultScreen.value = result;
  text = result.toString();
  displayText();
};

if (buttonValue / 0) {
  displayText("Invalid Input");
}
