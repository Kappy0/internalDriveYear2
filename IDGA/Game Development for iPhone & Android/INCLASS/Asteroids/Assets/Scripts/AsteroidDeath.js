#pragma strict

function Start () {}

function Update () {}

function OnTriggerEnter(asteroid : Collider)
{
	Destroy(asteroid.gameObject);
}