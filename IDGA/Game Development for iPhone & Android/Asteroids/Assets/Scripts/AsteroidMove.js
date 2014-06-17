#pragma strict

var AsteroidVelocity: float = 0.0;

var xRotSpeed: float = 0.0;
var yRotSpeed: float = 0.0;
var zRotSpeed: float = 0.0;

var eulerAngleVelocity: Vector3 = Vector3(0.0, 0.0, 0.0);
var rotation: Quaternion = Quaternion.identity;

var explosion: Transform;

var points: int;

Destroy(gameObject, 10);

function Start () 
{
	AsteroidVelocity = -0.50;
	
	xRotSpeed = 50;
	yRotSpeed = 20;
	zRotSpeed = 30;
	
	eulerAngleVelocity = Vector3(0.0, 0.0, 0.0);
	rotation = Quaternion.identity;	
	
	points = 1;
}

function Update () {}

function FixedUpdate()
{
	eulerAngleVelocity = Vector3(xRotSpeed, yRotSpeed, zRotSpeed);
	var deltaRotation: Quaternion = Quaternion.Euler(eulerAngleVelocity * Time.deltaTime);
	rigidbody.MoveRotation(rigidbody.rotation * deltaRotation);
	rigidbody.AddForce(0.0, 0.0, AsteroidVelocity);
}

function OnTriggerEnter(deadAsteroid : Collider)
{
	if(deadAsteroid.gameObject.tag == "laser")
	{
		Instantiate(explosion, transform.position, Quaternion.Euler(0, 0, -90));
		Destroy(gameObject);
		Destroy(deadAsteroid.gameObject);
		GameController.score += points;
	}
	
	if(deadAsteroid.gameObject.tag == "asteroid")
	{
		Destroy(gameObject);
	}
}