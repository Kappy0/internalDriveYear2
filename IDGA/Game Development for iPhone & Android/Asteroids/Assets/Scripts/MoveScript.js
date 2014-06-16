#pragma strict

var playerSpeed: float = 0.0;

function Start () {}

function Update () 
{
	transform.Translate((Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed * -1), 0, 
							(Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed * -1));
	
	transform.position.x = Mathf.Clamp(transform.position.x, -4, 4);
	transform.position.z = Mathf.Clamp(transform.position.z, -1.7, 1.7);
}

function OnCollisionEnter(deadShip : Collision)
{
	if(deadShip.gameObject.tag == "asteroid")
	{
		Destroy(gameObject);
	}
}