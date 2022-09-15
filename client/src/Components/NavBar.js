import React from "react";
import { NavLink, useHistory } from 'react-router-dom'

function NavBar({avatar}) {
    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push('/')
    }
    

    return(
        <div className="text-3xl font-bold underline">
            <NavLink exact to = "/home" className="navText">Home</NavLink>
            <NavLink exact to = "/movies" className="navText">Movies</NavLink>
            <NavLink exact to = "/shows" className="navText">Shows</NavLink>
            <NavLink exact to = "/user/:id" className="navText">User</NavLink>
            {/* <img src="https://i.pinimg.com/564x/31/49/89/314989b233bd6cd55b025ab1925b2831.jpg" alt="movie" onClick={handleLogOut}/>             */}
            <div className="flex -space-x-1 overflow-hidden">
            <img
                onClick={handleLogOut}
                className="inline-block h-9 w-9 rounded-full"
                src={avatar}
                alt="avatar"
            />
            </div>
        </div>
    )
}

export default NavBar; 

{/* <button onClick={handleLogOut}>Logout</button> */}