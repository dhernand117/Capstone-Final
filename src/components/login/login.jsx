import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from "react-router-dom";

export default function Login(props) {
    let history = useHistory();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('')

    const handleSubmit= e => {
        e.preventDefault();
        axios
        .get('http://localhost:8080/users')
        .then((response)=>{
            const validateName = name=== response.data[0].name ? true : false;
            const validatePassword = password === response.data[0].password ? true : false;
            if(validateName && validatePassword){
                props.setUser(response.data[0].name);
                history.push('/contacts')
                console.log(response);
            } else {console.log("It's a no go");}
        })
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit()} >
          <h1>Login page</h1>
          <input
            type="text"
            value={name}
            placeholder="Username"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            value={password}
            placeholder="Password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button type="submit" />
        </form>
      </div>
    );
}

