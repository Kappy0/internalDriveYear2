#pragma strict

var tex : Texture2D;
var skin : GUISkin;

function Start () {}

function Update () 
{
	guiTexture.texture = null;
	if(GameControl.lives <= 0)
	{
		guiTexture.texture = tex;
	}
}

function OnGUI()
{
	var buttonW : int = 100;
	var buttonH : int = 50;
	
	var halfScreenW : float = Screen.width / 2;
	var halfScreenH : float = Screen.height / 2;
	
	if(guiTexture.texture == tex)
	{
		if(GUI.Button(Rect(halfScreenW - 50, halfScreenH - 25, buttonW, buttonH), "Nerrrrrrd!"))
		{
			Application.LoadLevel("Ummmmmmm");
		}
	}
}