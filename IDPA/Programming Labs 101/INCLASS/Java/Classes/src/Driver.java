
public class Driver 
{
	public static void main(String[] args) 
	{
		Cat fred = new Cat();
		
		System.out.println(fred.name);
		
		Cat fredJr = new Cat("GenericCatJr", 1);
		
		System.out.println(fredJr.name);
		
		fredJr.meow();
	}
}
