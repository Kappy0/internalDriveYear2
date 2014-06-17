#pragma strict

var playerSpeed: float = 0.0;

var timer: float = 0.0;

var invincible: boolean = true;

var thruster: Transform;

var isQuitting: boolean = false;

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
		Destroy(gameObject);
		Destroy(deadShip.gameObject);
		
		timer = 0.0;
	}	
}

function OnApplicationQuit()
{
	isQuitting = true;
}

function OnDestroy()
{
	if(!isQuitting)
	{
		GameController.lives--;
		//Debug.Log(GameController.lives);
		
		if(GameController.lives < 0)
		{
			GameController.lives = 0;
		}
		
		if(GameController.lives > 0)
		{
			gameObject.Find("Stats").GetComponent(GameController).RespawnPlayer();
		}
	}
}