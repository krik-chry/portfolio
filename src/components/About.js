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
                After working in business industry for years, the world of coding inspired me to
                turn into a Web Developer. Always motivated to learn more, up for new challenges,
                eager to grow personally and professionaly. <br></br>
                <br></br>I am ready to make magic happen, currently looking for my first job as a
                developer, and people to share my passion for coding with.
              </p>
            </div>

            <div className="job stack">
              <div className="stack-icons">
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/javascript.png"
                  alt="js"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/plasticine/60/000000/react.png"
                  alt="react"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/nodejs.png"
                  alt="nodejs"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/git.png"
                  alt="git"
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
                  src="https://img.icons8.com/color/60/000000/redux.png"
                  alt="redux"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/typescript.png"
                  alt="ts"
                />
                <img
                  className="stack-icon"
                  src="https://img.icons8.com/color/60/000000/graphql.png"
                  alt="graphql"
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
                  src="https://img.icons8.com/color/60/000000/vue-js.png"
                  alt="vue"
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
              </div>
            </div>

            <div className="job job-1">
              <h3>Full-Stack Web Developer, Codaisseur Academy Graduate</h3>
              <p>
                <a href="https://codaisseur.com/become-a-developer">
                  Codaisseur's Academy Bootcamp
                </a>{' '}
                is an intensive and challenging 3-month course, where only 35% of applicants are
                accepted and 70% of the students are graduating. During the course, I :<br></br>
                <ul>
                  <li>Proved that I am a fast-learning, easy-to-adapt, autonomous developer</li>
                  <li>Grew confindence that I can solve any problem</li>
                  <li>Excelled in ALL code reviews and quality assessments</li>
                  <li>Improved and added new features in an existing codebase</li>
                  <li>
                    Collaborated in teams, using Agile (SCRUM) methodologies and delivered quality
                    products
                  </li>
                  <li>Created a front-end web-app with a technology not taught, in only 3 days</li>
                </ul>
              </p>
            </div>

            <div className="job job-2">
              <p id="quote">
                "Chrisostomos is a talented engineer who is the definition of a great teammate. I
                taught Chrisostomos at Codaisseur, where he was at the top of his class technically
                and consistently excelled in real-world development opportunities. Chrisostomos'
                background and intense devotion to hard work shone through in his ability to
                engineer meaningful products to high standards quickly. Chrisostomos made the people
                he worked with better by delivering quality code, insightful architecture, and a
                highly professional demeanor. Chrisostomos is fully capable of being a substantially
                contributing developer in any modern development team.""
              </p>
              <h5 id="quote-author">David Stephenson, JavaScript Teacher at Codaisseur</h5>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About;
