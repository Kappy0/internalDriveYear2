#pragma strict

var AsteroidVelocity: float = 0.0;

var xRotSpeed: float = 0.0;
var yRotSpeed: float = 0.0;
var zRotSpeed: float = 0.0;

var eulerAngleVelocity: Vector3 = Vector3(0.0, 0.0, 0.0);
var rotation: Quaternion = Quaternion.identity;

Destroy(gameObject, 10);

function Start () {}

function Update () {}

function FixedUpdate()
{
	eulerAngleVelocity = Vector3(xRotSpeed, yRotSpeed, zRotSpeed);
	var deltaRotation: Quaternion = Quaternion.Euler(eulerAngleVelocity * Time.deltaTime);
	rigidbody.MoveRotation(rigidbody.rotation * deltaRotation);
	rigidbody.AddForce(0.0, 0.0, AsteroidVelocity);
}