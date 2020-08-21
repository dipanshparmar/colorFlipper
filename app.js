// getting the simple button
const simpleButton = document.querySelector(".simple");

// getting the hex button
const hexButton = document.querySelector(".hex");

// getting the click me button
const clickMeButton = document.querySelector("#main-content .click");

// pointer variable
let simple = true;

// variable which is going to help to access the colors
let index = 0;

// acrions when there is a click on simple button
simpleButton.addEventListener("click", () => {
  // changing background to white
  (document.querySelector("body").style.background = "white");

  // adding box shadow
  document.querySelector("header").style.boxShadow =
  "5px 5px 5px rgb(214, 211, 211)";

  // setting simple to true
  simple = true;
  // making the button color blue
  simpleButton.style.color = "rgb(6, 92, 133)";
  // removing the color from hex button
  document.querySelector(".hex").style.color = "black";
});

// action when there is click on hex button
hexButton.addEventListener("click", () => {
  // setting simple to false
  simple = false;
  // changing the text color of the clicked button
  hexButton.style.color = "rgb(6, 92, 133)";
  // setting another button's color to white
  simpleButton.style.color = "black";
});

// action when click me button is clicked
clickMeButton.addEventListener("click", () => {
  // checking if simple button is active
  if (simple) {
    // code for simple button
    // declaring an array of different colors
    const colors = ["orange", "red", "green", "yellow", "pink"];

    // checking the index
    if (index < colors.length) {
      document.querySelector("body").style.background = colors[index];
      document.querySelector("header").style.visibility = "hidden";
      document.querySelector(".dynamic-content").innerText = colors[index];
      ++index;
    } else {
      index = 0;
      document.querySelector("body").style.background = colors[index];
      document.querySelector(".dynamic-content").innerText = colors[index];
      index++;
    }
  } else {
    // code for hex button
    const hexColorCodes = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    // setting the length of hex code
    const hexLength = 6;

    // generating a hex value
    let hexValue = "#";
    for (let i = 0; i < hexLength; i++) {
      hexValue +=
        hexColorCodes[Math.floor(Math.random() * hexColorCodes.length)];
    }

    document.querySelector("header").style.background = "white";
    document.querySelector("header").style.boxShadow = "none";

    // changing the body color
    document.querySelector("body").style.background = hexValue;

    // displaying the hex value on the page
    document.querySelector(".dynamic-content").innerText = hexValue;
  }
});

// performing actions on reset button
document.querySelector(".reset").addEventListener("click", () => {
  document.querySelector("header").style.boxShadow =
    "5px 5px 5px rgb(214, 211, 211)";
  document.querySelector("header").style.visibility = "visible";
  document.querySelector("body").style.background = "white";
  document.querySelector(".dynamic-content").innerText = "#FFFFFF";
});
