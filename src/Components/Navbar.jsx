import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiMenu,
  FiX
} from "react-icons/fi";

import style from "../assets/css/Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={style.header}>

      <Link to="/" className={style.logo} onClick={closeMenu}>
        E-COMMERCE
      </Link>

      <nav
        className={`${style.navLinks} ${menuOpen ? style.showMenu : ""}`}
      >
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/shop" onClick={closeMenu}>
          Shop
        </NavLink>
      </nav>

      <div className={style.icons}>

        <Link to="/search" aria-label="Search">
          <FiSearch />
        </Link>

        <Link to="/wishlist" aria-label="Wishlist">
          <FiHeart />
        </Link>

        <Link to="/login" aria-label="Login">
          <FiUser />
        </Link>

        <button
          className={style.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

    </header>
  );
};

export default Navbar;