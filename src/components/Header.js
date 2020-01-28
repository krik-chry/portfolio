import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
  state = { showMenu: false };
  toggleMenu = () => {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    if (!this.state.showMenu) {
      menuBtn.classList.add('close');
      menu.classList.add('show');
      menuNav.classList.add('show');
      menuBranding.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));

      this.setState({ showMenu: true });
    } else {
      menuBtn.classList.remove('close');
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      menuBranding.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));

      this.setState({ showMenu: false });
    }
  };
  render() {
    return (
      <header>
        <div onClick={() => this.toggleMenu()} className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>

        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                My Work
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
