#pragma once

#include <iostream>
#include <string>

using namespace std;

class Vehicle
{
public:
	Vehicle();
	~Vehicle();

	string	brand;
	string	color;

	double	fuelCapacity;
	double  mpg;

	int     headlightCount;
	int		wheels;
	int     seats;
	int     speed;

	void	park();
	void    drive(int mph);
	void    accelerate();
	void    decelerate();
	void    honk(char choice);
};