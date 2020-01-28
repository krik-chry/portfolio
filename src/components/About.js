import React, { Component } from 'react';
import Header from './Header';
import '../styles/About.scss';

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div id="about-page">
          <h1 class="lg-heading">
            About
            <span class="text-secondary">Me</span>
          </h1>
          <div class="about-info">
            <div className="bio-image"></div>

            <div class="bio">
              <h3 class="text-secondary">BIO</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt magni nam nisi
                quae vitae? Quod molestiae ipsa autem natus eum vel ducimus nulla harum voluptatem
                eligendi! Unde, reiciendis? Praesentium, laborum.
              </p>
            </div>

            <div class="job job-1">
              <h3>123 Webshop</h3>
              <h6>Full Stack Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis
                totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.
              </p>
            </div>

            <div class="job job-2">
              <h3>Designers ABC</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis
                totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.
              </p>
            </div>

            <div class="job job-3">
              <h3>Webworks</h3>
              <h6>Graphic Designer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis
                totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
