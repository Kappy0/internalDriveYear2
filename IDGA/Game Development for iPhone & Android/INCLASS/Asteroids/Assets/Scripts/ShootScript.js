#pragma strict

var laser : GameObject;

function Start () {}

function Update () 
{
	if(Input.GetButtonDown("Fire1"))
	{
		Fire();
	}
}

function Fire()
{
	Instantiate(laser, transform.position, Quaternion.identity);
}