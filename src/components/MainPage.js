import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaPhoneSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import '../styles/MainPage.scss';

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

          <div className="icons">
            <a id="gh-icon" href="https://github.com/krik-chry/">
              <FaGithub className="main-page-icon" />
            </a>
            <a id="lin-icon" href="https://www.linkedin.com/in/xrisostomos-krikonis/">
              <FaLinkedin className="main-page-icon" />
            </a>
            <a id="mail-icon" href="mailto:krikonis.chr@gmail.com">
              <MdMail className="main-page-icon" />
            </a>
            <a id="fb-icon" href="https://www.facebook.com/xrisostomos.krikonis">
              <FaFacebook className="main-page-icon" />
            </a>
            <a id="phone-icon" href="tel:+306984377089">
              <FaPhoneSquare className="main-page-icon" />
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default MainPage;
