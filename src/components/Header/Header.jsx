import React from 'react'
import css from "./Header.css"
import Box from "@mui/material/Box"
import { NavLink, Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {/* <h1>this is</h1> */}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"

                sx={
                    {
                        width: '100%',
                        height: '80px',
                        backgroundColor: '#0e0e0e03;',

                    }
                }>
                <img className='logo' src="logo.gif"></img>
                <NavLink className='catagories'>
                    <Link to="" className='cat-link'>Home</Link>
                    <Link to="/product/man" className='cat-link'>Man</Link>
                    <Link  to="/product/women" className='cat-link'>Women</Link>
                    <Link  to="/product/kids"className='cat-link'>Kids</Link>
                </NavLink>
                {/* <h2 style={{marginRight:"40px"}}>Well Come Ali</h2> */}

                <NavLink className='login-signup'>
                    <Link to="/login"className='cat-link'>Login</Link>
                    <Link to="/signup"  className='cat-link' >Signup</Link>
                    <Link to="/card" className='cat-link' ><img id="card-icon" src="card.gif"></img></Link>

                </NavLink>
            </Box>
        </div>
    );
}

export default Header;