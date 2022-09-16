import { React, useState } from "react";
import { NavLink, useHistory } from 'react-router-dom'

function NavBar({userData}) {

    const [ isClicked, setIsClicked ] = useState(false)

    const handleClick = () => {
        setIsClicked(!isClicked)
    }

    const history = useHistory()

    const handleLogOut = () => {
        fetch('/logout', {
            method: 'DELETE'
        })
        history.push('/')
    }

    const toUserPage = () => {
        history.push('/user/:id')
    }

    return(
        <div id="navbar-grid" className="bg-gray-4 flex overflow-hidden h-screen">
            <div className="flex absolute right-7 gap-2 lg:gap-3">
                    <div className="hidden sm:ml-6 sm:block">
                        <NavLink exact to = "/home" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium">Home</NavLink>
                        <NavLink exact to = "/movies" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Movies</NavLink>
                        <NavLink exact to = "/shows" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Shows</NavLink>
                        <button type="button" onClick={handleClick} class="rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                            <span class="sr-only">Open user menu</span>
                            <img class="inline-block h-9 w-9 rounded-full ml-9 cursor-pointer" src={userData.avatar} alt=""/>
                        </button>
                        {isClicked
                            ? <div class="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                <a href="#" onClick={toUserPage} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                <a href="#" onClick={handleLogOut} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                              </div>
                            : null
                        }
                </div>
            </div>
        </div>
    )
}

export default NavBar; 
