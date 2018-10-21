public class Person {
    private int age;	
  
	public Person(int initialAge) {
  		// Add some more code to run some checks on initialAge
        if(initialAge<0) {
            System.out.println("Age is not valid, setting age to 0.");
        }
        age = initialAge;
	}

	public void amIOld() {
  		// Write code determining if this person's age is old and print the correct statement:
        String ans;
        
        if(age<13) {
            ans = "You are young.";
        } else if(age>=13 && age < 18) {
            ans = "You are a teenager.";
        } else {
            ans = "You are old.";
        }
        System.out.println(ans);
	}

	public void yearPasses() {
  		// Increment this person's age.
        age++;
	}
    
    // ...
}