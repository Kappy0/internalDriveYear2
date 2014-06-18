#pragma strict

var target : GameObject;

function Start () 
{
	Invoke("SpawnObject", 2);
}

function Update () {}

function SpawnObject()
{
	Instantiate(target, new Vector3(0, 2, 0), Quaternion.identity);
}

function SpawnObjectRand()
{
	Instantiate(target, new Vector3(Random.Range(0, 10), Random.Range(2, 10), Random.Range(0, 10)), Quaternion.identity);
}