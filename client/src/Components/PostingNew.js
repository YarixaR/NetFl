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
    <div className="flex flex-wrap justify-center mt-20">
      <div className="w-full max-w-sm">
        <div>
          <form onSubmit={handleSubmit} className="shadow-md rounded-lg bg-black opacity-90 rounded px-8 pt-6 pb-8 mb-4">
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" 
              type='text' name='title' placeholder='Title' value={newData.title} onChange={handleChange}/>
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' name='image' placeholder='Image URL' value={newData.image} onChange={handleChange}/>
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' name='release_date' placeholder='Released date' value={newData.release_date} onChange={handleChange}/>
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' name='genre' placeholder='Movie / Show' value={newData.genre} onChange={handleChange}/>
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' name='description' placeholder='Description' value={newData.description} onChange={handleChange}/>
            <input className="rounded-lg ml-10 mt-5 w-60 p-2 bg-gray-700 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
              type='text' name='trailer' placeholder="Trailer with '/embed/'" value={newData.trailer} onChange={handleChange}/>
            <button className="w-60 ml-10 mt-5 p-2 opacity-100 my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500-40 text-white font-semibold rounded-lg">Submit</button>
          </form>
          {errors ? errors.map(e => <div>{e[0]} {e[1]}</div>):null}
        </div>
      </div>
    </div>
  )
}

export default PostingNew

