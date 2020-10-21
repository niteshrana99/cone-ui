import React from "react";
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <div>
      <a class="dropdown-trigger" href="#" data-target="dropdown1">
        {" "}
        <i class="material-icons">person_outline</i> <p className={styles.menuLabel}>Login/Register</p>
      </a>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
        <li>
          <a href="#!">two</a>
        </li>
        <li class="divider" tabindex="-1"></li>
        <li>
          <a href="#!">three</a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">view_module</i>four
          </a>
        </li>
        <li>
          <a href="#!">
            <i class="material-icons">cloud</i>five
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
