#pragma strict

var speed : float = 0.0;

function Start () {}

function Update () 
{
	transform.Translate((Input.GetAxisRaw("Horizontal") * Time.deltaTime * speed), 0, 
						(Input.GetAxisRaw("Vertical") * Time.deltaTime * speed));
}