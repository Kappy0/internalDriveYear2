import java.util.ArrayList;

public class Driver {

	public static void main(String[] args) {
		// Creates an Integer ArrayList.
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		// Prints out the empty list.
		System.out.println(list);
		
		// Fills the ArrayList with 0-9.
		for(int i = 0; i < 10; i++){
			list.add(i);
		}
		
		// Prints out the full ArrayList.
		System.out.println(list);
		
		// Removes index 5 from the ArrayList.
		list.remove(5);
		
		// Inserts 22 at the end of the ArrayList.
		list.add(22);
		
		// Prints out the ArrayList.
		System.out.println(list);
		
		// Prints the index of 88 in the ArrayList.
		System.out.println(list.indexOf(new Integer(88)));
	}

}
