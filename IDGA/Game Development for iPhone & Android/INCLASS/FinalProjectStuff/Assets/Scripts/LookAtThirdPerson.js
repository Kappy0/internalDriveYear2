#pragma strict

var height = 1.0;
var distance = 15.0;
var target : Transform;

function Start () {}
 
function Update () 
{
	transform.position = target.position;
    transform.position.y += height;
    transform.position.z -= distance;
    transform.LookAt(target.position);
}