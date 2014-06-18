#pragma strict

private var newPosition : Vector3;

var position1 : Vector3 = new Vector3(-5, 3, 0);
var position2 : Vector3 = new Vector3(5, 3, 0);

function Start () 
{
	newPosition = transform.position;
	
	position1 = new Vector3(-5, 3, 0);
	position2 = new Vector3(5, 3, 0);
}

function Update () 
{     
    if(Input.GetKeyDown(KeyCode.A))
    {
        newPosition = position1;
    }
    if(Input.GetKeyDown(KeyCode.D))
    {
        newPosition = position2;
    }
 
    transform.position = Vector3.Lerp(transform.position, newPosition, Time.deltaTime);
}