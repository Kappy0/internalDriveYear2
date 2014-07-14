#pragma strict

function Start () {}

function Update () 
{
	var pos : Vector3 = transform.parent.position;
	pos.x += 1.5;
	transform.RotateAround(transform.parent.position, Vector3.up, 10 * Time.deltaTime);
	transform.position = pos;
}