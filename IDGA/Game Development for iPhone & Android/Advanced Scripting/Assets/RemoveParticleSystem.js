#pragma strict

var particle: ParticleSystem;

function Start () {}

function Update () 
{
	Destroy(particle.gameObject, 1.5);
}