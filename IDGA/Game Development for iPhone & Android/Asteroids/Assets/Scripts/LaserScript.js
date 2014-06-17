#pragma strict
var laserSpeed : float = 0;

function Start () 
{
	laserSpeed = 2.0;
}

function Update () 
{
	transform.Translate(0, 0, laserSpeed * Time.deltaTime);
	
	if(transform.position.z > 2.5)
	{
		Destroy(gameObject);
	}
}