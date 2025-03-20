import React, { useState } from "react";
import axios from "axios";
 
const Signup =()=>{

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const signup = async (event) => {
      event.preventDefault();
      const user = {
        username,
        password,
      };
  
      axios.post("http://localhost:5000/user/signup", user)
        .then((response)=> { 
          setPassword("");
          setUsername("");
          console.log(response.data);
  
        })
        
      .catch ((error)=> {
          console.log(error);
      })
    };
  
    return (
      <div id="login-form">
        <h1>Signup</h1>
        <form onSubmit={signup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );




}
export default Signup