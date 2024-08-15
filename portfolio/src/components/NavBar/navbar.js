import React, { useState } from 'react';
import './navbar.css';
import contact from '../../assets/telephone.png';
import menu from '../../assets/menu.png';
import {Link} from 'react-scroll';



const Navbar = () => {
    const [showMenu , setShowMenu] = useState(false);
    return(
        <nav className='navbar'>
            <div className='desktopMenu'>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='desktopMenuListItem'>Porfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-65} duration={500}  className='desktopMenuListItem'>Clients</Link>

            </div>
            <button className='desktopMenuBtn' onClick={() =>{
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contact} alt='' className='desktopMenuImg'/>Contact Me</button>

            <img src={menu} alt='Menu' className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex' :'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={() =>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Porfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-65} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Clients</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-65} duration={500}  className='listItem' onClick={() =>setShowMenu(false)}>Contact</Link>

            </div>
        </nav>
    )
}

export default Navbar