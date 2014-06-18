#pragma strict

var particle : ParticleSystem;
var inventory: Inventory;

function Start () 
{
	inventory = gameObject.Find("InventoryManager").GetComponent(Inventory);
}

function Update () 
{
	if(Input.GetButtonDown("Fire1") && inventory.myStuff3.Mana > 0.5)
	{
		Instantiate(particle, transform.position, Quaternion.Euler(-90.0, 0.0, 0.0));
		inventory.myStuff3.Mana -= 0.2;
	}
}