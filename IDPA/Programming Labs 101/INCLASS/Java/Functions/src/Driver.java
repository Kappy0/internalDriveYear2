import java.util.Scanner;

public class Driver 
{
	public static int Sub(int a, int b)
	{
		return a - b;
	}
	
	public static void main(String[] args) 
	{
		Scanner scan = new Scanner(System.in);
		
		int x, y;
		
		System.out.print("Enter x: ");
		x = scan.nextInt();
		
		System.out.print("Enter y: ");
		y = scan.nextInt();
		
		int z = Sub(x, y);
		
		System.out.print("z is: " + z);
		
		scan.close();
	}
}
