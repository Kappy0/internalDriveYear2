#pragma strict

var myOrder : int = 4;

function Start () 
{
	myOrder = 4;
}

function Update () {}

function OnGUI()
{
	selectItem();
	
	var groupWidth = 120;
    var groupHeight = 150;
      
    var screenWidth = Screen.width;
    var screenHeight = Screen.height;
      
    var groupX = (screenWidth - groupWidth) / 2;
    var groupY = (screenHeight - groupHeight) / 2;
      
    GUI.BeginGroup(Rect(groupX, groupY, groupWidth, groupHeight));
    GUI.Box(Rect(0, 0, groupWidth, groupHeight), "Menu");
      
    if(GUI.Button(Rect(10, 30, 100, 30), "1"))
    {
        myOrder = 1;
    }
    if(GUI.Button(Rect(10, 70, 100, 30), "2"))
    {
        myOrder = 2;
    }
    if(GUI.Button(Rect(10, 110, 100, 30), "3"))
    {
        myOrder = 3;
    }
      
    GUI.EndGroup();
}

function selectItem()
{
	switch(myOrder)
	{
		case 1:
			print("You ordered the steak");
			break;
		case 2:
			print("You ordered the salmon");
			break;
		case 3:
			print("You ordered the salad");
			break;
		case 4:
			print("Please choose a menu item");
			break;
		default:
			print("We don't serve that dish here, sorry!");
			break;
	}
}