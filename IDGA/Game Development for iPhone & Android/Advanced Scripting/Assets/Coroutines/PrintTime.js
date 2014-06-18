#pragma strict

function Start () 
{
	print("SECONDS COROUTINE: " + Time.time);
	
	yield WaitForSeconds(5);
	
	print("SECONDS COROUTINE: " + Time.time);
}

function Update () {}

function FixedUpdate()
{
	PrintTime();
}

function PrintTime()
{
	print("FIXEDUPDATE COROUTINE: " + Time.time);
	
	yield new WaitForFixedUpdate();
	
	print("FIXEDUPDATE COROUTINE: " + Time.time);
}