package com.springboot.application.service;
import java.util.List;
import java.util.Optional;
import java.util.ArrayList;    
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.springboot.application.model.UserRecord;
import com.springboot.application.repository.UserRepository;



@Service    
public class UserService   
{    
	@Autowired    
	private UserRepository userRepository;   
	
	public List<UserRecord> getAllUsers()  
	{    
		List<UserRecord> userRecords = new ArrayList<>();    
		userRepository.findAll().forEach(userRecords::add);  
		System.out.println(userRecords);	//test
		return userRecords;    
	} 
	
	public void addUser(UserRecord userRecord)  
	{    
		userRepository.save(userRecord);    
	}    
	public ResponseEntity<UserRecord> deleteUser(Integer userId)
	{    
//		UserRecord existingUser= userRepository.findById(userId);
		userRepository.deleteById(userId);
		return ResponseEntity.ok().build();
	}
	public Optional<UserRecord> findById(Integer id) {
		return userRepository.findById(id);

	}

	public ResponseEntity updateUser(UserRecord user, Integer id) {
		System.out.println("updateUser");
		Optional<UserRecord> existingUser = userRepository.findById(id);
		if (existingUser.isPresent()) {
		UserRecord eu = (UserRecord) existingUser.get();
		eu.setName(user.getName());
		eu.setPhone(user.getPhone());
		eu.setEmail(user.getEmail());
		eu.setWebsite(user.getWebsite());
		UserRecord updatedUser = userRepository.save(eu);
		return new ResponseEntity<>(updatedUser, HttpStatus.OK);
	} else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		
	}   
} }    
