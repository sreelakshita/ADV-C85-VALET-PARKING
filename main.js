canvas = document.getElementById('mycanvas');

greencr_width =75
greencr_height =100

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x= 5;
greencar_y= 225;

function add() {
	background_imgTag= new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag.src=background_image;


	background_imgTag= new Image();
	background_imgTag.onload=uploadgreencar;
	background_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag ,0 ,0 ,canvas_width ,canvas_height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag ,greencar_x ,greencar_y ,greencr_widte ,greencr_height );

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
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
 if(greencar_y >=0)

 {
	 greencar_y = greencar_y -10
	 uplodeBackground();
	 uplodegreencar();
 }
}

function down()
{
	if(greencar_y <=400)

 {
	 greencar_y = greencar_y+10
	 uplodeBackground();
	 uplodegreencar();
 }
}

function left()
{
	if(greencar_y >=0)

 {
	 greencar_x = greencar_x-10
	 uplodeBackground();
	 uplodegreencar();
 }
}

function right()
{
	if(greencar_y >=800)

	{
		greencar_x = greencar_x+10
		uplodeBackground();
		uplodegreencar();
	}
}
