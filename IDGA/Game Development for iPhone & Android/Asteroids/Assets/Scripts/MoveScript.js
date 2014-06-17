#pragma strict

var playerSpeed: float = 0.0;

var timer: float = 0.0;

var invincible: boolean = true;

var thruster: Transform;

function Start () {}

function Update () 
{
	transform.Translate((Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed * -1), 0, 
							(Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed * -1));
							
	if(Input.GetButton("Horizontal") || Input.GetButton("Vertical"))
	{
		Instantiate(thruster, transform.position, Quaternion.Euler(0, 0, -90));
	}
	
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
		GameController.lives--;
		Destroy(deadShip.gameObject);
		Destroy(gameObject);
		
		Debug.Log(GameController.lives);
		
		if(GameController.lives > 0)
		{
			gameObject.Find("Stats").GetComponent(GameController).RespawnPlayer();
		}
		
		timer = 0.0;
	}	
}