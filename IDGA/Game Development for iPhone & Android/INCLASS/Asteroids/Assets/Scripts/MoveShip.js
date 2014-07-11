#pragma strict

var speed : float = 0.0f;

var isQuitting : boolean = false;

function Start () {}

function Update () 
{
	transform.Translate(Input.GetAxisRaw("Vertical") * speed * Time.deltaTime, 0, 
											Input.GetAxisRaw("Horizontal") * speed * Time.deltaTime * -1);
}

function OnCollisionEnter(asteroid : Collision)
{
	if(asteroid.gameObject.tag == "asteroid")
	{
		Destroy(gameObject);
		Destroy(asteroid.gameObject);
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
		GameControl.lives--;
		Debug.Log(GameControl.lives);
		
		if(GameControl.lives < 0)
		{
			GameControl.lives = 0;
		}
		
		if(GameControl.lives >= 0)
		{
			gameObject.Find("GameController").GetComponent(GameControl).Respawn();
		}
	}
}