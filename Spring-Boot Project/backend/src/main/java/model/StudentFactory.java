package model;



public class StudentFactory {
	
	
	static int studentCount = 0;
	public final static String URL="localhost:3000/API/Student.json";
	
	
	
	//Getters and setters
	public static Student makeStudent(String name, String email,
			String phone, String university, String major, String GPA){
		
		
		studentCount++;
		return new Student(name, email, phone, university, major, GPA);
		
	}
	@Override
	public String toString(){
		String returnString = "Number of Students " + studentCount;
		return returnString;
	}
	

}
