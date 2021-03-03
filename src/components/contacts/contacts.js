import React from 'react'
import Avatar from 'react-avatar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactaction';
//* Using the avatar method to create our contact avatar monogram
//*This are the table formats that will be returned in our map function and we pass props to our function to use the mapped index
//*Contacts will receive 2 props from contact.js
export const Contacts = ({ contact }) => {
  //*adding the dispatch method to call the action from our store
  const dispatch = useDispatch();
  //*destructuring our contact info into the following components
  const { name, phone, email, website, id } = contact;
  return (
    <tr>
      <th scope="row">
        <div className="custom-control custom-checkbox">
          <label className="custom-control-label" />
        </div>
      </th>
      <td>
        <Avatar className="me-3" name={name} size="40" round={true} />
        {name}
      </td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{website}</td>
      <td>
        <Link to={`/contacts/edit/${id}`}>
          <button className="btn btn-outline-info">Edit</button>
        </Link>
        <Link to="/">
          <button
            className="btn btn-outline-danger"
            onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </Link>
      </td>
    </tr>
  );
};
