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
        <div className="bg-gray-4 h-10 flex items-center overflow-hidden h-screen justify-center">
            <div className="flex gap-2 lg:gap-3">
                    <div className="hidden sm:ml-6 sm:block">
                        <NavLink exact to = "/home" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                        <NavLink exact to = "/movies" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</NavLink>
                        <NavLink exact to = "/shows" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shows</NavLink>
                        <NavLink exact to = "/user/:id" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">User</NavLink>
                        <img
                            onClick={handleLogOut}
                            className="inline-block h-9 w-9 rounded-full ml-9 cursor-pointer"
                            src="https://i.pinimg.com/564x/4a/96/aa/4a96aa2357201c454bacf2119f690a89.jpg"
                            alt="avatar"
                        />
                </div>
            </div>
        </div>
    )
}

export default NavBar; 
