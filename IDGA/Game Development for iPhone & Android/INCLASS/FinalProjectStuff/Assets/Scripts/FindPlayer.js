#pragma strict

function Start () {}

function Update () 
{
	var player : GameObject = GameObject.FindGameObjectWithTag("player");
	
	if(player != null)
	{
		var playerPos : Vector3 = player.transform.position;
	}
}