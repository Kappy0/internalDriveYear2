#pragma strict

var PlayerMove : HandSignal;
var aiMove : HandSignal;

var myString : String;
var aiString : String;

var aiChoose : boolean = false;

enum HandSignal
{
	Rock,
	Paper,
	Scissors
};

function Start () {}

function Update () 
{
	PlayerInput();
	
	if(aiChoose)
	{
		inputAI();
	}
	
	myString = PlayerMove.ToString();
	aiString = aiMove.ToString();
}

function OnGUI()
{
	GUI.Label (Rect (10, 10, 100, 20), "Player: " + myString);
	GUI.Label (Rect (10, 30, 100, 20), "AI: " + aiString);
}

function PlayerInput()
{	
	if(Input.GetKeyDown(KeyCode.Alpha1))
	{   //press 1 for Rock
		PlayerMove = HandSignal.Rock;
		aiChoose = true;
    }
    
    if(Input.GetKeyDown(KeyCode.Alpha2))
    {   //press 2 for Paper
        PlayerMove = HandSignal.Paper;
        aiChoose = true;
    }
    
    if(Input.GetKeyDown(KeyCode.Alpha3))
    {   //press 3 for Scissor
        PlayerMove = HandSignal.Scissors;
        aiChoose = true;
    }
    
    return PlayerMove;
}

function inputAI()
{
	var choice : int = Random.Range(0, 3);
	
	if(choice == 0)
	{ 
		aiMove = HandSignal.Rock;
    }
    
    if(choice == 1)
    {  
        aiMove = HandSignal.Paper;
    }
    
    if(choice == 2)
    {   
        aiMove = HandSignal.Scissors;
    }
    
    aiChoose = false;
    
    return aiMove;
}