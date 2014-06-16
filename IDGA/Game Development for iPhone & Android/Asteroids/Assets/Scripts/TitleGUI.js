#pragma strict

var MySkin: GUISkin;

function Start () {}

function Update() {}

function OnGUI()
{
	var buttonW: int = 100;
	var buttonH: int = 50;

	var halfScreenW: float = Screen.width / 2;
	var halfButtonW: float = buttonW / 2;

	if(GUI.Button(Rect(halfScreenW - halfButtonW, 560, buttonW, buttonH), "Start"))
	{
		print("You clicked me!");
		//Application.LoadLevel("Game");
	}
}