#pragma strict

var timer: float = 0.0;

var isSpawning: boolean = false;

var asteroidPrefab: Rigidbody;

//var spawnPoint: Transform;

//var spawnPoint: Transform[];
//var totalSpawns: int = 4;
//var currentSpawn: int = 0;

function Start () 
{
	timer = 0.0;
	
	isSpawning = false;
}

function Update () 
{
	if(!isSpawning)
	{
		timer += Time.deltaTime;
	}
	
	if(timer >= 3)
	{
		Spawn();
	}
}

function Spawn()
{
	isSpawning = true;
	
	//var newAsteroid: Rigidbody = Instantiate(asteroidPrefab, spawnPoint.position, spawnPoint.rotation);
	
//	if(currentSpawn == totalSpawns)
//	{
//		currentSpawn = 0;
//		return;
//	}
//	else
//	{
//		var newAsteroid: Rigidbody = Instantiate(asteroidPrefab, spawnPoint[currentSpawn].position, spawnPoint[currentSpawn].rotation);
//		isSpawning = false;
//		currentSpawn++;
//		timer = 0.0;
//	}

	for(var i = 0; i < 6; i++)
	{
		var Pos = Vector3(Random.Range(-3.5, 3.5), 0, 3);
		var newAsteroid: Rigidbody = Instantiate(asteroidPrefab, Pos, Quaternion.identity);
	}

	isSpawning = false;
	timer = 0.0;
}