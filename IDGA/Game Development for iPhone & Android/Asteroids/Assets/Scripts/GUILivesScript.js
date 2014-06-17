#pragma strict

var livesTexture: Texture2D[];

function Start () {}

function Update () 
{
	if(GameController.lives < 0)
	{
		GameController.lives = 0;
	}
	
	guiTexture.texture = livesTexture[GameController.lives];
}