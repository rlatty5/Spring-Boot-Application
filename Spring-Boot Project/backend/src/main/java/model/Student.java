package model;

import org.springframework.data.annotation.Id;
public class Student {

	@Id
	public String id;
	public String name;
	public String email;
	public String phone;
	public String university;
	public String major;
	public String GPA;
	//public static String interests;

	public Student() {
	}

	public Student(String name, String email,
			String phone, String university, String major, String GPA) {
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.university = university;
		this.major = major;
		this.GPA = GPA;
	}

	@Override
	public String toString() {
		return String.format("Student[id=%s, name='%s', email='%s', phone='%s', university='%s', "
				+ "major='%s', GPA='%s']", id, name, email, phone, university, major, GPA);
	}
}
