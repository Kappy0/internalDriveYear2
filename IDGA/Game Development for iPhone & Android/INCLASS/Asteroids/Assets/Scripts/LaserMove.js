#pragma strict

var speed : float = 0.0f;

function Start () {}

function Update () 
{
	transform.Translate(0, 0, speed * Time.deltaTime);
	
	if(transform.position.z > 6.5)
	{
		Destroy(gameObject);
	}
}