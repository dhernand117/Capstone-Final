import axios from "axios";
import {CREATE_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT} from "../constants/types"
//*Constant that will take the axios requests for the create contact action
const api = axios.create({ baseURL: `http://localhost:8080` });
//*Using redux thunk middleware that can pass a function within a function and also have access to redux methods
//*here the function is passing the contact and creating an async function that will dispatch the Axios call
export const addAndUpdateContact = (contact) => async(dispatch) => {
    let newContact;
  try{
    //*Axios call that will pass the contact as a second argument
    let res = await api.post("users/addUser", contact)
    //*taking all the previous values of contact and storing it in a new contact
    newContact = {...contact}
    //*Storing the id from the response and storing it in the newcontact.id value
    newContact.id = res.data.id;
    console.log(res);
  }
  catch(error){
    console.log(error);
  }
  finally{
    //*This will pass the creation of the new contact with the addContact function
    dispatch(addContact(newContact))
  }

};
//*Add contact action will pass the contact information and return it as the payload when is dispatched into the components
export const addContact= (contact) => ({ 
          type: CREATE_CONTACT,
          payload: contact,
 })
//*We will be passing the id of each item every time useDispatch gets called in our editcontact.js
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload:id
})
//*This action will modify the contact information
export const updateContact = (contact, id) => ({
  type: UPDATE_CONTACT,
  payload: {contact, id}
});
//*This action will delete the contact(s)
export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id,
});

