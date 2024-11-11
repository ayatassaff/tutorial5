// number of circles we have in the game
var numCircles = 6;
// The colour variable should be an array that contains as many random RGB colours as there are circles. 
var colours = [];
// This pickedColor is the RGB color we are trying to guess (string)
var pickedColor;
// This is the default colour of the game. 
let defaultColour = "#582c99";

// Grab all appropriate elements from the HTML.
var circles;
var colourToGuess;
var resultMessage;
var banner;
var resetButton;

init();

// The init function should reset the stage and set a new RGB color
function init() {
  // Call the reset function
  reset();

  // Set the text of the colourToGuess element to display the correct RGB color
  colourToGuess.textContent = pickedColor;

  // Get the reset button element and set the event listener
  resetButton = document.querySelector("#reset-button");
  resetButton.addEventListener("click", reset);
}

// Setup so that when the reset button is clicked, the reset function gets called

// Define what should happen when any circle is clicked. 
// When a circle is clicked, it should check if the color of a circle 
// is the same as the color to be guessed. If it is, you have won. You should set 
// the display message to "You win", change the text of the reset button to "Play again"
// and set the color of each circle and of the banner to be the color we were guessing. 
// If the color you clicked on was incorrect, you should set the color of the circle you just clicked to be the default color 
// and change the result text to be "Try again"
function clickCircle(event) {
  var clickedColor = event.target.style.backgroundColor;
  if (clickedColor === pickedColor) {
    resultMessage.textContent = "You win!";
    resetButton.textContent = "Play again";
    // Change the color of all circles and the banner to the correct color
    for (var i = 0; i < circles.length; i++) {
      circles[i].style.backgroundColor = pickedColor;
    }
  } else {
    event.target.style.backgroundColor = defaultColour;
    resultMessage.textContent = "Try again";
  }
}

// The reset function should set new values for the colours array by calling genRandomColours.
// pick a color from these and set it as the color you are trying to pick. This color 
// should be obtained by calling chooseColor.
// Display the colour RGB value on the main page.
// Set the colour of the circles to the random colors you generated. 
// Set the color of the banner to the default color, set the text of the reset
// button to "Restart" and the result text to an empty String. 
// Ensure that if a circle is clicked that the clickCircle function is called. 
function reset() {
  circles = document.querySelectorAll(".circle");
  colourToGuess = document.querySelector("#colour-to-guess");
  resultMessage = document.querySelector("#result-message");

  genRandomColours();
  pickedColor = chooseColor();

  // Set the colors for the circles and set up the click event listener
  for (var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colours[i];
    circles[i].addEventListener("click", clickCircle); 
  }

  // Set up the game reset state
  resultMessage.textContent = "";
  resetButton.textContent = "Restart";
}

// Write a function to make a random RGB color. For RGB colours are 
// made up of 3 values from 0 to 256. You should basically generate 3 random 
// numbers and create a string "rgb(0,0,0)" but replace the 0 with random values. 
// return that string
function makeColour() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Write a function that will set new values for the colours array.
// It should contain as many RGB color strings as there are circles
function genRandomColours() {
  colours = [];
  for (var i = 0; i < numCircles; i++) {
    colours.push(makeColour());
  }
}

// return one of the 6 RGB colours you created and stored in colours
// this function should set the colour you are guessing.
function chooseColor() {
  var randomIndex = Math.floor(Math.random() * colours.length);
  return colours[randomIndex];
}
