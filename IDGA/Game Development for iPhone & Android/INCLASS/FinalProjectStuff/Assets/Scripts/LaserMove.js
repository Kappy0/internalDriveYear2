#pragma strict

var velocity : Vector3;
var speed : float;

function Start () 
{
	rigidbody.velocity = Vector3.right * speed * -1;
}

function Update () {}

function FixedUpdate()
{
	velocity = rigidbody.velocity;
}

function OnCollisionEnter(obj : Collision)
{
    for(var contact : ContactPoint in obj.contacts) 
    {
         var reflectVel : Vector3 = 2 * (Vector3.Dot(velocity, Vector3.Normalize(contact.normal))) * Vector3.Normalize(contact.normal) - velocity;
         reflectVel *= -1;
         
         rigidbody.velocity = reflectVel;
         
         var rotation : Quaternion = Quaternion.FromToRotation(velocity, reflectVel);
         transform.rotation = rotation * transform.rotation;
    }
}