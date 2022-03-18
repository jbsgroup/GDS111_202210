/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	info:{
		src:`images/spritesheet.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:128*0, startY:0},
				{width:128, height:128, startX:128*1, startY:0},
				{width:128, height:128, startX:128*2, startY:0},
				{width:128, height:128, startX:128*3, startY:0},
				{width:128, height:128, startX:128*0, startY:128},
				{width:128, height:128, startX:128*1, startY:128},
				{width:128, height:128, startX:128*2, startY:128},
				{width:128, height:128, startX:128*3, startY:128},
				{width:128, height:128, startX:128*0, startY:256},
				{width:128, height:128, startX:128*1, startY:256},
				{width:128, height:128, startX:128*2, startY:256},
				{width:128, height:128, startX:128*3, startY:256},
				{width:128, height:128, startX:128*0, startY:384},
				{width:128, height:128, startX:128*1, startY:384},
				{width:128, height:128, startX:128*2, startY:384},
				{width:128, height:128, startX:128*3, startY:384},

			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:5,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:128*0, startY:640},
				{width:128, height:128, startX:128*1, startY:640},
				{width:128, height:128, startX:128*2, startY:640},
				{width:128, height:128, startX:128*3, startY:640},
				{width:128, height:128, startX:128*0, startY:768},
				{width:128, height:128, startX:128*1, startY:768}
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:128, height:128, startX:128*3, startY:768}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:128, height:128, startX:128*2, startY:768}
			]
		},
		//The attack animation 
		attack:
		{
			fps:4,
			cycle:true,
			//width:300,
			frames:
			[
				{width:128, height:128, startX:128*0, startY:512},
				{width:128, height:128, startX:128*1, startY:512},
				{width:128, height:128, startX:128*2, startY:512},
				{width:128, height:128, startX:128*3, startY:512}
			]
		},
		
		bullet:
		{
			fps:3,
			cycle:true,
			//width:300,
				frames:
			[
				{width:42, height:26, startX:0, startY:896},
				{width:42, height:26, startX:42, startY:896},
				{width:42, height:26, startX:84, startY:896},
				{width:42, height:26, startX:126, startY:896},
				{width:42, height:26, startX:168, startY:896},
				{width:42, height:26, startX:210, startY:896},
				{width:42, height:26, startX:252, startY:896},
				{width:42, height:26, startX:294, startY:896}
			]
			
		}
	}
		
}