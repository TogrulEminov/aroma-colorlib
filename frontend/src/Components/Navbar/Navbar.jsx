import React from 'react'
import Logo from '../Logo/Logo'
import "./_Navbar.scss"
import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'
import { useContext } from 'react'
import { mainContext } from '../../Context/Context'
const Navbar = () => {
    const { search, setSearch, open, setOpen, sortByPrice } = useContext(mainContext)

    const openInput = () => {
        setOpen(!open)
    }
    return (
        <div className='allNavbar'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <Logo />
                    </div>
                    <div className="col-5 navbarCenter">
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/pages">Pages</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 navbarRight">
                        <div className="searchBasket">
                            <div className="search">
                                <AiOutlineSearch onClick={openInput} />
                                <div className='searchInput' style={open ? { display: "block" } : { display: "none" }}>
                                    {/* <form> */}
                                        <input type="text" name='search' value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Type here..." />
                                    {/* </form> */}
                                </div>
                            </div>
                            <div className="basket">
                                <AiOutlineShoppingCart />
                                <span>0</span>
                            </div>
                        </div>
                        <NavLink to="/add">Add</NavLink>
                        <div>
                            <button onClick={sortByPrice}>Filter</button>
                        </div>
                        <div className="hamburger">
                            <button><GiHamburgerMenu /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar