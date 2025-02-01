import "./HomePage.css";
import githubIcon from "../../assets/github.png";
import linkedInIcon from "../../assets/linkedIn.jpeg";

function HomePage() {
  return (
    <>
      <div className="homepage_container">
        <div className="homepage_left">
          <p className="homepage_left_h1">
            <span className="red_color">Hi,</span> my name is
          </p>

          <p className="homepage_left_h2">Dheerendra Pratap Singh</p>

          <p className="homepage_left_h3">
            Aspiring web developer, eager learner.
          </p>

          <p className="homepage_left_description">
            I am a motivated fresher web developer with a strong foundation in
            HTML, CSS, and JavaScript. I have a keen interest in creating
            responsive, user-friendly websites and applications. Alongside my
            web development skills, I am proficient in Data Structures and
            Algorithms (DSA), which enhances my problem-solving abilities. I
            enjoy tackling complex coding challenges and continuously improving
            my code efficiency. My hands-on experience with projects has honed
            my analytical thinking and debugging skills. I am eager to
            contribute to a dynamic team, learn from experienced developers, and
            grow in the ever-evolving field of web development.
          </p>

          <div className="icon_container">
            <a href="https://github.com/Dheerendra69" target="_blank">
              <img
                src={githubIcon}
                alt="githubIconImage"
                className="homepage_logo"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/dheerendrapratapsingh12/"
              target="_blank"
            >
              <img
                src={linkedInIcon}
                alt="githubIconImage"
                className="homepage_logo"
              />
            </a>

            <a href="mailto:Dheerendra12216237@gmail.com">
              <button className="homepage_left_button">Get in Touch</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </>
  );
}

export default HomePage;
