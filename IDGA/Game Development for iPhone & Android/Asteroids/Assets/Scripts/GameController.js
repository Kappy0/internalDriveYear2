#pragma strict

static var score: int;

var guiSkin: GUISkin;

function Start () {}

function Update () {}

function OnGUI()
{
	GUI.skin = guiSkin;
	GUI.Label(Rect((Screen.width / 2) - 280, 0, 400, 100), score.ToString());
}