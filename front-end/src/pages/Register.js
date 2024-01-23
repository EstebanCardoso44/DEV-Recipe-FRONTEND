import React, { useState } from 'react';
import Axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleRegister = async () => {
    try {
      // Send a POST request to register the user
      await Axios.post('http://localhost:2000/register', userData);

      // Reset the form after successful registration
      setUserData({
        username: '',
        password: '',
      });
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle errors on the front-end if needed
    }
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;