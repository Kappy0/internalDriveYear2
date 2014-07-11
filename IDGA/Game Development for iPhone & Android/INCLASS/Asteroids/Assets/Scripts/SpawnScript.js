#pragma strict

var asteroid : Rigidbody;
//var spawnPos : Transform [];

var isSpawning : boolean;
var timer : float;

//var totalSpawns : int = 4; //Size of Transform array
//var currentSpawn : int = 0; //Index iterator through Transform array

function Start () 
{
	isSpawning = false;
	timer = 0.0f;
}

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
	//var newAsteroid : Rigidbody = Instantiate(asteroid, spawnPos[currentSpawn].position, spawnPos[currentSpawn].rotation);
	
	for(var i : int = 0; i < 4; i++)
	{
		var pos : Vector3 = Vector3(Random.Range(-4.2, 4.2), 0, 6.5);
		var newAsteroid : Rigidbody = Instantiate(asteroid, pos, Quaternion.identity);
	}
	
//	currentSpawn += 1;
//	
//	if(currentSpawn == totalSpawns)
//	{
//		currentSpawn = 0;
//	}
	
	timer = 0;
}