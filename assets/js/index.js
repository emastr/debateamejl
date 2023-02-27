---

---

//style
var style = getComputedStyle(document.body);
var nPalette = 5;

// Function to generate a random RGB color value
function getColor(i){
    return style.getPropertyValue('--palette-' + String(i));
};

function getRandomColor() {
  return getColor(Math.floor(Math.random()*5));
};

function setRandomHover(obj, setter, default_col) {
    obj.addEventListener("mouseover", function(){
        setter(getRandomColor());
    });
    obj.addEventListener("mouseleave", function(){
        setter(default_col);
    });
};



// Get the button element
title = document.getElementsByClassName("site-title").item(0);
setRandomHover(title, function(val){title.style.backgroundColor=val}, style.getPropertyValue('--background'));


featuredOverlay = document.getElementsByClassName("featured-overlay");

function setter(i){
    return function(val){featuredOverlay.item(i).style.backgroundColor = val}
};

for (var i=0; i < featuredOverlay.length; i++){
    //setHover(featuredOverlay.item(i), setter(i));
    featuredOverlay.item(i).style.backgroundColor = getColor(i % nPalette); 
};

// Set the background color of the button to a random color when hovered over
//button.addEventListener("mouseover", function() {
//  button.style.backgroundColor = getRandomColor();
//});


//button.addEventListener("mouseleave", function() {
    //button.style.backgroundColor = style.getPropertyValue('--background');
//});

