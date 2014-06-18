#include <iostream>

using namespace std;

int main()
{
   //If statement test
   cout << "--------------- IF STATEMENT TEST ---------------" << endl << endl;

   int x = 7;

   if(x = 5)
   {
      cout << "x is 5";
   }
   else
   {
      cout << "x is not 5";
   }

   cout << endl << endl;

   cout << "--------------- WHILE LOOP TEST ---------------" << endl << endl;

   /*int count;

   while(count < 100)
   {
      cout << count << endl;
      count++;
   }

   cout << endl;*/

   cout << "--------------- CONDITIONAL TEST ---------------" << endl << endl;

   int z, a;

   a = 0;
   z = 10;

   do
   {
      a++;
   }
   while( !(z == 10) || !(z == 20));

   cout << "a is " << a << endl;

   cout << endl;

   system("PAUSE");
   return 0;
}