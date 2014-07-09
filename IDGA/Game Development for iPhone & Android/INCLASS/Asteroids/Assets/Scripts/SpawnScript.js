#pragma strict

var asteroid : Rigidbody;
var spawnPos : Transform;

var isSpawning : boolean = false;
var timer : float = 0.0f;

function Start () {}

function Update () 
{
	if(!isSpawning)
	{
		timer += Time.deltaTime;
	}
	
	if(timer >= 2)
	{
		Spawn();
	}
}

function Spawn()
{
	isSpawning = true;
	var newAsteroid : Rigidbody = Instantiate(asteroid, spawnPos.position, spawnPos.rotation);
	isSpawning = false;
	timer = 0;
}