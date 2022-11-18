canvas = document.getElementById('myCanvas');
ctx =  canvas.getContext("2d");
greeencar_width = 75;
greencar_height = 100;
backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";
greeencar_x = 5;
greeencar_y = 225;

function add() {
	backgroundImage = new Image();
	backgroundImage.onload = uploadBackground;
	backgroundImage.src = backgroundImage;

	greencarImage = new Image();
	greencarImage.onload = uploadBackground;
	greencarImage.src = greeencarImage;
}

function uploadBackground() {
	ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height)

}

function uploadGreenCar() {
	ctx.drawImage(greeencarImage, greeencar_x, greeencar_y, greeencar_width, greencar_height)

	
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
	{
		if(greencar_y >=0){
		greeencar_y = greeencar_y - 10; 
			console.log("When up arrow is pressed, x = " + greeencar_x + " | y = "+ greeencar_y);
			uploadBackground();
			uploadGreenCar();
		 }
	}

	function down()
	{
		if(greencar_y <=500){
			greeencar_y = greeencar_y + 10; 
				console.log("When up arrow is pressed, x = " + greeencar_x + " | y = "+ greeencar_y);
				uploadBackground();
				uploadGreenCar();
			 }
	}

	function left()
	{
		if(greencar_y >=0){
			greeencar_x = greeencar_x - 10; 
				console.log("When up arrow is pressed, y = " + greeencar_y + " | x = "+ greeencar_x);
				uploadBackground();
				uploadGreenCar();
			 }
	}

	function right()
	{
		if(greencar_y <=700){
			greeencar_x = greeencar_x + 10; 
				console.log("When up arrow is pressed, y = " + greeencar_y + " | x = "+ greeencar_x);
				uploadBackground();
				uploadGreenCar();
			 }
	}