//Kappy; For Loop program
//For.cpp : Shows how a For loop is used

#include <iostream>
#include <time.h>
#include <stdio.h>
#include <stdlib.h>

using namespace std;

void wait(int seconds)
{
	clock_t endWait;
	endWait = clock() + seconds * CLOCKS_PER_SEC;
	while(clock() < endWait) {}
}

void main()
{
	int countDown;

	cout << "Quickly! You have 10 seconds to diffuse this bomb!" << endl;
	cout << endl << endl;

	countDown = 10;

	for(countDown; countDown >= 0; countDown--)
	{
		cout << "There are " << countDown << " seconds left!" << endl;

		for(int sec = 1; sec > 0; sec--)
		{
			wait(1);
		}	
	}

	cout << endl;
	cout << "You diffused the bomb!";
	cout << endl << endl;

	system("PAUSE");
}