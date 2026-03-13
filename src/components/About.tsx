import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Computer Engineering student at Pandit Deendayal Energy University
          with a strong interest in full-stack web development and backend systems.
          I enjoy building scalable web applications and solving complex problems
          using modern technologies. My experience includes developing projects such
          as an Agricultural Farm Management Platform, an Online Education Platform,
          and a Logistics Management System using technologies like ReactJS, Node.js,
          ExpressJS, MongoDB, and MySQL.
        </p>
        <div className="about-skills">
          <h4>Technical Skills</h4>
          <ul>
            <li>Programming: C++, C, JavaScript</li>
            <li>Frontend: ReactJS, HTML5, CSS3, TypeScript</li>
            <li>Backend: Node.js, ExpressJS, MongoDB, MySQL</li>
            <li>Tools: VS Code, GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
