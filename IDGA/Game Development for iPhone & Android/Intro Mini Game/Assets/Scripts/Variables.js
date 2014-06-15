#pragma strict

function Start () {}

function Update () 
{
	var halfScreenW: float = Screen.width / 2;
	var halfScreenH: float = Screen.height / 2;
	
	//transform.position.x = (Input.mousePosition.x - halfScreenW) / 20;
	transform.position.x = (Input.mousePosition.x - halfScreenW) / halfScreenW;
	transform.position.z = (Input.mousePosition.y - halfScreenH) / halfScreenH;
	
	//Debug.Log(Input.mousePosition.x);
}