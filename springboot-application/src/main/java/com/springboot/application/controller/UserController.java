package com.springboot.application.controller;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.springboot.application.model.*;
import com.springboot.application.service.UserService;



@RestController    
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")

public class UserController   
{    
	@Autowired    
	private UserService userService;     

	
	@GetMapping
	public List<UserRecord> getAllUser()  { 
		System.out.println("getAllUser");
		System.out.println(userService.getAllUsers());	//test
		return userService.getAllUsers();    
	} 
	
	@PostMapping
	public List<UserRecord> createUser()  { 
		System.out.println("getAllUser");
		System.out.println(userService.getAllUsers());	//test
		return userService.getAllUsers();    
	} 

	@RequestMapping(value="/add-user", method=RequestMethod.POST)
	public void addUser(@RequestBody UserRecord userRecord)  
	{    
		userService.addUser(userRecord);    
	}       
} 

//TEST CODE ////////////////////////////////
//@CrossOrigin(origins = "http://localhost:3000")
//@RequestMapping("/users")
//public class UserController {
//	@Autowired
//	private UserController userRepository;
//	
//	//get all users api
//	@GetMapping 
//	public List<UserRecord> getAllUsers(){
//		System.out.println("Reaching out the GET Method in the controller of UserConroller Java");
//		return this.userRepository.findAll();
//	}
//	
//	//get a user api by id 
//	@GetMapping("/{id}")
//	public UserRecord getUserById(@PathVariable (value = "id") Integer id) {
//		return this.userRepository.findById(id)
//		 .orElseThrow(() -> new ResourceNotFoundException("The User is not found with id"+id));
//	}
//	
//	//create user api 
//	@PostMapping 
//	public UserRecord createUser(@RequestBody UserRecord user) {
//		System.out.println(user);
//		return this.userRepository.save(user);
//	}
//	
//		
//	//update user api by id - which is email here
//	@PutMapping("/{id}")
//	public UserRecord udateUser(@RequestBody UserRecord user, @PathVariable ("id") String id) {
//		
//		UserRecord existingUser = this.userRepository.findById(id)
//			.orElseThrow(() -> new ResourceNotFoundException("The User is not found with id "+id));
//		existingUser.setId(user.getId());
//		existingUser.setName(user.getName());
//		existingUser.setPhone(user.getPhone());
//		existingUser.setWebsite(user.getWebsite());
//		return this.userRepository.save(existingUser);
//		
//	}
//	//delete user api by email
//	
//	@DeleteMapping("/{id}")
//	public ResponseEntity<UserRecord> deleteUser(@PathVariable ("id") Integer id){
//		
//		UserRecord existingUser = this.userRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("The User is not found with id "+id));
//		this.userRepository.delete(existingUser);
//		return ResponseEntity.ok().build();
//		
//		}
//	}