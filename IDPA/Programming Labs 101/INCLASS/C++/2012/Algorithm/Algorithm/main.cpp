#include <conio.h>
#include <stdio.h>
#include <time.h>

int fib(int n)
{
	if(n == 0)
		return 0;
	

	if(n == 1)
		return 1;
	

	return fib(n-1) + fib(n-2);
}

int main()
{
	time_t start = time(0);

	printf("%d\n", fib(60));

	double seconds_since_start = difftime(time(0), start);

	printf("Function tool: %f seconds", seconds_since_start);

	_getch();
}