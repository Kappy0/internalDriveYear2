#include <iostream>

using namespace std;

void count(int num)
{
	if(num == 0)
		return;

	cout << num << endl;

	count(num - 1);
}

int sum(int num)
{
	if(num == 0)
		return 0;

	return (sum(num - 1) + (num));
}

int main()
{
	cout << sum(5) << endl;

	system("PAUSE");

	return 0;
}