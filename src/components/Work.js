import React, { Component } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Header from './Header';
import '../styles/Work.scss';

class Work extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="work-page">
          <h1 class="lg-heading">
            My<span class="text-secondary">Work</span>
          </h1>
          <div class="projects">
            <div class="item">
              <a href="#!">
                <img src={require('../assets/time-travel.gif')} alt="time-travel" />
              </a>
              <a href="https://github.com/krik-chry/" class="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a href="https://github.com/krik-chry/" class="btn-dark">
                <FaGithub size="1rem" /> Github
              </a>
              <p>Hello</p>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/ticketfinder.png')} alt="ticketfinder-project" />
              </a>
              <a href="https://github.com/krik-chry/" class="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a className="btn-dark" href="https://github.com/krik-chry/">
                <FaGithub size="1rem" /> Github
              </a>{' '}
              <p>Hello</p>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/rock-paper-scissors.gif')} alt="rps-game" />
              </a>
              <a href="https://github.com/krik-chry/" class="btn-light">
                <FaExternalLinkAlt size="1rem" /> Demo
              </a>
              <a className="btn-dark" href="https://github.com/krik-chry/">
                <FaGithub size="1rem" /> Github
              </a>{' '}
              <p>Hello</p>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/project-calendar.png')} alt="calendar" />
              </a>
              <a href="https://github.com/krik-chry/" class="btn-light">
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
