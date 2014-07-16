#pragma strict

var timer : float = 0.0f;
var object : GameObject;

function Start () {}

function Update () 
{
	timer += Time.deltaTime;
	
	if(timer > 2)
	{
		Spawn();
	}
}

function Spawn()
{
	timer = 0.0f;
	Instantiate(object, transform.position, transform.rotation);
}