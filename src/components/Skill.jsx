const Skill = () => {
  return (
    <>
      <div className="skill" style={{ fontSize: "22px" }}>
        <div>
          <h1>Skills</h1>
          <p>
            I am a skilled Full Stack Web Developer with strong proficiency in
            Python and JavaScript, experienced in building responsive and
            scalable web applications using frameworks like React, Django, and
            Flask. I have hands-on experience with RESTful APIs, database
            systems such as PostgreSQL and MongoDB, and tools like Git, Docker,
            and the Linux command line. My knowledge also includes front-end
            technologies like HTML, CSS, Tailwind, and Bootstrap, as well as
            basic networking and cybersecurity concepts. I’m passionate about
            clean code, team collaboration, and continuous learning.
          </p>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <h3>My Focus</h3>
            <ul style={{ listStyleType: "none", textAlign: "center" }}>
              <li>Full Stack Web Development </li>
              <li>Python Programming </li>
              <li> API Development & Integration</li>
              <li> Version Control & Collaboration </li>
            </ul>
          </div>
          <div style={{ width: "50%", fontSize: "30px" }}>
            <div>
              <label htmlFor="html">HTML</label>
              <progress id="html" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="javascript">JAVASCRIPT</label>
              <progress id="javascript" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="css">CSS</label>
              <progress id="css" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="react">react</label>
              <progress id="react" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="adobeXD">adobeXD</label>
              <progress id="adobeXD" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="NodeJS">NodeJS</label>
              <progress id="NodeJS" value={30} max={100}></progress>
            </div>
            <div>
              <label htmlFor="WordPress">WordPress</label>
              <progress id="WordPress" value={30} max={100}></progress>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Skill;
