import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { AuthService } from '../../../Services';
import './Login.css';

export default function Login() {
  const { setUser } = useAuth();

  const nameInput = useRef();
  const passwordInput = useRef();

  const navigate = useNavigate();

  const location = useLocation();

  const LoginHandle = () => {
    let userName = nameInput.current.Value;
    let password = passwordInput.current.Value;
    console.log(userName);
    console.log(password);
    // AuthService.Login(userName, password);
    // navigate(location?.state?.return_url || '/');
  };

  return (
    <>
     <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input ref={ nameInput } type="text" name="" required="" />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input ref={ passwordInput } type="password" name="" required="" />
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
      </form>
    </div>
    </>
  );
}
