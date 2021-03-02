import { CLEAR_CONTACT, CREATE_CONTACT, DELETE_ALL, DELETE_CONTACT, GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT } from "../constants/types";
//*Our initial state will have an array of objects, a property that it is null and an empty array
const initialState = {
  //*Pulling initial data from a pre-created Json file from https://jsonplaceholder.typicode.com/
  contacts: [
    {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
    },
    {
      id: 2,
      name: "Ervin Howell",
      email: "Shanna@melissa.tv",
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      email: "Nathan@yesenia.net",
      phone: "1-463-123-4447",
      website: "ramiro.info",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      email: "Julianne.OConner@kory.org",
      phone: "493-170-9623 x156",
      website: "kale.biz",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      email: "Lucio_Hettinger@annie.ca",
      phone: "(254)954-1289",
      website: "demarco.info",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      email: "Karley_Dach@jasper.info",
      phone: "1-477-935-8478 x6430",
      website: "ola.org",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      email: "Telly.Hoeger@billy.biz",
      phone: "210.067.6132",
      website: "elvis.io",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      email: "nick@email.org",
      phone: "586.493.6943 x140",
      website: "jacynthe.com",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      email: "Glena.Reich@conrad.com",
      phone: "(775)976-6794 x41206",
      website: "conrad.com",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      email: "clementinaD@ambrose.net",
      phone: "024-648-3804",
      website: "ambrose.net",
    },
  ],
  contact: null,
  selectedContacts: [],
};

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
    case SELECT_CONTACT:
        return{
            ...state,
        //*on this reducer our empty array will be equal to the payload
            selectedContacts:action.payload
        }
        //*this reducer will clear all selected contacts
    case CLEAR_CONTACT:
        return{
            ...state,
            selectedContacts:[]
        }
        //*this reducer will substitute all the contacts array using empty array
    case DELETE_ALL:
        return{
            ...state,
            contacts: []
        }
    default:
      return state;
  }
};
