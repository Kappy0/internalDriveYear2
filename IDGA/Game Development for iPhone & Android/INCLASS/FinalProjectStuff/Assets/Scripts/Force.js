#pragma strict

var timer : float = 0.0f;

function Start () {}

function Update () 
{
	if(timer < 0.2f)
	{
		timer += Time.deltaTime;
	}
}

function FixedUpdate()
{
	if(timer < 0.1f)
	{
		rigidbody.AddForce(0.0, 120.0, 0.0);
	}
}