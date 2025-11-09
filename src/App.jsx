import { useState } from "react";
import Garden from "./components/Garden.jsx";
import Instagram from "./components/Instagram.jsx";
import Schedule from "./components/Schedule.jsx";
import Team from "./components/Team.jsx";
import Arena from "./components/Arena.jsx";
import "./App.css";

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
};

function App() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <main>
        <a href="#title">
          <img
            id="anchor"
            src="https://image-gosting.s3.amazonaws.com/ddap/a.svg"
            style={{ stroke: "white" }}
            className={`controlsHoverIn ${hovered ? "" : "controlsHoverOut"}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></img>
        </a>
        <Garden />

        <section id="title" className="title-section">
          <div>
            <div className="title">DIGITAL DESIGN @ PARSONS</div>
          </div>

          <p className="what-we-do">
            D-DAP (pronounced dee-dap) is a student-run club for designers and creative 
            technologists interested in areas like web design, UIUX, creative coding, 
            Touchdesigner, and all things related to the intersection of design and 
            tech!
          </p>
          <p className="what-we-do">
            We host guest speakers and workshops throughout the semesters.
            We currently have weekly co-working sessions every <u>Tuesday 5–7pm</u> 
            in <u>2 W 13th St, Room 404</u> Any upcoming events will be 
            updated on this website, as well as our{" "}
            <a href="http://instagram.com/digitaldesignatparsons" target="_blank">
              Instagram
            </a>{" "}
          </p>
          <p>Our meetings are open to everyone !</p>
          <p>
            We send out{" "}
            <a href="https://forms.gle/MxhJQVjBCwCvPM3L6" target="_blank">
              e-mail updates
            </a>{" "}
            about upcoming events, and announce monthly guest speaker lineup at the start of every month.<br />
          </p>

          <p>
            We are always open to collaboration —
             whether you are an artist, technology enthusiast 
             or another student organisation, please don’t hesitate to reach out!
          </p>
          <p>
            If you have any questions, or would like to contribute to the club, feel free to email us at 
            <a href="mailto:ddap@newschool.edu"> ddap@newschool.edu</a>! ꕤꕤꕤꕤꕤ
            <br />
          </p>
        </section>
        <section>
          {/* The schedule would be contained here as a React component */}
          <Schedule />
        </section>
        <section>
          <h2 className="section-title">Gallery</h2>
          <div>
            <Instagram />
          </div>
        </section>
        <section>
          <Arena />
        </section>
        <section>
          <h2 className="section-title">Leadership</h2>
          <div>
            <Team />
          </div>
          <div className="ig-link">
            <a
              className="ig-icon"
              href="https://www.instagram.com/digitaldesignatparsons/"
              target="_blank"
            >
              <img src="https://image-gosting.s3.amazonaws.com/ddap/ig.svg" />
            </a>
          </div>
        </section>

        <footer></footer>
      </main>
    </>
  );
}

export default App;
