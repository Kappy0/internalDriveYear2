#pragma strict

var laser: GameObject;

var lastShot: float = 0;
var fireRate: float = 0;

function Start () {}

function Update () 
{
//	if(Input.GetButtonDown("Fire1"))
//	{
//		Fire();
//	}
	
	if(Input.GetButtonDown("Fire1") && (Time.time > (lastShot + fireRate))) //Fire1 = Spacebar or Ctrl
	{
		lastShot = Time.time;
		Fire();
	}
}

function Fire()
{
	Instantiate(laser, transform.position, Quaternion.Euler(0, 0, -90));
}