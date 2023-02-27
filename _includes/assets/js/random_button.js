// Get the button element
button = document.getElementsByClassName("site-title").item(0);

palette = document.getElementById("palette-1")

// Function to generate a random RGB color value
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Set the background color of the button to a random color when hovered over
button.addEventListener("mouseover", function() {
  button.style.backgroundColor = palette;
  //getRandomColor();
});

