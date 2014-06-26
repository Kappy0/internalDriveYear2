#include <iostream>

using namespace std;

int main()
{
	int x = 8;
	int grade = 0;

	switch(x)
	{
	case 1:
		grade = 10; 
		break;
	case 2:
		grade = 20;
		break;
	case 3:
		grade = 30;
		break;
	case 4:
		grade = 40;
		break;
	case 5:
		grade = 50;
		break;
	case 6:
		grade = 60;
		break;
	case 7:
		grade = 70;
		break;
	case 8:
		grade = 80;
		break;
	case 9:
		grade = 90;
		break;
	case 10:
		grade = 100;
		break;
	default:
		grade = -100;
		break;
	}

	cout << "Grade = " << grade << endl;

	system("PAUSE");
	return 0;
}