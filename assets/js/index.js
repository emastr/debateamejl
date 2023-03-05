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

///////
var site_nav_marker = document.getElementsByClassName("site-nav-marker").item(0);
var site_nav = document.getElementsByClassName("site-nav").item(0);
var site_buttons = document.getElementsByClassName("page-link");
site_marker_width = site_nav_marker.getBoundingClientRect().width;
site_nav_pos = site_nav.getBoundingClientRect().x;


function combine(func1, func2){
    return function(){func1(); func2();};
}

function moveToPos(x){
    return function(){
    site_nav_marker.style.left = x + 'px';};
};

site_nav.addEventListener("mouseleave", function(){site_nav_marker.style.bottom='-20px';});
site_nav.addEventListener("mouseover", function(){site_nav_marker.style.bottom='5px';});

for (var i=0; i < site_buttons.length; i++) {
    button = site_buttons.item(i);
    rect = button.getBoundingClientRect();
    x = rect.x + rect.width/2 - site_marker_width/2 - site_nav_pos;
    button.addEventListener("mouseover", moveToPos(x));
}

// Set the background color of the button to a random color when hovered over
//button.addEventListener("mouseover", function() {
//  button.style.backgroundColor = getRandomColor();
//});


//button.addEventListener("mouseleave", function() {
    //button.style.backgroundColor = style.getPropertyValue('--background');
//});

