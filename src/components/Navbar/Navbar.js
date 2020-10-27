import React, { useEffect } from "react";
import logo_v_1 from "../../assets/images/logo_v_1.png";
import M from "materialize-css";
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import { Link } from "react-router-dom";


const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".dropdown-trigger");
    M.Dropdown.init(elems, {
        constrainWidth: false,
        coverTrigger: false,
        closeOnClick: false
    });
  }, []);
  return (
    <nav>
      <div className="nav-wrapper  teal">
        <Link to="/" href="#" className="brand-logo">
          <img
            style={{ width: "18%", transform: "scale(1.5)" }}
            src={logo_v_1} alt="brand Logo"
          />
        </Link>
        <ul id="nav-mobile" className="right ">
        <li className="position-relative center-align">
            <a href="javscript;void(0)" className="dropdown-trigger" data-target="dropdown1">
              <i className="material-icons">person_pin</i>
              <p className={styles.profileCaption}>Profile</p>
            </a>
            <ul id="dropdown1" className={`dropdown-content ${styles.dropdownMenu}`}>
              <li style={{padding:'16px'}}>
                <p><strong>Welcome</strong></p>
                <p>To access account and manage orders</p>
                <Button><Link to="/login">Login / Register</Link></Button>
              </li>
            </ul>
          </li>
          <li className="position-relative center-align">
            <div>
              <a>
                <i className="material-icons">contact_mail</i>
                <p className={styles.contactCaption}>Contact</p>
              </a>
            </div>
          </li>
          <li className="position-relative center-align">
            <a>
              <i className="material-icons">shopping_cart</i>
              <p className={styles.cartCaption}>Cart</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
