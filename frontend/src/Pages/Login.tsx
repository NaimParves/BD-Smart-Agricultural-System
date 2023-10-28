import React, { useState, useEffect } from "react";
import axios from "axios";
import './LoginForm.css'; // Import your CSS file
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Paper,
} from "@mui/material";

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
      if (userType === "admin") {
        navigate('/admin'); // Navigate to the admin page
      } else if (userType === "field_officer") {
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
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
        <Typography variant="h4" align="center">
          Login
        </Typography>
        <FormControl fullWidth style={{ margin: "10px 0" }}>
          <InputLabel></InputLabel>
          <Select
            value={userType}
            onChange={(e) => setUserType(e.target.value as string)}
          >
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="field_officer">Field Officer</MenuItem>
            <MenuItem value="expert">Expert</MenuItem>
            <MenuItem value="businessman">Businessman</MenuItem>
            <MenuItem value="farmer">Farmer</MenuItem>
            <MenuItem value="deliveryman">Deliveryman</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="User ID"
          fullWidth
          variant="outlined"
          value={userid}
          onChange={(e) => setUserid(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <TextField
          label="Password"
          fullWidth
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ margin: "10px 0" }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={checkUserExistence}
          style={{ marginTop: "20px" }}
        >
          Sign In
        </Button>
        {userExists ? (
          <Box mt={2}>
            {passwordMatch ? (
              <div>
                <Typography variant="h6">User Information:</Typography>
                <Typography>User ID: {userData.userid}</Typography>
                <Typography>Password: {userData.password}</Typography>
                <Typography>Email: {userData.email}</Typography>
                <Typography>Address: {userData.address}</Typography>
                <Typography>NID: {userData.nid}</Typography>
                <Typography>User Type: {userData.user_type}</Typography>
                <Typography>User gg: {localStorage.getItem("user_type")}</Typography>
              </div>
            ) : (
              <Typography className="error-message">Password is wrong</Typography>
            )}
          </Box>
        ) : (
          <Typography className="error-message">User does not exist</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default DataFormComponent_login;
