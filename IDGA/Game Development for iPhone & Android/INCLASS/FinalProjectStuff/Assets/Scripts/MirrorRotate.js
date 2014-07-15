#pragma strict

var speed : float;

function Start () {}

function Update () 
{
	if(Input.GetKey(KeyCode.A))
	{
		transform.Rotate(speed * Time.deltaTime, 0, 0);
	}
	
	if(Input.GetKey(KeyCode.D))
	{
		transform.Rotate(-speed * Time.deltaTime, 0, 0);
	}
}