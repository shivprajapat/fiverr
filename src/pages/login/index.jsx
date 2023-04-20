import React, { useState } from "react";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import toast, { Toaster } from "react-hot-toast";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post(
        "auth/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      toast.success("Login Successfully");
      console.log(res.data);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <Toaster position="top-right" reverseOrder={false} />
      </form>
    </div>
  );
}

export default Login;
