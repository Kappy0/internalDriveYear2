#pragma strict

function Start () {}

function Update () 
{
	transform.position.x = (Input.mousePosition.x - (Screen.width / 2)) / (Screen.width / 2);
	//transform.position.x = (Input.mousePosition.x - (Screen.width / 2)) / 100;
	Debug.Log(Input.mousePosition.x);
}