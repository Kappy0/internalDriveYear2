#pragma strict

var laser : GameObject;

function Start () {}

function Update () 
{
	if(Input.GetKeyUp(KeyCode.Space))
	{
		Fire();
	}
}

function Fire()
{
	Instantiate(laser, transform.position, laser.transform.rotation);
}