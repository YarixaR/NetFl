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
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>  
        <input 
          type='text' 
          name='email'
          placeholder='Email'
          value={email} 
          onChange={handleChange} />     
        <label></label>
        <input 
          type='text' 
          name='name' 
          placeholder='Name'
          value={name} 
          onChange={handleChange} /> 
        <label></label>
        <input 
          type='password' 
          name='password' 
          placeholder='Password'
          value={password} 
          onChange={handleChange} />
        <label></label>
        <input 
          type='text' 
          name='avatar' 
          placeholder='Avatar Url'
          value={avatar} 
          onChange={handleChange} />
        <input type='submit' value='Sign Up' />
      </form>
      {errors? errors.map(error => <div> {error} </div>) :null}
    </div>
  )
}

export default SignUp
