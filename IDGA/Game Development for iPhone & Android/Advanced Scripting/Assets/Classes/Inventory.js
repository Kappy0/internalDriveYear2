#pragma strict

function Start () {}

function Update () {}

public class Inventory extends MonoBehaviour
{
	public class Stuff
	{
		public var Potions : int;
		public var NinjaStars : int;
		public var Money : int;
		public var Mana : float;
		
		//Default Constructor
		public function Stuff()
		{
			Potions = 1;
			NinjaStars = 1;
			Money = 1;
			Mana = 0.0;
		}
		
		public function Stuff(pot : int, nin : int, mun : int)
		{
			Potions = pot;
			NinjaStars = nin;
			Money = mun;
			Mana = 0.0;
		}
		
		public function Stuff(pot : int, man : float)
		{
			Potions = pot;
			NinjaStars = 0;
			Money = 0;
			Mana = man;
		}
	}
}

public var myStuff1 : Stuff = new Stuff();
public var myStuff2 : Stuff = new Stuff(50, 5, 5);
public var myStuff3 : Stuff = new Stuff(50, 1.5f);

