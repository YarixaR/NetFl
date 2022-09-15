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
    <div className="login">
    <div className="flex flex-wrap justify-center mt-20">
      <div className="w-full max-w-sm">
        <div>
          <form onSubmit={handleSubmit} className="shadow-md rounded-lg bg-black opacity-90 h-96 rounded px-8 pt-6 pb-8 mb-4 ">
            <section>
              <h1 className="text-xl dark:text-white font-bold text-center">
                Login
              </h1>
            </section>
            <input 
              className="rounded-lg ml-10 mt-10 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' 
              name='email' 
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}>
            </input>
            <input 
                className="rounded-lg ml-10 mt-10 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='password'
              name='password' 
              placeholder='Password' 
              value={formData.password}
              onChange={handleChange}>
            </input>
          <button className="w-full mt-10 opacity-100 my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500-40 text-white font-semibold rounded-lg" type='submit'>Sign In</button>
          <div className="flex justify-between text-gray-400 py-2 mr-2">
            <Link to={'/signup'}>Sign up now!</Link>
          </div>
       </form>
       {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login; 