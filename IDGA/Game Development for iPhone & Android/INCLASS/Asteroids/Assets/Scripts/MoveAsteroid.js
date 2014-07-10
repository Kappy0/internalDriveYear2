#pragma strict

var velocity : float = 0.0f;
var euler : Vector3 = Vector3(0, 100, 0);
var rotation : Quaternion = Quaternion.identity;

var explosion : GameObject;

function Start () {}

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