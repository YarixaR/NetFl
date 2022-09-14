import React from "react";
import { useState } from "react";
import { Link, useHistory } from 'react-router-dom'

function Login({settingUserId}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([])
  const history = useHistory()

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res)
      if (res.ok) {
        res.json().then((user) => {
          history.push(`/home`)
          settingUserId(user.id)
          // console.log(user)
        });
      } else {
        res.json().then(json => setErrors(Object.entries(json.error)))
      }
    });
  };

  return(
    <div>
      <form onSubmit={handleSubmit}>
          <label></label>
            <input 
              type='text' 
              name='email' 
              placeholder='Email' 
              value={formData.email}
              onChange={handleChange}>
            </input>
          <label></label>
            <input 
              type='password'
              name='password' 
              placeholder='Password' 
              value={formData.password}
              onChange={handleChange}>
            </input>
          <button type='submit'>Sign In</button>
       </form>
       <Link to={'/signup'}>Sign up now!</Link>
       {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
    </div>
  )
}

export default Login; 