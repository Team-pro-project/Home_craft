import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./reset.css"
import Swal from 'sweetalert2'

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const nav = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
        let email = localStorage.getItem("email");
        email = JSON.parse(email);
        console.log(email);

        const res = await axios.put("http://localhost:5000/user/reset-password", { email, password });
        console.log(res);

    Swal.fire({
            icon: "success",
            title: "nice...",
            text: "password is changed",
          
          });
        setPassword("")
nav("/")
  
    } catch (err) {
console.log(err);
    }
  };

  return (
    <div id="reset-password-form">
      <h1>Reset Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>

    </div>
  );
};

export default ResetPassword;
