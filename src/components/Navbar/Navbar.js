import React ,{useState}from 'react'
import {Link} from 'react-scroll'
import Icon from 'react-icons-kit'
import {menu} from 'react-icons-kit/feather/menu'
import { close } from "react-icons-kit/fa/close";
import './Navbar.css'

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
 
  return (
    <nav className='navbar'>
        <h2 className="logo">VKR</h2>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </li>
        </ul>
        <div className="toggle-icon" onClick={()=>setToggle(!toggle)}>
            {  toggle ? <Icon icon={close}/>  : <Icon icon={menu}/>}
        </div>
    </nav>
  );
}

export default Navbar