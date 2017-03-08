package Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import model.Student;

public interface StudentRepository extends MongoRepository<Student, String> {

	Student findByName(String name);

	List<Student> findByUniversity(String university);

}