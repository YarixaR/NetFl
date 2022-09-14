import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar() {


    return(
        <div>
            <NavLink exact to = "/home">Home</NavLink>
            <NavLink exact to = "/movies">Movies</NavLink>
            <NavLink exact to = "/shows">Shows</NavLink>
            <NavLink exact to = "/user/:id">User</NavLink>
        </div>
    )
}

export default NavBar; 