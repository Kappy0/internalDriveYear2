#pragma strict

var MySkin: GUISkin;

function Start () {}

function Update() {}

function OnGUI()
{
	var buttonW: int = 100;
	var buttonH: int = 50;

	var halfScreenW: float = Screen.width / 2.0;
	var halfButtonW: float = buttonW / 2.0;
    
	if(GUI.Button(Rect(halfScreenW - halfButtonW, Screen.height / 2, buttonW, buttonH), "Start"))
	{
		Debug.Log("HIT!");
		Application.LoadLevel("Game");
	}
}