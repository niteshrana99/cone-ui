import React from 'react'
import logo_v_1 from '../../assets/images/logo_v_1.png';
const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper  teal">
                <a href="#" className="brand-logo">
                    <img style={{    width: '18%',
    transform: 'scale(1.5)'}} src={logo_v_1} />
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Categories</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
