import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

class Header extends Component {
  state = { showMenu: false, currentPage: 'home' };

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

  navToPage = page => {
    this.setState({ currentPage: page, showMenu: false });
    this.toggleMenu();
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
            <li
              onClick={() => this.navToPage('home')}
              className={'nav-item ' + (this.state.currentPage === 'home' ? 'current' : '')}
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              onClick={() => this.navToPage('about')}
              className={'nav-item ' + (this.state.currentPage === 'about' ? 'current' : '')}
            >
              <Link to="/about" className="nav-link">
                About me
              </Link>
            </li>
            <li
              onClick={() => this.navToPage('work')}
              className={'nav-item ' + (this.state.currentPage === 'work' ? 'current' : '')}
            >
              <Link to="/work" className="nav-link">
                My Work
              </Link>
            </li>
            <li
              onClick={() => this.navToPage('contact')}
              className={'nav-item ' + (this.state.currentPage === 'contact' ? 'current' : '')}
            >
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
