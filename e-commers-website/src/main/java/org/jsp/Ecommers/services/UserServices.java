package org.jsp.Ecommers.services;

import java.util.Optional;

import org.jsp.Ecommers.dao.UserDao;
import org.jsp.Ecommers.dto.ResponseStructure;
import org.jsp.Ecommers.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServices {
	@Autowired
	private UserDao dao;
	public ResponseStructure<User> saveUser(User user){
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setMessage("User is saved successfully");
		structure.setData(user);
		structure.setStatusCode(HttpStatus.CREATED.value());
		return structure;
	}
	public ResponseEntity<ResponseStructure<User>> updateUser(User user){
		Optional<User> u=dao.findById(user.getId());
		ResponseStructure<User> structure=new ResponseStructure<>();
		if(u.isPresent()) {
			User u1=u.get();
			u1.setAge(user.getAge());
			u1.setEmail(user.getEmail());
			u1.setGender(user.getGender());
			u1.setName(user.getName());
			u1.setPhone(user.getPhone());
			dao.saveUser(u1);
			
		}
		
	}

}
