var font,
  fontsize = 120;

function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  font = loadFont('../vendors/fonts/TitilliumWeb-Regular.ttf');
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
    var canvas = createCanvas(250, 250);
    canvas.parent("logo");

  // Set text characteristics
  textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
}

function draw() {
    //Set letter location
    var x = 50;
    var y = 0;

    // Set the gap between letters and the left and top margin
    var gap = 80;
    var margin = 10;
    translate(margin * 4, margin * 4);
    
    //Letter C
    //letters by their Unicode number
    var letterC = char(67);
    fill('#b10235');
    // Draw the letter to the screen
    text(letterC, x, y);
    
    fill('#000');
    text(letterC, x+2, y+2);
        
    //Letter M
    var letterM = char(77);
    fill(0);
    text(letterM, x + gap, y + 50);
    fill('#b10235');
    text(letterM, x + gap + 2, y + 53);
}