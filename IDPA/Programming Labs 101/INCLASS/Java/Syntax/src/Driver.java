
public class Driver 
{
	public static void main(String[] args)
	{
		//Similarities of Java and C++ Syntax
		
		//Variables
		int x = 5;
		char a = 'a';
		double y = 5.5;
		String word = "apple";
		
		//Conditional Statements
		/*
		if(x != 5)
		{	
		}
		else if(x > 2)
		{
		}
		else
		{
		}
		
		switch(x)
		{
			case 1:
				x = 2;
				break;
			default:
				break;
		}
		*/
		
		//Loops
		for(int i = 0; i < 10; i++)
		{
			x += i;
		}
		
		int i = 0;
		
		while(i < 10)
		{
			x -= i;
			i++;
		}
		
		do
		{
			x *= i;
			i++;
		}
		while(i < 20);
		
		//Differences between Java and C++ syntax
		
		//Variables
		boolean isRead = true;
		
		//Conditional Statements
		/*
		String yay = "apple";
		
		if(yay.equals("apple"))
		{
		}
		*/
		
		//Loops
		char[] word1 = {'a', 'p', 'p', 'l', 'e'};
		
		int count = 0;
		
		for(char c : word1) //for each loop
		{
			if(c == 'p')
			{
				count++;
			}
		}
		
		//Arrays
		int[] b = {1, 2, 3};
		int[] c = new int[5];
	}
}
