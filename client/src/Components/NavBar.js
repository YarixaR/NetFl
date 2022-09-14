import React from "react";
import { NavLink, useHistory } from 'react-router-dom'

function NavBar() {
    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push('/')
    }

    return(
        <div>
            <NavLink exact to = "/home">Home</NavLink>
            <NavLink exact to = "/movies">Movies</NavLink>
            <NavLink exact to = "/shows">Shows</NavLink>
            <NavLink exact to = "/user/:id">User</NavLink>
            <button onClick={handleLogOut}>Logout</button>
        </div>
    )
}

export default NavBar; 