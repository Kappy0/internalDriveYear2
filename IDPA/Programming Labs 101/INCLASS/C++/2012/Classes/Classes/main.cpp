#include "Person.h"

int main()
{
	//Person charlie;

	//cout << "My name is " << charlie.name << endl << endl;
	//cout << "I'm " << charlie.height << " feet tall, ";
	//cout << "my hair color is " << charlie.hairColor;
	//cout << " and I enjoy long walks on the beach and lawnmowers =]" << endl << endl;

	//charlie.talk();
	//charlie.walk();
	//charlie.eat();
	//charlie.yell();
	//charlie.~Person();

	Person charlie("Orange", "Tim", 87, "Pink", 2.6, 3.14, "Male");

	cout << "My name is " << charlie.name << endl << endl;
	cout << "I'm " << charlie.height << " feet tall, ";
	cout << "my hair color is " << charlie.hairColor;
	cout << " and I enjoy long walks on the beach and lawnmowers =]" << endl << endl;

	charlie.talk();
	charlie.walk();
	charlie.eat();
	charlie.yell();
	charlie.~Person();

	system("PAUSE");

	return 0;
}