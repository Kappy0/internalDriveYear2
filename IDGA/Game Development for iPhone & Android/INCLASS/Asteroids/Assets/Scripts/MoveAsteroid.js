#pragma strict

var velocity : float;
var euler : Vector3;
var rotation : Quaternion;

var explosion : GameObject;

function Start () 
{
	velocity = -0.7f;
	euler = Vector3(0, 100, 0);
	rotation = Quaternion.identity;
}

function Update () {}

function FixedUpdate()
{
	var deltaRotation : Quaternion = Quaternion.Euler(euler * Time.deltaTime);
	rigidbody.MoveRotation(rigidbody.rotation * deltaRotation);
	rigidbody.AddForce(0, 0, velocity);
	//Destroy(gameObject, 10);
}

function OnCollisionEnter(laser : Collision)
{
	if(laser.gameObject.tag == "laser")
	{
		Instantiate(explosion, gameObject.transform.position, Quaternion.identity);
		Destroy(gameObject);
		Destroy(laser.gameObject);
	}
}