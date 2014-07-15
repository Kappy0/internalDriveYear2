#pragma strict

var velocity : Vector3;
var speed : float;

function Start () {}

function Update () 
{
	transform.position += velocity * Time.deltaTime * speed;
}

function OnCollisionEnter( info : Collision ) //When we run into something
{
    //'Bounce' off surface
    for( var contact : ContactPoint in info.contacts ) //Find collision point
    {
        //Find the BOUNCE of the object
         velocity = 2 * ( Vector3.Dot( velocity, Vector3.Normalize( contact.normal ) ) ) * Vector3.Normalize( contact.normal ) - velocity;
         velocity *= -1;
         //transform.rotation = Quaternion.Euler(info.transform.forward);
    }
}