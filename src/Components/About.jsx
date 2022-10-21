import "./About.css";

const About = () => {
  return (
    <section className="aboutSection">
      <div className="aboutName">
        <h1>Christopher</h1>
        <h1>Robin</h1>
        <h1>Rule</h1>
      </div>
      <section className="aboutAll">
        <section className="aboutText head">
          <h3>Page &gt; About</h3>
          <p>Hello there! I'm Chris, nice to meet you.</p>
          <p>
            It feels a little strange to make a website about yourself, but I
            feel I've built up a lot of skills over the years and I'm excited to
            build a place to put them under one roof.
          </p>
        </section>
        <section className="aboutInfoboxes">
          <section className="aboutText engineer first">
            <h3>Page &gt; Engineer</h3>
            <p>
              I'm a little bit obsessed with how things work, and I love
              breaking down a challenge so I can solve a piece at a time.
            </p>
            <h4>Projects</h4>
            <ul>
              <li>Air Traffic Control Towers</li>
              <li>Schools</li>
              <li>Nuclear Power Stations</li>
              <li>Form Generation</li>
              <li>Forex Trading Robots</li>
              <li>Mass Data Validation</li>
              <li>Hostile Vehicle Mitigation</li>
            </ul>
          </section>
          <section className="aboutText developer second">
            <h3>Page &gt; Front End Developer</h3>
            <p>
              With over a decade of experience in generating complex three
              dimensional models to produce and present technical drawings, I
              have a real appreciation for the importance of clean, readable
              layouts and user friendly tools.
            </p>
            <h4>Tools</h4>
            <ul>
              <li>Javascript</li>
              <li>ThreeJS</li>
              <li>Python</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
              <li>Express</li>
              <li>Node.js</li>
            </ul>
          </section>
          <section className="aboutText Mentor third">
            <h3>Page &gt; Mentor / Mentee</h3>
            <p>
              I believe mentorship works both ways, and I value building
              networks of mutual support with people who have a passion for
              their craft.
            </p>
            <h4>Contributions</h4>
            <ul>
              <li>Technology Presentations</li>
              <li>Excel Training</li>
              <li>Apprentices</li>
              <li>STEM Ambassadorship</li>
              <li>Coding Content Creation</li>
              <li>Mentor Sessions</li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default About;
