package com.springboot.application.model;

import javax.persistence.*;

@Entity
@Table (name = "contacts")
public class UserRecord {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	@Column (name="id")
	private int id;
	@Column (name="name")
	private String name;
	@Column (name="phone")
	private String phone;
	@Column (name="email")
	private String email;
	@Column (name="website")
	private String website;
	
	public UserRecord() {
	
	}
	
	//Constructor
	public UserRecord(String name,String phone, String email, String website, Integer id) {
		super();
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.website = website;
		this.id= id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	//Getters & Setters
	public int getId() {
		return id;
	}
//	public void setId(int id) {
//		this.id = id;
//	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

	

}
