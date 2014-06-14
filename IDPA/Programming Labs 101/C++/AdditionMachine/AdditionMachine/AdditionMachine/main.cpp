//Kappy; Addition program
//main.cpp : A simple addition machine

#include <iostream>

using namespace std;

int main()
{
   int x, y, z;

   cout << "Welcome to the Addition Machine!" << endl;

   cout << "Please enter x: ";
   cin >> x;

   cout << "Please enter y: ";
   cin >> y;

   cout << endl << "Adding..." << endl;

   z = x + y;

   cout << "The result is: " << z;

   cout << endl << endl;

   system("PAUSE");
   return 0;
}