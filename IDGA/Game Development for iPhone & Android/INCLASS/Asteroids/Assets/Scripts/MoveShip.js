﻿#pragma strict

var speed : float = 0.0f;

function Start () {}

function Update () 
{
	transform.Translate(Input.GetAxisRaw("Vertical") * speed * Time.deltaTime, 0, 
											Input.GetAxisRaw("Horizontal") * speed * Time.deltaTime * -1);
}