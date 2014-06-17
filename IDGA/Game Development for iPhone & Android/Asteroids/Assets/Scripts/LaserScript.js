#pragma strict
var laserSpeed : float = 0;

function Start () {}

function Update () 
{
	transform.Translate(0, 0, laserSpeed * Time.deltaTime);
	
	if(transform.position.z > 3)
	{
		Destroy(gameObject);
	}
}