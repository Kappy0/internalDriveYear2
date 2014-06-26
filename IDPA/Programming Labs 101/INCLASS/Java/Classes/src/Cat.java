
public class Cat
{
	//Constructors
	public Cat() //default
	{
		name = "GenericCat";
		age = 2;
	}
	
	public Cat(String name, int age) //dynamic
	{
		this.name = name;
		this.age = age;
	}
	
	//Functions
	public void meow()
	{
		System.out.println("Meow!");
	}
	
	//Variables
	public String name;
	public int age;
}
