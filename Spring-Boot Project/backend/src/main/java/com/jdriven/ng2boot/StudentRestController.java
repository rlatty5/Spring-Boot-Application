package com.jdriven.ng2boot;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.HashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import model.Student;
import model.StudentFactory;



@RestController
@RequestMapping("/students")
public class StudentRestController {

	String uri = "http://localhost:8080/ViewAll";

	//private final Logger logger = LoggerFactory.getLogger();



	@Autowired
	MongoOperations mongoOps;

	private static final Log log = LogFactory.getLog(StudentRestController.class);


	private Student newStudent;

	public void mappedByPath(){
		//System.out.println("WORKING");
	}

	@RequestMapping(method=RequestMethod.POST)
	public @ResponseBody void getPost(@RequestBody String jsonMsg) {
		String decode = null;
		try {
			decode = URLDecoder.decode(jsonMsg, "UTF-8");

		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		System.out.println("JSON MESSAGE " + decode);

		decode = decode.replace("json=", "");
		
		HashMap<String,Object> result = createResultDictionary(decode);
		
		this.newStudent = createNewStudent(result);

		insertIntoMongo(this.newStudent);



	}
	
	/**
	 * Creates a new student from HashMap key value pairs from the StudentFactory class 
	 */
	private Student createNewStudent(HashMap<String,Object> result){
		
		Student newStudent = StudentFactory.makeStudent((String) result.get("name"), (String) result.get("email"), 
				(String) result.get("phone"), (String) result.get("university"), (String) result.get("email"),
				(String) result.get("GPA"));
		
		return newStudent;
		
	}
	
	/**
	 * Creates a dictionary that parses values from decoded (cleansed) json message
	 */
	private HashMap<String,Object> createResultDictionary(String decode){
		HashMap<String,Object> result = null;
		try {
			result = new ObjectMapper().readValue(decode, HashMap.class);
			System.out.println(result);
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return result;
	}

	/**
	 * Inserts newly created student into MongoDB (default server port) 
	 */
	private void insertIntoMongo(Student newStudent){
		mongoOps.insert(newStudent);

		Query query = new Query();
		query.addCriteria(Criteria.where("name").is("Romo"));
		mongoOps.findOne(query, Student.class);
		log.info(mongoOps.find(query, Student.class));
	}

	/**
	 * Returns the most recently created Student
	 */
	public Student getNewStudent(){
		return this.newStudent;
	}



}


