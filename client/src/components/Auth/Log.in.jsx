import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import "./Login-Form.css"
import Swal from 'sweetalert2'

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");


const nav = useNavigate()


  const login = async (event) => {
    event.preventDefault();

    const user = {
     email :  email,
      password,
    };

    axios
      .post("http://localhost:5000/user/login", user)
      .then((response) => {
    console.log(response)
    ;
       if(response.data.token){
        let res = JSON.stringify(response.data)
         localStorage.setItem("token", res)
       nav("/")
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "wrong password",
            footer: '<a href="#">reset your password</a>'
          });
          setemail("");
        setPassword("")
        }
       
      })
      .catch((error) => {
        console.log(error)
       
      });
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={login}>
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
};

export default Login;
