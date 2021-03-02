import axios from "axios";
import {  CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT,  UPDATE_CONTACT } from "../constants/types";
//*Constant that will take the axios requests for the app
const api = axios.create({baseURL: `http://localhost:8080`});
//*Our initial state will have an array of objects, a property that it is null and an empty array
const initialState = {
  //*Pulling initial data from a pre-created Json file from https://jsonplaceholder.typicode.com/
  contacts: [

  ],
  contact: null,
};


  api.get('/users').then(response => {
  console.log(response);
  for (let i = 0; i < response.data.length; i++) {
    initialState.contacts.push(response.data[i]);
    }})

//*Creating a reducer that takes the state and action as arguments and return a NewState with an arrow function
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
      let arr = state.contacts.filter((contact) => contact.id == action.payload);
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
      }
    case UPDATE_CONTACT:
        return{
            ...state,
        //*This case will map once again the contacts array and will pass a ternary operator to determine the updated state
            contacts: state.contacts.map((contact)=>
            //*Our ternary will check if the id is the same as the payload id and return the action else will leave the contact as is
                contact.id == action.payload.id ? action.payload :contact         
            ),
        }
    case DELETE_CONTACT:
        return {
            ...state,
        //* This case will use the filter method to return a new array with the function that checks if the id from our array is not equal to
        //*our payload id and then will return the new array
            contacts: state.contacts.filter((contact)=>contact.id != action.payload)
        }

    default:
      return state;
  }
};