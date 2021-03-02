package com.springboot.application.repository;
import com.springboot.application.model.*;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;


public interface UserRepository extends CrudRepository<UserRecord, Integer> {

//	void deleteById(Integer id);   

	@Modifying
	@Query (value="delete from contacts where id= :id", nativeQuery = true)
	Integer deleteUserRecordById(@Param("id") Integer id);

}    
