//Kappy; Skill Test
//FizzBuzz.cpp : The FizzBuzz challenge

#include <iostream>

using namespace std;

int main()
{
   for(int i = 1; i < 101; i++)
   {
      if(i % 15 == 0)
      {
         cout << "FizzBuzz" << endl;
      }
      else if(i % 3 == 0)
      {
         cout << "Fizz" << endl;
      }
      else if(i % 5 == 0)
      {
         cout << "Buzz" << endl;
      }
      else
      {
         cout << i << endl;
      }
   }

   cout << endl;

   system("PAUSE");
   return 0;
}
