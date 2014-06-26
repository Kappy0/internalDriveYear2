#include "vehicle.h"

Vehicle::Vehicle()
{
	brand = "Chevy";
	color = "Red";
	fuelCapacity = 1.0;
	mpg = 72;
	headlightCount = 81;
	wheels = 7;
	seats = 2;
	speed = 0;
}

Vehicle::~Vehicle()
{
}

void Vehicle::park()
{
	cout << "Speed is: " << speed << endl;

	for(int i = speed; i > 0; i--)
	{
		decelerate();
		cout << "Speed is: " << speed << endl;
	}
	
	cout << endl;
}

void Vehicle::drive(int mph)
{
	cout << "Speed is: " << speed << endl;

	for(int i = 0; i < mph; i++)
	{
		accelerate();
		cout << "Speed is: " << speed << endl;
	}

	cout << endl;
}

void Vehicle::accelerate()
{
	speed++;
}

void Vehicle::decelerate()
{
	speed--;
}

void Vehicle::honk(char choice)
{
	headlightCount -= 2;
	cout << "Honk! Honk!" << endl << endl;

	switch(choice)
	{
	case 'c':
	case 'C':
		cout << "You ran over a car. (You're the night bus apparently)" << endl;
		break;
	case 'd':
	case 'D':
		cout << "Honk! Woof! (dog has been run over and a tire has popped)" << endl;
		wheels--;
		break;
	case 'k':
	case 'K':
		cout << "Honk! (kid gets run over, parents thank you, give you a new tire! =])" << endl;
		wheels++;
		break;
	case 'l':
	case 'L':
		cout << "Oh dear, a lawnmower! (you lose all your tires)" << endl;
		wheels = 0;
		park();
		break;
	case 's':
	case 'S':
		cout << "Splat! (squirrel is absorbed into the car! You gain full tires.)" << endl;
		wheels = 7;
		break;
	case 'w':
	case 'W':
		cout << "Honk! (Whale pops and dies)" << endl;
	default:
		break;
	}
}