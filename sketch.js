var x = 300;
var y = 500;
var xSpeed = 3;
	
function setUp(){
	createCanvas(600, 600);
	background(235);
}

function draw(){
	setUp();
	
	line(0, y, 600, y);
	ellipseMode(CENTER);
	
	
	x = x + xSpeed;
	
	ellipse(300,x,35,35);
		if (x>=y-17.5){
			xSpeed = xSpeed-3;
		}
		else if (x<=300){
			xSpeed = xSpeed+3;
		}
		
	
}

