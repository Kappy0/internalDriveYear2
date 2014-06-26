#include "Person.h"

Person::Person()
{
	eyeColor = "Green";
	name = "Charlie";
	fingerCount = 7;
	hairColor = "Purple";
	hairLength = 1000.1;
	height = 1000.17;
	gender = "Female";
}

Person::Person( string eyeColor, string name, int fingerCount, string hairColor,
			    double hairLength, double height, string gender )
{
	this->eyeColor = eyeColor;
	this->name = name;
	this->fingerCount = fingerCount;
	this->hairColor = hairColor;
	this->hairLength = hairLength;
	this->height = height;
	this->gender = gender;
}

Person::~Person()
{
	cout << "I am dead!!!!!!!!!!!!!!!!!!!!!!" << endl;
}

void Person::eat()
{
	cout << "Time to eat! I'm " << height << " feet tall!" << endl;
	cout << "Yummy!!!" << endl;

	height += 12.1;
	
	cout << "Now I can dunk! (No)" << "Yes";
	cout << " because I'm " << height << " feet tall!!!!!" << endl << endl;
}

void Person::walk()
{
	cout << "I'm walking on sunshine... oh no a lawnmower I lost a finger!!!" << endl;
	fingerCount--;
	cout << "Now I only have " << fingerCount << " fingers =[" << endl << endl;
}

void Person::talk()
{
	string prevGender = gender;
	cout << "I feel funny... what's happening to me, this feels strange...." << endl;

	if(gender == "Male")
	{
		gender = "Female";
	}
	else
	{
		gender = "Male";
	}

	cout << "Oh dear! I'm not a " << prevGender << " anymore. I didn't have this before. ";
	cout << "So this is what it's like to be a " << gender << "!" << endl << endl;
}

void Person::yell()
{
	height = 0.0;
	fingerCount++;

	cout << "Nein!" << endl << endl;
}