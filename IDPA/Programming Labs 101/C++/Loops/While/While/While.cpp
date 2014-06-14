//Kappy ; While Loop program
//While.cpp : Shows how the while loop is used

#include <iostream>

using namespace std;

void main()
{
	double amountOfSyrup, numOfWaffles;
	amountOfSyrup = 2.6;

	cout << "How many waffles do you have? ";
	cin >> numOfWaffles;
	cout << endl;

	while(amountOfSyrup > 0 && numOfWaffles > 0)
	{
		numOfWaffles = numOfWaffles - 0.25;
		amountOfSyrup = amountOfSyrup - 0.125;
	}

	if(amountOfSyrup < 0)
	{
		cout << "You ran out of syrup!" << endl;
	}
	else if(numOfWaffles == 0)
	{
		cout << "You ran out of waffles!" << endl;
	}

	system("PAUSE");
}