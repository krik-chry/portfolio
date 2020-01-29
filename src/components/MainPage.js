import React, { Component } from 'react';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import '../styles/MainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <>
        <div id="main-page">
          <h1 className="lg-heading">
            <span className="text-secondary">Chrisostomos</span> Krikonis
          </h1>
          <h2 className="sm-heading">Junior Full-Stack Web Developer</h2>
          {/* <h3 className="sm-heading">
          Javascript | React | NodeJS | HTML5 | CSS3 | Git | Redux | ExpressJS | <br></br>
          PostgreSQL | REST APIs | Docker | Typescript | GraphQL
        </h3> */}

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
