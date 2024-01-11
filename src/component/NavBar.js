import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function getNavLinkClass({ isActive }) {
  return isActive ? styles.navItemActive : styles.navItem;
}

function NavBar() {
  return (
    <nav className={styles.navContainer}>
      <NavLink className={getNavLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={getNavLinkClass} to="about">
        About Us
      </NavLink>
      <NavLink className={getNavLinkClass} to="search">
        Search Receipe
      </NavLink>
      <NavLink className={getNavLinkClass} to="favorite">
        My Favorite Receipe
      </NavLink>
      <NavLink className={getNavLinkClass} to="myrecipe">
        My Own Recipe
      </NavLink>
    </nav>
  );
}

export default NavBar;
