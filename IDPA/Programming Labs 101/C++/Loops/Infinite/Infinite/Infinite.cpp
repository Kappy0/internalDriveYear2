//Kappy; Infinite Loop Program
//Infinite.cpp : Shows what happens when there's an infinite loop

#include <iostream>
#include <time.h>

using namespace std;

void main()
{
	int x = 0;

	for(;;)
	{
		cout << x << " ";
		x++;
	}
}