import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function SignUp() {
  const [formData, setFormData] = useState({
    email:'',
    name:'',
    password:'',
    avatar:''
  })

  const [errors, setErrors] = useState([])
  const history = useHistory()

  const {name, email, password, avatar} = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e){
    e.preventDefault()
    const user = {
        name,
        email,
        password,
        avatar
    }
   
    fetch(`/users`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {console.log(res)
        if(res.ok){
            res.json().then(user => {
              console.log(user)
              history.push(`/`)
            })
        }else {
            res.json().then(json => setErrors(Object.entries(json.error)))
        }
    })
  }

  return (
    <div className="flex flex-wrap justify-center mt-20">
      <div className="w-full max-w-sm">
        <div>
          <form onSubmit={handleSubmit} className="shadow-md rounded-lg bg-black opacity-90 h-96 rounded px-8 pt-6 pb-8 mb-4 ">
          <section>
              <h1 className="text-xl dark:text-white font-bold text-center">
                Sign Up
              </h1>
            </section>
            <input 
              className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' 
              name='email'
              placeholder='Email'
              value={email} 
              onChange={handleChange} />     
            <input 
              className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' 
              name='name' 
              placeholder='Name'
              value={name} 
              onChange={handleChange} /> 
            <input 
              className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='password' 
              name='password' 
              placeholder='Password'
              value={password} 
              onChange={handleChange} />
            <input 
              className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' 
              name='avatar' 
              placeholder='Avatar Url'
              value={avatar} 
              onChange={handleChange} />
            <button className="w-full mt-5  opacity-100 my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500-40 text-white font-semibold rounded-lg" type='submit'>Sign Up</button>
          </form>
          {errors? errors.map(error => <div> {error} </div>) :null}
        </div>
      </div>
    </div>
  )
}

export default SignUp
