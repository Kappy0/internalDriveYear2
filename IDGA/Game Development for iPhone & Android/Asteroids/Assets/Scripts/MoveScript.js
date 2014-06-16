#pragma strict

var playerSpeed: float = 0;

function Start () {}

function Update () 
{
	transform.Translate((Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed), 0, 
							(Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed * -1));
	
	transform.position.x = Mathf.Clamp(transform.position.x, -4.341, 4.31);
	transform.position.z = Mathf.Clamp(transform.position.z, -1.44, 1.45);
}