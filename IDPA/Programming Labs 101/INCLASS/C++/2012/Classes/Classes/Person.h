#pragma once

#include <iostream>
#include <string>

using namespace std;

class Person
{
public:
	Person();
	Person( string eyeColor, string name, int fingerCount,
			string hairColor, double hairLength, double height,
			string gender );
	~Person();

	string eyeColor;
	string name;
	int fingerCount;
	string hairColor;
	double hairLength;
	double height;
	string gender;

	void eat();
	void walk();
	void talk();
	void yell();
};