// function Home() {
//   return (
//     <div className="container text-center mt-4">
//       <img
//         src="./src/assets/MyMinPic.JPG"
//         className="rounded-circle mb-3"
//         alt="..."
//         style={{ width: "200px", height: "200px" }}
//       />
//       <h1 className="mb-2">Ebrahim Dewedar, a Full Stack Web Developer</h1>
//       <h3>
//         I’m Ebrahim Dewedar, a Cairo-based Full Stack Web Developer (Python)
//         specializing in Django and React.
//       </h3>

//       <div
//         className="btn-group justify-content-center"
//         role="group"
//         aria-label="Basic mixed styles example"
//         style={{ width: "auto", height: "60px" }}
//       >
//         <button type="button" className="btn text-light rounded-pill mx-3 btn-info">
//           Contact Me
//         </button>

//         <button
//           type="button"
//           className="btn bg-light text-info rounded-pill mx-3 btn-info"
//         >
//           My Resume
//         </button>
//       </div>
//     </div>
//   );
// }
// export default Home;

import { FaEnvelope, FaFileAlt } from "react-icons/fa";
import myPic from "../assets/MyMinPic.JPG";

function Home() {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center w-100" style={{ maxWidth: "600px" }}>
        <img
          src={myPic}
          alt="Ebrahim Dewedar"
          className="rounded-circle mb-4 shadow-sm border border-3 border-info"
          style={{ width: "160px", height: "160px", objectFit: "cover" }}
        />

        <h1 className="fw-bold text-info mb-2">Ebrahim Dewedar</h1>
        <p className="text-muted mb-3">Full Stack Web Developer – Django & React</p>

        <p className="text-secondary px-2">
          Building clean, responsive, and scalable web applications using Python, Django, React, and PostgreSQL.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3 mt-4">
          <a
            href="/contact"
            className="btn btn-info text-light rounded-pill d-flex align-items-center px-4 py-2"
          >
            <FaEnvelope className="me-2" />
            Contact Me
          </a>

          <a
            href="https://drive.google.com/file/d/11KI2pgVkdeoOr5tX5J66R5RpniWfyz74/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info rounded-pill d-flex align-items-center px-4 py-2"
          >
            <FaFileAlt className="me-2" />
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
