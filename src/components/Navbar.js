import React from 'react'
import { Link } from 'react-router-dom'
import{AiFillHome,AiFillPlusCircle} from 'react-icons/ai'
import styled from 'styled-components'
import {FaLayerGroup} from 'react-icons/fa'


const StyledNav = styled.nav`
width:100%;
padding:10px 30px;
background:white;
display: flex;
justify-content: space-between;
border-radius: 100px;
position: sticky;
top:20px;
box-shadow:0 3px 5px 2px rgb(0,0,0,0.15);
a{
    padding:5px;
    display: flex;
    gap:10px;
    align-items: center;
    .icon{
        font-size:28px;
    }
    text-decoration: none;
    transition: 0.1s ease all;
    &:hover{
        transform: scale(1.1);
    }
    &:active{
        transform: scale(0.9);
    }
    
}
`;
function Navbar() {
  return (
    <StyledNav>
        <Link to='/'><AiFillHome className='icon'/> Home</Link>
        <Link to='/post/new'><AiFillPlusCircle className='icon'/> Create Post</Link>
        <Link to='/post/all'><FaLayerGroup className='icon'/> All Posts</Link>
    </StyledNav>
  )
}

export default Navbar