#pragma strict

var height = 1.0;
var distance = 15.0;
var target : GameObject;

function Start () {}
 
function Update () 
{
	target = GameObject.FindGameObjectWithTag("player");
	
	if(target != null)
	{
		transform.position = target.transform.position;
	    transform.position.y += height;
	    transform.position.z -= distance;
	    transform.LookAt(target.transform.position);
	}
	else
	{
		transform.position.x = 0;
	    transform.position.y += height;
	    transform.position.z -= distance;
	}
}