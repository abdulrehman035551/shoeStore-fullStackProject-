import React from 'react';
import CSS from "./Header.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Header(props) {
    let data=useSelector((state)=>state.cards)
   console.log(data);
    return (
        <div>
           {/* <header id='header'>
           <img src='logo.png'></img>
            <ul className='link'>
                <Link className='link-items'>Home</Link>
                <Link className='link-items'>Products</Link>
                <Link className='link-items'>About Us</Link>
                <Link className='link-items'>Contact Us</Link>
                <Link className='link-items'>Login</Link>
                <Link className='link-items'>Signup</Link>
            </ul>
           </header> */}
          {
            data.map((val)=>
            {
                return<img src={val}></img>
            })
          }

           {/* {
            data.map((val)=>
            {
                return <h1>{val}</h1>
            })
           } */}
        </div>
    );
}

export default Header;