import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

public class Driver 
{
	public static void main(String[] args) 
	{
		//Initialize variables here
		ArrayList<Integer> list1 = new ArrayList<Integer>();
		ArrayList<Integer> list2 = new ArrayList<Integer>();
		
		int list1Max, list1Min, list2Max, list2Min;
		
		//Need Random for random numbers
		Random rand = new Random();
		
		//int x = rand.nextInt();
		
		//Fill array lists here
		for(int i = 0; i < 10; i++)
		{
			list1.add(rand.nextInt(30));
			list2.add(rand.nextInt(30));
		}		
				
		//Advanced code here
		list1Max = Integer.MIN_VALUE;
		list1Min = Integer.MAX_VALUE;
		
		list2Max = Integer.MIN_VALUE;
		list2Min = Integer.MAX_VALUE;
		
		//Get min and max for both lists
		for(int i = 0; i < 10; i++)
		{
			//List 1 Max
			if(list1Max < list1.get(i))
			{
				list1Max = list1.get(i);
			}
			
			//List 2 Max
			if(list2Max < list2.get(i))
			{
				list2Max = list2.get(i);
			}
			
			//List 1 Min
			if(list1Min > list1.get(i))
			{
				list1Min = list1.get(i);
			}
			
			//List 2 Min
			if(list2Min > list2.get(i))
			{
				list2Min = list2.get(i);
			}
		}
		
		//Print both lists
		System.out.println(list1);
		System.out.println(list2);
		
		//Print advanced here
		
		//EZ way
//		list1Max = Collections.max(list1);
//		list1Min = Collections.min(list1);
//		list2Max = Collections.max(list2);
//		list2Min = Collections.min(list2);
		
		System.out.println("List 1 Max: " + list1Max);
		System.out.println("List 2 Max: " + list2Max);
		System.out.println("List 1 Min: " + list1Min);
		System.out.println("List 2 Min: " + list2Min);
		
		
		
		
		
		
		
//		ArrayList<Integer> list1 = new ArrayList<Integer>();
//		ArrayList<Integer> list2 = new ArrayList<Integer>();
//		
//		for(int i = 0; i < 10; i++)
//		{
//			list1.add(rand.nextInt());
//			list2.add(rand.nextInt());
//		}
		
//		Collections.sort(list1);
//		Collections.sort(list2);
//		
//		System.out.println(list1);
//		System.out.println("List1 min is " + list1.get(0));
//		System.out.println("List1 max is " + list1.get(list1.size() - 1));
//		
//		System.out.println();
//		
//		System.out.println(list2);
//		System.out.println("List2 min is " + list2.get(0));
//		System.out.println("List2 max is " + list2.get(list2.size() - 1));
	}
}
