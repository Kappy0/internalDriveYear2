#pragma strict

var playerSpeed: float = 0.0;

var timer: float = 0.0;

var invincible: boolean = true;

function Start () {}

function Update () 
{
	transform.Translate((Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed * -1), 0, 
							(Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed * -1));
	
	transform.position.x = Mathf.Clamp(transform.position.x, -4, 4);
	transform.position.z = Mathf.Clamp(transform.position.z, -1.7, 1.7);
	
	timer += Time.deltaTime;
	
	if(timer > 5.0 && invincible)
	{
		invincible = false;
	}
}

function OnTriggerEnter(deadShip : Collider)
{
	if(deadShip.gameObject.tag == "asteroid" && !invincible)
	{
		Destroy(gameObject);
		timer = 0.0;
	}
	
	
}