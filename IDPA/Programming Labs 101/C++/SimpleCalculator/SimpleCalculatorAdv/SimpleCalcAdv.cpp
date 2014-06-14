//Kappy; Simple Calculator Advanced
//SimpleCalculatorAdv.cpp : A more advanced version of the simple calculator

#include <iostream>

using namespace std;

double Add(double x, double y)
{
	return x + y;
}

double Subtract(double x, double y)
{
	return x - y;
}

double Multiply(double x, double y)
{
	return x * y;
}

double Divide(double x, double y)
{
	return x / y;
}

double SetMin(double z, double min)
{
	min = z;
	return min;
}

double SetMax(double z, double max)
{
	max = z;
	return max;
}

void main()
{
	double x, y, z;
	double min, max;
	char again, operation;

	min = 0;
	max = 0;
	
	do
	{
		cout << "Enter x: ";
		cin >> x;
		cout << endl;

		cout << "Enter y: ";
		cin >> y;
		cout << endl;

		cout << "Enter A/S/M/D for the operation you want to perform: ";
		cin >> operation;

		switch(operation)
		{
			case 'A':
				{
					z = Add(x, y);
					break;
				}
			case 'S':
				{
					z = Subtract(x, y);
					break;
				}
			case 'M':
				{
					z = Multiply(x, y);
					break;
				}
			case 'D':
				{
					z = Divide(x, y);
					break;
				}
		}

		if(z < min)
		{
			min = SetMin(z, min);
		}
		else if(z > max)
		{
			max = SetMax(z, max);
		}

		cout << endl << endl;
		cout << "The result is " << z;
		cout << endl << endl;

		cout << "The minimum value is: " << min << endl;
		cout << "The maximum value is: " << max << endl;

		cout << endl << endl;

		cout << "Perform another calculation? (Y/N): ";
		cin >> again;
		cout << endl;
	}
	while(again == 'Y' || again == 'y');

	cout << "Goodbye!";
	cout << endl << endl;

	system("PAUSE");
}