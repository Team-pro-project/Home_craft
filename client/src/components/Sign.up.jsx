import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router"

 
const Signup =()=>{
  const nav = useNavigate()

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
  
    const signup = async (event) => {
      event.preventDefault();
      const user = {
       email : email,
        password
      };
  
      axios.post("http://localhost:5000/user/signup", user)
        .then((response)=> { 
          setPassword("");
          setemail("");
          console.log(response.data);
          nav("/login")
  
        })
        
      .catch ((error)=> {
          console.log(error);
      })
    };
  
    return (
      <div id="login-form">
        <h1>Signup</h1>
        <div id="member">
          <h6>Already have an account ? <a href="/login"> Log in</a></h6>

        </div>




        <form onSubmit={signup}>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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