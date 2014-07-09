#pragma strict

var velocity : float = 0.0f;
var euler : Vector3 = Vector3(0, 100, 0);
var rotation : Quaternion = Quaternion.identity;

function Start () {}

function Update () {}

function FixedUpdate()
{
	var deltaRotation : Quaternion = Quaternion.Euler(euler * Time.deltaTime);
	rigidbody.MoveRotation(rigidbody.rotation * deltaRotation);
	rigidbody.AddForce(0, 0, velocity);
}