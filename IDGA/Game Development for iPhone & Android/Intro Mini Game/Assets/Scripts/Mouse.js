#pragma strict

function Start () {}

function Update () 
{
	transform.position.x = (Input.mousePosition.x - (Screen.width / 2)) / (Screen.width / 2);
	Debug.Log(Input.mousePosition.x);
}