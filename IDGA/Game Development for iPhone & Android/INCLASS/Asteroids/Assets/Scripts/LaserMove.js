#pragma strict

var speed : float;

function Start () 
{
	speed = 1.74f;
}

function Update () 
{
	transform.Translate(0, 0, speed * Time.deltaTime);
	
	if(transform.position.z > 6.5)
	{
		Destroy(gameObject);
	}
}