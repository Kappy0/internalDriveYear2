#pragma strict

var gameOverTexture: Texture2D;
var ContinueSkin: GUISkin;

var buttonW: int = 100;
var buttonH: int = 50;

var halfScreenW: float = Screen.width / 2;
var halfButtonW: float = buttonW / 2;

function Start () {}

function Update () 
{
	guiTexture.texture = null;
	
	if(GameController.lives <= 0)
	{
		guiTexture.texture = gameOverTexture;
	}
}

function OnGUI()
{
	if(guiTexture.texture == gameOverTexture)
	{
		if(GUI.Button(Rect(halfScreenW - halfButtonW, 560, buttonW, buttonH), "Play Again?"))
		{
			print("You clicked me!");
			//Application.LoadLevel("Game");
		}	
	}
}