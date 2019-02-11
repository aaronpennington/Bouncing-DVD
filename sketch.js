let x,y; 						/* x and y positions */
let xspeed,yspeed;  /* speed the logo moves */
let dvd;					  /* dvd logo image */
let r,g,b;					/* rgb color values */

/* Load the image into the dvd variable */
function preload() {
  dvd = loadImage("dvd_logo.png");
}

/* The image will start at a random x and y position */
function setup() {
  createCanvas(window.innerWidth, window.innerHeight); 
	x = random(width);
	y = random(height);
	
	xspeed = 1;
	yspeed = 1;
  pickColor();
}

/* Each time the image hits a wall, it will change color */
function pickColor() {
  r = random(256);
  g = random(256);
  b = random(256);
}

/* Draws the image and handles wall collision */
function draw() {
  background(0);
  tint(r,g,b);
	image(dvd, x, y);
	
	x += xspeed;
	y += yspeed;
	
	if (x + dvd.width >= width) {
		xspeed *= -1;
    x = width - dvd.width;
    pickColor();
	}
	else if (x <= 0) {
		xspeed *= -1;
    x = 0;
    pickColor();
	}
	if (y + dvd.height >= height) {
		yspeed *= -1;
    y = height - dvd.height;
    pickColor();
	}
	else if (y <= 0) {
		yspeed *= -1;
    y = 0;
    pickColor();
	}
}