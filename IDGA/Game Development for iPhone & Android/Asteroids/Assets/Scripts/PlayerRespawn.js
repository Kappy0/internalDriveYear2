#pragma strict

var player: GameObject;
var newPlayer: GameObject;

var respawnPos: Transform;

var timer: float = 0.0;

var invincible: boolean = true;

function Start () {}

function Update () 
{	
	if(player != null)
	{
		transform.position = player.transform.position;
		timer += Time.deltaTime;
		
		if(timer > 5.0 && invincible)
		{
			invincible = false;
		}
	}
}

function OnTriggerEnter(gameObj : Collider)
{
	if(gameObj.gameObject.tag == "asteroid" && !invincible)
	{
		invincible = true;
		Invoke("RespawnPlayer", 3);
	}
}

function RespawnPlayer()
{
	var instance: GameObject = Instantiate(newPlayer);
	instance.transform.position = respawnPos.position;
	player = instance;
	timer = 0.0;
}