#pragma strict

var skin : GUISkin;

function Start () {}

function Update () {}

function OnGUI()
{
	var buttonW : int = 100;
	var buttonH : int = 50;
	
	var halfScreenW : float = Screen.width / 2;
	var halfScreenH : float = Screen.height / 2;
	
	if(GUI.Button(Rect(halfScreenW - 50, halfScreenH - 25, buttonW, buttonH), "#bodybag"))
	{
		Debug.Log("BODIED");
	}
}