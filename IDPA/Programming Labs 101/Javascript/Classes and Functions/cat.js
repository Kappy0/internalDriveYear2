var meowCount;

//Dynamic Constructor
function Cat(name, age)
{	
	this.name = name;
	this.age = age;
	
	this.meow = function(numOfTimes)
	{
		var x = "";
		
		for(var i = 0; i < numOfTimes; i++)
		{
			x += "Meow!" + "<br>";
			document.getElementById("meow").innerHTML = x;
		}
	}
}

function Meow()
{
	meowCount = parseInt(prompt("How many times will the cat meow?", "Please enter here"));
	ginger.meow(meowCount);
}

var ginger = new Cat("Ginger", 10);

