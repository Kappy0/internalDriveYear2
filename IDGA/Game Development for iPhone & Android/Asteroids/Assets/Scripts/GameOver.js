#pragma strict

var gameOverTexture: Texture2D;
var ContinueSkin: GUISkin;

var buttonW: int = 100;
var buttonH: int = 50;

var halfScreenW: float = Screen.width / 2;
var halfButtonW: float = buttonW / 2;

function Start () 
{
	buttonW = 100;
	buttonH = 50;
	
	halfScreenW = Screen.width / 2;
	halfButtonW = buttonW / 2;
}

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
		if(GUI.Button(Rect(halfScreenW - halfButtonW, 300, buttonW, buttonH), "Play Again?"))
		{
			print("You clicked me!");
			GameController.lives = 3;
			GameController.score = 0;
			guiTexture.texture = null;
			Application.LoadLevel(Application.loadedLevel);
		}	
	}
}