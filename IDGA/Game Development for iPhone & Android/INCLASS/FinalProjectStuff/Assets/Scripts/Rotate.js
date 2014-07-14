#pragma strict

function Start () {}

function Update () 
{
	if(Input.GetKey(KeyCode.A))
	{
		transform.position.x -= 10 * Time.deltaTime;
		transform.rotation = Quaternion.Euler(0, 180, 0);
	}
	
	if(Input.GetKey(KeyCode.D))
	{
		transform.position.x += 10 * Time.deltaTime;
		transform.rotation = Quaternion.Euler(0, 0, 0);
	}
	
	if(Input.GetKey(KeyCode.W))
	{
		transform.position.z += 10 * Time.deltaTime;
		transform.rotation = Quaternion.Euler(0, 270, 0);
	}
	
	if(Input.GetKey(KeyCode.S))
	{
		transform.position.z -= 10 * Time.deltaTime;
		transform.rotation = Quaternion.Euler(0, 90, 0);
	}
	
	if(Input.GetKey(KeyCode.Q))
	{
		transform.Rotate(0, 10 * Time.deltaTime, 0);
	}
}