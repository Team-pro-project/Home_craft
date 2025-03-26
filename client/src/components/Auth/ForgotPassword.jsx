import { useState } from "react";
import axios from "axios";
import "./Login-Form.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);  

    try {
      const res = await axios.post("http://localhost:5000/user/sendemail", { email });
      console.log(res);
      localStorage.setItem("email", JSON.stringify(res.data.email));
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="login-form">
      <h1>Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "sent"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
