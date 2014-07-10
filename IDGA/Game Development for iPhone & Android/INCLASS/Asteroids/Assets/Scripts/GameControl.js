#pragma strict

var player : GameObject;

var playerArr : GameObject[];
var playerCount : int;

static var lives : int = 3;

function Start () {}

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