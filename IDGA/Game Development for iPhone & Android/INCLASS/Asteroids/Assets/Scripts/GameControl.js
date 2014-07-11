#pragma strict

var player : GameObject;
var ContinueSkin : GUISkin;

var playerArr : GameObject[];
var playerCount : int;

static var lives : int;

function Start () 
{
	lives = 3;
	playerCount = 0;
}

function Update () 
{
	playerCount = gameObject.FindGameObjectsWithTag("player").Length;
	
	if(playerCount > 1)
	{
		playerArr = gameObject.FindGameObjectsWithTag("player");
		
		for(var i : int = playerCount - 1; i > 0; i--)
		{
			Destroy(playerArr[i].gameObject);
		}
	}
}

function Respawn()
{
	if(lives > 0)
	{
		Instantiate(player, player.transform.position, player.transform.rotation);
	}
}