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
              <h3>A JOURNEY THROUGH TIME</h3>
              <a href="https://time-travel-app.herokuapp.com/" className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Live Demo
              </a>
              <a href="https://github.com/krik-chry/time-travel" className="btn-dark">
                <FaGithub size="1rem" /> Github
              </a>
              <div className="project-desc">
                <p class="desc-section">About</p> Frontend only app that displays now and then
                photos, showing how much the world has changed over time. Learned the basics of a
                new technology (Vue.js) and applied it in a 3-day Hackathon project. <br></br>
                <p class="desc-section">Features</p> Get Photos by Category (Top 10, All Photos,
                Buildings, People, Nature, Aerial, Interior), Search by term
                <br></br>
                <p class="desc-section">Technologies</p> Vue.js, Axios, CSS3, Hooper,
                vue-compare-image
              </div>
            </div>
            <div className="item">
              <img src={require('../assets/ticketfinder.png')} alt="ticketfinder-project" />
              <h3>TICKETFINDER</h3>
              <div className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Not Available Demo
              </div>
              <a href="https://github.com/krik-chry/w8-final-client" className="btn-dark">
                <FaGithub size="1rem" /> Github
              </a>
              <div className="project-desc">
                <p class="desc-section">About</p> Full-Stack WebApp for finding, buying or selling
                tickets online for upcoming events. Final Individual Assignment Project (5 days) for
                Codaisseur Academy Bootcamp. Demo is not available due to Academy restrictions, but
                I would be happy to make a live demonstration. <br></br>
                <p class="desc-section">Features</p> Signup, Login, Add Event, Filter finished
                events, Add Ticket, Edit Ticket, Algorithm that calculates the Risk of buying a
                specific ticket.
                <br></br>
                <p class="desc-section">Technologies</p> React, Redux, NodeJS, ExpressJS,
                PostgreSQL, REST APIs, Docker, JWT, Superagent, CSS3
              </div>
            </div>
            <div className="item">
              <img src={require('../assets/rock-paper-scissors.gif')} alt="rps-game" />
              <h3>ROCK-PAPER-SCISSORS</h3>
              <a href="https://still-beyond-94898.herokuapp.com/" className="btn-light">
                <FaExternalLinkAlt size="1rem" /> Live Demo
              </a>
              <a href="https://github.com/ahaigh9877/week-7-game-client" className="btn-dark">
                <FaGithub size="1rem" /> Github
              </a>
              <div className="project-desc">
                <p class="desc-section">About</p> Full-Stack Multiplayer Rock-Paper-Scissors game,
                built by a team of two, in 4 days with minimal guidance. You will probably not find
                an opponent to play in the demo, so here you can see a gameplay gif.
                <br></br>
                <p class="desc-section">Features</p> Signup, Login, Streaming technology to keep
                both players in sync, Create new room, Join Room and Play vs another player
                <br></br>
                <p class="desc-section">Technologies</p> React/Redux, ExpressJS, PostgreSQL,
                Sequelize, Docker, JWT, Bcryptjs, Json-sse, CSS3
              </div>
            </div>
            <div className="item">
              <img src={require('../assets/project-calendar.png')} alt="calendar" />
              <h3>CODAISSEUR ACADEMY CALENDAR</h3>
              <div className="btn-light">Not Available Demo</div>
              <a
                className="btn-dark"
                href="https://github.com/Official-Codaisseur-Graduate/calendar-api-client"
              >
                <FaGithub size="1rem" /> Github
              </a>
              <div className="project-desc">
                <p class="desc-section">About</p> Codaisseur Academy Calendar is a platform for
                Codaisseur's students, teacher's assistants and teachers. Users can view all of
                Codaisseur's Academy events, and especially which teacher is teaching what class and
                what lesson on a given day.Worked in a team of two for 4 days, continuing the
                previous class' project.
                <br></br> <p class="desc-section">Features</p> Sync with Google Calendar and display
                events, Rank System (Admin, Teachers, Assistants, Students), Admin Page (Connect to
                Google Calendar, Promote/Demote users), SignUp, Login, Reset Password, Verification
                E-mail, Personal Profile Page <br></br>
                <p class="desc-section">Technologies</p> Google Calendar API, React/Redux, NodeJS,
                Bootsrap ExpressJS, Nodemailer, PostgreSQL, REST APIs
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Work;
