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
	//GET
	@GetMapping("/{id}")
	public Optional<UserRecord> getUserById(@PathVariable (value = "id") Integer id) {
		return this.userService.findById(id);

	}
	//POST
	@RequestMapping(value="/addUser", method=RequestMethod.POST)
	public UserRecord addUser(@RequestBody UserRecord userRecord)  
	{    
		return userService.addUser(userRecord);    
	}   
	//DELETE
	@DeleteMapping("/{id}")
	public void deleteUser(@PathVariable ("id") Integer id){
		 userService.deleteUser(id);		
	}
	//UPDATE
	@PutMapping("/{id}")
	public void updateUser(@RequestBody UserRecord user, @PathVariable ("id") Integer id) {
		userService.updateUser(user, id);

	}

   
} 
