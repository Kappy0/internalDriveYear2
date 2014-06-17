#pragma strict

var laser: GameObject;

var lastShot: float = 0.0;
var fireRate: float = 0.0;

function Start () 
{
	lastShot = 0.0;
	fireRate = 0.5;
}

function Update () 
{
//	if(Input.GetButtonDown("Fire1"))
//	{
//		Fire();
//	}
	
//	if(Input.GetButtonDown("Fire1") && (Time.time > (lastShot + fireRate))) //Fire1 = Spacebar or Ctrl
//	{
//		Fire();
//	}

	for(var touch : Touch in Input.touches)
	{
		if(touch.phase == TouchPhase.Began && (Time.time > (lastShot + fireRate))) //Fire1 = Spacebar or Ctrl
		{
			Fire();
		}
	}
}


function Fire()
{
	lastShot = Time.time;
	Instantiate(laser, transform.position, Quaternion.Euler(0, 0, -90));
}