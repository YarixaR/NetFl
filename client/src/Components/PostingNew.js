import { React, useState } from 'react'

function PostingNew({renderingNewMovie}) {
  const [newData, setNewData] = useState({
    title: "",
    image: "",
    release_date: "",
    genre: "",
    description: "",
    trailer: "",
  })

  const [errors, setErrors] = useState([])

  function handleChange(e){
    setNewData({...newData,
    [e.target.name]: e.target.value})
  }

  function handleSubmit(e){
    e.preventDefault()
    
    fetch('/movies',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({...newData, ongoing:true})
    })
    .then(res => {
      if(res.ok){
        res.json().then(data => renderingNewMovie(data))
      } else {
        //Display errors
        res.json().then(data => {
          setErrors(Object.entries(data.errors))
        })
      }
    })
  }

  console.log(newData)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='text' name='title' placeholder='Title' value={newData.title} onChange={handleChange}/>
        <label>Image URL</label>
        <input type='text' name='image' placeholder='Image URL' value={newData.image} onChange={handleChange}/>
        <label>Release Date</label>
        <input type='text' name='release_date' placeholder='Released date' value={newData.release_date} onChange={handleChange}/>
        <label>Genre</label>
        <input type='text' name='genre' placeholder='Movie / Show' value={newData.genre} onChange={handleChange}/>
        <label>Description</label>
        <input type='text' name='description' placeholder='Description' value={newData.description} onChange={handleChange}/>
        <label>Trailer URL</label>
        <input type='text' name='trailer' placeholder="Please add '/embed/' after 'www.youtube.com'" value={newData.trailer} onChange={handleChange}/>
        <button>Submit</button>
      </form>
      {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}
    </div>
  )
}

export default PostingNew

