import {  CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT,  UPDATE_CONTACT } from "../constants/types";
import axios from "axios";
//*Constant that will take the axios requests for the app
const api = axios.create({baseURL: `http://localhost:8080`});
//*Our initial state will have an array of objects, a property that it is null and an empty array
const initialState = {
  contacts: [],
  contact: null,
};

//*Setting the initial state pulling the data from the backend springboot app
  api.get('/users').then(response => {
  for (let i = 0; i < response.data.length; i++) {
    initialState.contacts.push(response.data[i]);
    }})

//*Creating a reducer that takes the state and action as arguments and returns the newStates with an arrow function and switch
//* We use the switch keyword to do something different depending on the type of actions or "cases" and what will return
export const contactReducer = (state = initialState, action) => {
  //*linking the payload of the action to a set case
  switch (action.type) {
    //*This first case to create our contacts will return an array with our existing contacts + our added input information using the spread operator
    case CREATE_CONTACT:

      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };

    case GET_CONTACT:
      //*Creating an array that will return our updated state checking if the contact id is equal to the payload passed
      //*Using the filter method that will return a new array with the updated values form the initial array
      let arr = state.contacts.filter(
        (contact) => contact.id == action.payload
      );
      //*Once the values are checked by the filter method our arr will get updated
      arr = arr.values();
      //*we create a for loop to store the values inside the new arr
      for (let val of arr) {
        arr = val;
      }
      //*Returning the new state giving a new value to contact
      return {
        ...state,
        contact: arr,
      };
    case UPDATE_CONTACT:
      const {contact, id} = action.payload;
      console.log(action.payload);
      api
        .put(`users/${id}`, contact)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      console.log(contact);
      return {
        ...state,
        //*This case will map once again the contacts array and will pass a ternary operator to determine the updated state
        contacts: state.contacts.map((oldContact) =>
          //*Our ternary will check if the id is the same as the payload id and return the action else will leave the contact as is
          oldContact.id == id ? contact : oldContact
        ),
      };
    case DELETE_CONTACT:
      //*Creating a constant that will take the payload from the action that is an ID as a value
      const contactId = action.payload;
      console.log(contactId);
      //* Delete by id axioscall
      api
        .delete(`users/${contactId}`)
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
      return {
        ...state,
        //* This case will use the filter method to return a new array with the function that checks if the id from our array is not equal to
        //*our payload id and then will return the new array
        contacts: state.contacts.filter(
          (contact) => contact.id != action.payload
        ),
      };

    default:
      return state;
  }
};