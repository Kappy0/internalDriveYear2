#pragma strict

static var score: int;
static var lives: int = 3;

var guiSkin: GUISkin;

var player: GameObject;
var respawnPos: Transform;

function Start () {}

function Update () {}

function OnGUI()
{
	GUI.skin = guiSkin;
	GUI.Label(Rect((Screen.width / 2) - 280, 0, 400, 100), score.ToString());
	
	if(lives < 0)
	{
		lives = 0;
	}
}

function RespawnPlayer()
{
	Instantiate(player, respawnPos.transform.position, player.gameObject.transform.rotation);
}
