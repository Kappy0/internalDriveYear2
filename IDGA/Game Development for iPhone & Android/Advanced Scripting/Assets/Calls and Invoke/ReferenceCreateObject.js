#pragma strict

var script : CreateObject;

function Start () 
{
	script.InvokeRepeating("SpawnObjectRand", 2, 1);
}

function Update () {}