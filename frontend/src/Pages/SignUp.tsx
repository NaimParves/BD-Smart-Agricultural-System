import React, { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [nid, setNid] = useState("");
  const [user_type, setUserType] = useState("admin");
  const [userExists, setUserExists] = useState(false);

  const checkUserExistence = async () => {
    try {
      let loginEndpoint = "http://127.0.0.1:8000/login/";
      if (user_type === "field_officer") {
        loginEndpoint = "http://127.0.0.1:8000/login_field_officer/";
      }

      const response = await axios.post(loginEndpoint, {
        userid,
      });

      if (response.data.exists) {
        setUserExists(true);
      } else {
        setUserExists(false);
      }
    } catch (error) {
      console.log("Failed to check user existence:", error);
    }
  };

  const handleSubmit = async () => {
    if (userExists) {
      alert("User already exists. Please choose a different User ID.");
      return;
    }

    if (!userid || !password || !email || !address || !nid || !user_type) {
      alert("All fields are required.");
      return;
    }

    try {
      let registerEndpoint = "http://127.0.0.1:8000/register/";
      if (user_type === "field_officer") {
        registerEndpoint = "http://127.0.0.1:8000/register_field_officer/";
      }

      await axios.post(registerEndpoint, {
        userid,
        password,
        email,
        address,
        nid,
        user_type,
      });
      alert("Signup successful!");
    } catch (error) {
      console.log("Failed to signup:", error);
    }
  };

  return (
    <div>
      <h2>Signup Form</h2>
      <div>
        <label>
          User Type:
          <select
            value={user_type}
            onChange={(e) => setUserType(e.target.value)}
            onBlur={checkUserExistence}
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
      <div>
        <label>
          User ID:
          <input
            type="text"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
            onBlur={checkUserExistence}
          />
        </label>
        {userExists ? (
          <p>User already exists. Please choose a different User ID.</p>
        ) : null}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          NID:
          <input
            type="text"
            value={nid}
            onChange={(e) => setNid(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignupForm;
