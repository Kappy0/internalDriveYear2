#pragma strict

var scrollSpeed: float = 0;

function Start () {}

function Update () 
{
	renderer.material.SetTextureOffset("_MainTex", Vector2(0, Time.time * scrollSpeed));
}