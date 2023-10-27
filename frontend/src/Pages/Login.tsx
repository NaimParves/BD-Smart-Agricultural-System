import React, { useState, useEffect } from "react";
import axios from "axios";
import './LoginForm.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';

const DataFormComponent_login: React.FC = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("admin");
  const [userExists, setUserExists] = useState(false);
  const [userData, setUserData] = useState(null);
  const [passwordMatch, setPasswordMatch] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (passwordMatch) {
      localStorage.setItem('userid', userid);
      localStorage.setItem('user_type', userType);
      if (userType=="admin"){
      navigate('/admin'); // Navigate to the admin page
      } else if (userType=="field_officer"){
        navigate('/field_officer');
      }
    }
  }, [passwordMatch, navigate, userid, userType]);

  const checkUserExistence = async () => {
    let url;
    if (userType === "admin") {
      url = "http://127.0.0.1:8000/login/";
    } else if (userType === "field_officer") {
      url = "http://127.0.0.1:8000/login_field_officer/";
    }

    try {
      const response = await axios.post(url, {
        userid,
        password,
      });

      if (response.data.exists) {
        setUserExists(true);
        setUserData(response.data.user_data);
        setPasswordMatch(password === response.data.user_data.password);
      } else {
        setUserExists(false);
        setUserData(null);
      }
    } catch (error) {
      console.log("Failed to check user existence:", error);
    }
  };

  return (
    <div className="center">
      <h1>Login</h1>
      <div className="text_field">
        <label>
          User Type:

          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="admin">Admin</option>
            <option value="field_officer">Field Officer</option>
            <option value="expert">Expert</option>
            <option value="businessman">Businessman</option>
            <option value="farmer">Farmer</option>
            <option value="deliveryman">Deliveryman</option>
          </select>
        </label>
      </div>
      <div className="text_field">
        <label>
          User ID:
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </label>
      </div>
      <div className="text_field">
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button onClick={checkUserExistence}>Sign In</button>
      {userExists ? (
        <div>
          {passwordMatch ? (
            <div>
              <p>User ID: {userData.userid}</p>
              <p>Password: {userData.password}</p>
              <p>Email: {userData.email}</p>
              <p>Address: {userData.address}</p>
              <p>NID: {userData.nid}</p>
              <p>User Type: {userData.user_type}</p>
              <p>User gg: {localStorage.getItem('user_type')}</p>
            </div>
          ) : (
            <p className="error-message">Password is wrong</p>
          )}
        </div>
      ) : (
        <p className="error-message">User does not exist</p>
      )}
    </div>
  );
};

export default DataFormComponent_login;
