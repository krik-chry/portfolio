import React, { Component } from 'react';
import '../styles/About.scss';

class About extends Component {
  render() {
    return (
      <>
        <div id="about-page">
          <h1 className="lg-heading">
            About
            <span className="text-secondary">Me</span>
          </h1>
          <div className="about-info">
            <div className="bio-image"></div>

            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p className="bio-text">
                After working in business industry for years, the magical world of coding inspired
                me to turn into a Web Developer. Always motivated to learn more, up for new
                challenges, eager to grow personally and professionaly. <br></br>
                <br></br> - Successfully Graduated from the Codaisseur Academy Full-Stack
                Development Bootcamp. <br></br>
                <br></br> - Experience with the latest software development technologies. <br></br>
                <br></br>- Collaborated and delivered products in teams using Agile (SCRUM)
                methodology.<br></br>
                <br></br> I am ready to make magic happen, currently looking for my first job as a
                developer, and people to share my passion for coding with.
              </p>
            </div>

            <div className="job stack">
              <h2 className="text-secondary">MY STACK</h2>
              <div className="stack-icons">
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/typescript.png"
                  alt="ts"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/plasticine/60/000000/react.png"
                  alt="react"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/graphql.png"
                  alt="graphql"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/redux.png"
                  alt="redux"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/nodejs.png"
                  alt="nodejs"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/javascript.png"
                  alt="js"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/html-5.png"
                  alt="html5"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/css3.png"
                  alt="css3"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/postgreesql.png"
                  alt="postgresql"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/docker.png"
                  alt="docker"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/git.png"
                  alt="git"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/material-rounded/60/000000/github.png"
                  alt="github"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/slack-new.png"
                  alt="slack"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/vue-js.png"
                  alt="vue"
                ></img>
              </div>
            </div>

            <div className="job job-2">
              <h3>Designers ABC</h3>
              <h6>Front End Developer</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates perferendis
                totam enim. Nesciunt porro dolores expedita dolor necessitatibus deserunt nemo.
              </p>
            </div>

            <div className="job job-3">
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
