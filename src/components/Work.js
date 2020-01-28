import React, { Component } from 'react';
import Header from './Header';
import '../styles/Work.scss';

class Work extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="about-page">
          <h1 class="lg-heading">
            My
            <span class="text-secondary">Work</span>
          </h1>
          <div class="projects">
            <div class="item">
              <a href="#!">
                <img src={require('../assets/project-calendar.png')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/rock-paper-scissors.gif')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/ticketfinder.png')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
            <div class="item">
              <a href="#!">
                <img src={require('../assets/time-travel.gif')} alt="Project" />
              </a>
              <a href="#" class="btn-light">
                <i class="fas fa-eye"></i> Project
              </a>
              <a href="#" class="btn-dark">
                <i class="fab fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Work;
