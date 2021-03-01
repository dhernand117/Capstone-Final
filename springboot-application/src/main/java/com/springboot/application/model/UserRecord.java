package com.springboot.application.model;

import javax.persistence.*;

@Entity
@Table (name = "contacts")
public class UserRecord {
	
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private int contactid;
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
	public UserRecord(String name,String phone, String email, String website) {
		super();
		this.name = name;
		this.phone = phone;
		this.email = email;
		this.website = website;
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

	public void setId(int contactid) {
		this.contactid = contactid;
	}

	//Getters & Setters
	public int getId() {
		return contactid;
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
