#pragma strict

function Start () {}

var smooth = 5.0;
var tiltAngle = 30.0;

function Update () 
{
	var halfScreenW: float = Screen.width / 2;
	var halfScreenH: float = Screen.height / 2;
	
	//transform.position.x = (Input.mousePosition.x - halfScreenW) / 20;
	transform.position.x = (Input.mousePosition.x - halfScreenW) / halfScreenW;
	transform.position.z = (Input.mousePosition.y - halfScreenH) / halfScreenH;
	
	//Debug.Log(Input.mousePosition.x);
	
	var tiltAroundZ = Input.GetAxis("Mouse X") * (tiltAngle * 2);
	var tiltAroundX = Input.GetAxis("Mouse Y") * (tiltAngle * -2);
	var target = Quaternion.Euler (tiltAroundX, 0, tiltAroundZ);
	// Dampen towards the target rotation
	transform.rotation = Quaternion.Slerp(transform.rotation, target,
		                               Time.deltaTime * smooth);
}