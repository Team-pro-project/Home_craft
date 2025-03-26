import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router"
import "./Login-Form.css"

 
const Signup =()=>{
  const nav = useNavigate()

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [validP, setvalidP] = useState(false)
    const [validE, setvalidE] = useState(false)

    function isValidEmail(email) {
      if (!email.includes("@") || !email.includes(".")) return false;
      
      let atIndex = email.indexOf("@");
      let dotIndex = email.lastIndexOf(".");
      
      return atIndex && dotIndex
    }
function isValidPassword(password) {
      if (password.length < 6) return false;
      
      let hasLetter = false;
      let hasNumber = false;
      
      for (let char of password) {
          if (isNaN(char)) {
              hasLetter = true;
          } else {
              hasNumber = true;
          }
          if (hasLetter && hasNumber) return true;
      }
      
      return false;
    }
    
    const signup = async (event) => {
      event.preventDefault();
      const user = {
       email ,
        password
      };
  
      axios.post("http://localhost:5000/user/signup", user)
        .then((response)=> { 

  
          // setPassword("");
          // setemail("");
          // console.log(response.data);
          nav("/login")
  
        })
        
      .catch ((error)=> {
          console.log(error);
      })
    };
  
    return (
      <div id="login-form">
        <h1>Signup</h1>
     
        

        <form onSubmit={signup}>
           <label htmlFor="email">email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              const value = e.target.value;
                if (value) {
                setvalidE(!isValidEmail(value));
              } else {
                setvalidE(false); 
              }
            
              setemail(value);
            }}
            
            
          />
           {validE && (
                <p
                    style={{
                        color: "#D8000C",
                        backgroundColor: "#FFBABA",
                        border: "1px solid #D8000C",
                        padding: "10px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        marginTop: "10px",
                        width: "100%",
                        transition: "opacity 0.5s ease-in-out",
                    }}
                >
                    Please enter a valid email address.
                </p>
            )}
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              const value = e.target.value;
                if (value) {
                setvalidP(!isValidPassword(value));
              } else {
                setvalidP(false); 
              }
            
              setPassword(value);
            }}
          />
              {validP && (
                <p
                    style={{
                        color: "#D8000C",
                        backgroundColor: "#FFBABA",
                        border: "1px solid #D8000C",
                        padding: "10px",
                        borderRadius: "4px",
                        fontSize: "14px",
                        marginTop: "10px",
                        width: "100%",
                        transition: "opacity 0.5s ease-in-out",
                    }}
                >
                    Please enter a validPasword.
                </p>
            )}
          <input type="submit" value="Submit" />
        </form>
      </div>
    );


}
export default Signup