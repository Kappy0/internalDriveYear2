//Variables
var x = 5; //x is an int
x = "apple"; //Now x is a string
x = true; //Now x is a bool

//Conditionals
x = 10;
var y = "10";
var z = 5;


//Checks value, not type
if(x == y)
{
	//HTML stuff here
}

//Checks value AND type
if(x === y)
{
	//HTML stuff here
}

//Functions
function add(a, b)
{
	return a + b;
}

var w = add(x, z);

//Function assignment
var sub = function(a, b)
{
	return a - b;
}

var o = sub(x, z);

function change()
{
	document.getElementById("supersquatsimulator").innerHTML = o;

}