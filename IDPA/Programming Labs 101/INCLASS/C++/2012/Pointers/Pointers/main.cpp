#include <iostream>

using namespace std;

int main()
{
	
	int y = 99;
	int* x = &y;

	cout << "*x = " << *x << endl;
	cout << "x = " << x << endl;
	cout << "&y = " << &y << endl;
	cout << "y = " << y << endl;

	char* word = new char[5];
	
	memcpy(word, "test\0", sizeof("test\0"));

	cout << "[";

	for(int i = 0; i < 5; i++)
	{
		if(i != 4)
			cout << word[i] << ",";
		else
			cout << word[i];
	}

	cout << "]" << endl;

	cout << word << endl;

	char* p = word;
	
	while((*p) != 0)
		cout << *(p++);

	cout << endl;

	system("PAUSE");

	return 0;
}