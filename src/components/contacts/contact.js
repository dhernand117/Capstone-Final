import React  from "react";
import { useSelector } from "react-redux";
import { Contacts } from "./contacts"

//*Using Bootstrap to pull a predetermined style for our form https://getbootstrap.com/docs/5.0/forms/overview/
export const Contact = () => {
  //*We use the method useSelector from redux to pass our state from our store.js into a variable named contacts
  //*also because our contacts are being compiled inside a rootReducer we need to go 1 level deeper to reach our object info to map
  const contacts = useSelector((state) => state.contact.contacts);
  //*log contacts to make sure the info is being pulled from store.js
  console.log(contacts);
 
  return (
    <div>
      <table className="table shadow table-dark table-striped">
        <thead>
          <tr>
            <th>
            {/* Here we will determine the headers of the info we want to pull from our state in the store.js file */}
            </th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Maping from our contacts array we pull the information according to our headers to populate our table */}
          {contacts.map((contact) => {
            return (
              <Contacts
                contact={contact}
                key={contact.id}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
