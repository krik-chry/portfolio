import React, { Component } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Work.scss';

class Work extends Component {
  render() {
    return (
      <>
        <div id="work-page">
          <h1 className="lg-heading">
            My<span className="text-secondary">Work</span>
          </h1>
          <div className="projects">
            <div className="item">
              <img src={require('../assets/time-travel.gif')} alt="time-travel" />
              <a href="https://github.com/krik-chry/" className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a href="https://github.com/krik-chry/" className="btn-dark">
                <FaGithub size="1rem" /> Github
              </a>
              <p>Hello</p>
            </div>
            <div className="item">
              <img src={require('../assets/ticketfinder.png')} alt="ticketfinder-project" />
              <a href="https://github.com/krik-chry/" className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a className="btn-dark" href="https://github.com/krik-chry/">
                <FaGithub size="1rem" /> Github
              </a>{' '}
              <p>Hello</p>
            </div>
            <div className="item">
              <img src={require('../assets/rock-paper-scissors.gif')} alt="rps-game" />
              <a href="https://github.com/krik-chry/" className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a className="btn-dark" href="https://github.com/krik-chry/">
                <FaGithub size="1rem" /> Github
              </a>{' '}
              <p>Hello</p>
            </div>
            <div className="item">
              <img src={require('../assets/project-calendar.png')} alt="calendar" />
              <a href="https://github.com/krik-chry/" className="btn-light">
                Not Available Demo
              </a>
              <a className="btn-dark" href="https://github.com/krik-chry/">
                <FaGithub size="1rem" /> Github
              </a>
              <p>Hello</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Work;
