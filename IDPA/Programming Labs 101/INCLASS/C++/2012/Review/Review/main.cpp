#include "vehicle.h"

int main()
{
	Vehicle sally;
	int mph;
	char choice;

	cout << "How fast do you want to go? ";
	cin >> mph;

	sally.drive(mph);

	while(true)
	{
		cout << "What do you want to honk at? (Press q or Q to quit) " << endl;
		cin >> choice;

		if(choice == 'q' || choice == 'Q')
		{
			break;
		}

		sally.honk(choice);
	}

	sally.park();

	system("PAUSE");

	return 0;
}