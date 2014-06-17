#pragma strict

var playerSpeed: float = 0.0;

var timer: float = 0.0;

var invincible: boolean = true;

var thruster: Transform;

var isQuitting: boolean = false;

var fingerPos: Vector2 = Vector2.zero;
var fingerLastPos: Vector2 = Vector2.zero;
var fingerMovedBy: Vector2 = Vector2.zero;

var slideMagnitudeX: float = 0.0;
var slideMagnitudeY: float = 0.0;

function Start () 
{
	playerSpeed = 4.0;
	
	timer = 0.0;
	
	invincible = true;
	
	isQuitting = false;
	
	fingerPos = Vector2.zero;
	fingerLastPos = Vector2.zero;
	fingerMovedBy = Vector2.zero;
	
	slideMagnitudeX = 0.0;
	slideMagnitudeY = 0.0;
}

function Update () 
{
	if (Input.touchCount == 1)
    {
        var touch : Touch = Input.GetTouch(0);
       
        if (touch.phase == TouchPhase.Began)
        {
            fingerPos = Vector2.zero;
            fingerLastPos = Vector2.zero;
            fingerMovedBy = Vector2.zero;
           
            slideMagnitudeX = 0.0;
            slideMagnitudeY = 0.0;
           
            // record start position
            fingerPos = touch.position;
        }
        else if (touch.phase == TouchPhase.Moved)
        {
            fingerMovedBy = touch.position - fingerPos; // or Touch.deltaPosition : Vector2
                                                                // The position delta since last change.
            fingerLastPos = fingerPos;
            fingerPos = touch.position;
           
            // slide horz
            slideMagnitudeX = fingerMovedBy.x / Screen.width;
           
            // slide vert
            slideMagnitudeY = fingerMovedBy.y / Screen.height;
            
            transform.Translate((slideMagnitudeX * playerSpeed * -1), 
            						0, (slideMagnitudeY * playerSpeed * -1));
           
            Instantiate(thruster, transform.position, Quaternion.Euler(0, 0, -90));
        }
        else if (touch.phase == TouchPhase.Stationary)
        {
        	fingerLastPos = fingerPos;
            fingerPos = touch.position;
           
            slideMagnitudeX = 0.0;
            slideMagnitudeY = 0.0;
        }
        else if (touch.phase == TouchPhase.Ended || touch.phase == TouchPhase.Canceled)
        {
            slideMagnitudeX = 0.0;
            slideMagnitudeY = 0.0;
        }
    }
    
//	transform.Translate((Input.GetAxisRaw("Horizontal") * Time.deltaTime * playerSpeed * -1), 0, 
//							(Input.GetAxisRaw("Vertical") * Time.deltaTime * playerSpeed * -1));
//							
//	if(Input.GetButton("Horizontal") || Input.GetButton("Vertical"))
//	{
//		Instantiate(thruster, transform.position, Quaternion.Euler(0, 0, -90));
//	}
	
	transform.position.x = Mathf.Clamp(transform.position.x, -3.5, 3.5);
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