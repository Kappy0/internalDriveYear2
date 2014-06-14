//Kappy; Recursive Challenge
//Fibonacci.cpp : The Fobonacci Sequence

#include <iostream>

using namespace std;

int fib(int n)
{
   if(n == 0 || n == 1)
   {
      return n;
   }
   else
   {
      return fib(n - 1) + fib(n - 2);
   }
}

int main()
{
   int x;

   do
   {
      cin >> x;

      if(x != 0 && ! cin.fail())
      {
         for(int i = 0; i < x; i++)
         {
            cout << fib(i) << endl;
         }
      }
      else
      {
         if(cin.fail())
         {
            cout << "Please enter a number." << endl;
            cin.clear();
            cin.ignore();
         }
         else if(x == 0)
         {
            cout << "Please enter a number greater than 0." << endl;
         }
      }
   }
   while(x == 0 || cin.fail());

   system("PAUSE");
   return 0;
}