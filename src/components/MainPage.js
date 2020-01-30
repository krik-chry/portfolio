import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../styles/MainPage.scss';
import { Link } from 'react-router-dom';

class MainPage extends Component {
  state = { showMenu: false, currentPage: 'home' };

  toggleMenu = page => {
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

      this.setState({ currentPage: page, showMenu: false });
    }
  };
  render() {
    return (
      <>
        <div id="main-page">
          <h1 className="lg-heading">
            <span className="text-secondary">Chrisostomos</span> Krikonis
          </h1>
          <h2 className="sm-heading">Junior Full-Stack Web Developer</h2>
          <div>
            <ul className="main-menu-nav">
              <li
                onClick={() => this.toggleMenu('home')}
                className={'nav-item ' + (this.state.currentPage === 'home' ? 'current' : '')}
              >
                <Link to="/" className="nav-link-button">
                  Home
                </Link>
              </li>
              <li
                onClick={() => this.toggleMenu('about')}
                className={'nav-item ' + (this.state.currentPage === 'about' ? 'current' : '')}
              >
                <Link to="/about" className="nav-link-button">
                  About me
                </Link>
              </li>
              <li
                onClick={() => this.toggleMenu('work')}
                className={'nav-item ' + (this.state.currentPage === 'work' ? 'current' : '')}
              >
                <Link to="/work" className="nav-link-button">
                  My Work
                </Link>
              </li>
              <li
                onClick={() => this.toggleMenu('contact')}
                className={'nav-item ' + (this.state.currentPage === 'contact' ? 'current' : '')}
              >
                <Link to="/contact" className="nav-link-button">
                  Contact me
                </Link>
              </li>
            </ul>
          </div>
          <div className="icons">
            <a className="fb-icon" href="https://www.facebook.com/xrisostomos.krikonis">
              <FaFacebook size="3rem" />
            </a>
            <a className="gh-icon" href="https://github.com/krik-chry/">
              <FaGithub size="3rem" />
            </a>
            <a className="lin-icon" href="https://www.linkedin.com/in/xrisostomos-krikonis/">
              <FaLinkedin size="3rem" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
