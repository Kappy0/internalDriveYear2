#pragma strict

public var target: Transform;

function Start () {}

function Update () 
{
	transform.LookAt(target);
}