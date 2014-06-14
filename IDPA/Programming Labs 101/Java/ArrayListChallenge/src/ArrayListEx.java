import java.util.Random;
import java.util.ArrayList;

public class ArrayListEx {

	public static void main(String[] args) 
	{
		int list1Min, list1Max;
		int list2Min, list2Max;
		
		Random rand = new Random();
		
		ArrayList<Integer> list1 = new ArrayList<Integer>();
		ArrayList<Integer> list2 = new ArrayList<Integer>();
		
		for(int i = 0; i < 10; i++)
		{
			list1.add(rand.nextInt(20));
			list2.add(rand.nextInt(20));
		}
		
		list1Min = Min(list1);
		list1Max = Max(list1);
		
		list2Min = Min(list2);
		list2Max = Max(list2);
		
		System.out.println("List 1 Min: " + list1Min);
		System.out.println("List 1 Max: " + list1Max);
		System.out.println("List 2 Min: " + list2Min);
		System.out.println("List 2 Max: " + list2Max);
	}
	
	public static int Min(ArrayList<Integer> list)
	{
		int min = Integer.MAX_VALUE;
		
		for(int i = 0; i < list.size(); i++)
		{
			if(list.get(i) < min)
			{
				min = list.get(i);
			}
		}
		
		return min;
	}
	
	public static int Max(ArrayList<Integer> list)
	{
		int max = Integer.MIN_VALUE;
		
		for(int i = 0; i < list.size(); i++)
		{
			if(list.get(i) > max)
			{
				max = list.get(i);
			}
		}
		
		return max;
	}
}
