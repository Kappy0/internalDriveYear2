#include <iostream>

using namespace std;

int main()
{
	/*int x = 6;*/
	/*int y[6] = {22, 42, 3, 12, 98, 99};*/

	/*cout << "X = " << x << endl;*/

	//y[0] = 22;
	//y[1] = 42;
	//y[2] = 3;
	//y[3] = 12;
	//y[4] = 98;
	//y[5] = 99;

	//cout << "y[0] = " << y[0] << endl;
	//cout << "y[1] = " << y[1] << endl;
	//cout << "y[2] = " << y[2] << endl;
	//cout << "y[3] = " << y[3] << endl;
	//cout << "y[4] = " << y[4] << endl;
	//cout << "y[5] = " << y[5] << endl;

	int watermelon[99000];

	 
	for(int i = 0; i < 99000; i++)
	{
		watermelon[i] = i;
	}

	for(int i = 0; i < 99000; i++)
	{
		cout << "watermelon[" << i << "] = " << watermelon[i] << endl;
	}

	system("Pause");

	return 0;
}