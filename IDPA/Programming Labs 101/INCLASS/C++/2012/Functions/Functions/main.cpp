#include <iostream>
#include <math.h>

using namespace std;

//int method(int anything, char anything2)
//{
//	int x = anything;
//
//	return x;
//}

// Function for the addition part of the quadratic formula.
double quadraticAdd( double a, double b, double c)
{
	return ( -b + sqrt( pow(b, 2) - ( 4 * a * c) ) ) / (2 * a);
}

// Function for the subtraction part of the quadratic formula.
double quadraticSub(double a, double b, double c)
{
	return ( -b - sqrt( pow(b, 2) - ( 4 * a * c) ) ) / (2 * a);
}

int main()
{
	// Declare variables
	double a, b, c;
	double answerAdd, answerSub;
	char decision;

	do
	{
		// Initialize variables
		a = 0;
		b = 0;
		c = 0;
		answerAdd = 0;
		answerSub = 0;

		// Goal: cin >> a >> b >> c;

		// Get user input for a
		cout << "Enter the value for a: ";
		cin >> a;

		// Get user input for b
		cout << "Enter the value for b: ";
		cin >> b;

		// Get user input for c
		cout << "Enter the value for c: ";
		cin >> c;

		// Calling quadraticAdd funtion.
		answerAdd = quadraticAdd(a, b, c);

		// Calling quadraticSub funtion.
		answerSub = quadraticSub(a, b, c);

		// Print both answers
		cout << "The first answer is: " << answerAdd << endl;
		cout << "The second answer is: " << answerSub << endl;

		cout << endl;

		// Ask user to perform another calculation
		cout << "Would you like to perform another calculation? (y/n) ";
		cin >> decision;
	} while(decision == 'y' || decision == 'Y');   // Check for decision input

	return 0;
}