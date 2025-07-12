// import ProgressBar from "react-bootstrap/ProgressBar";
// function About() {
//   return (
//     <div className="container text-center">
//         <div className="my-3">
//              <h1> About</h1>
//         </div>
//       <div className="row">
//         <div className="col-2">
//           <img
//             src="./src/assets/MyPic.png"
//             style={{ width: "auto", height: "500px" }}
//             alt=""
//           />{" "}
//         </div>
//         <div className="col-10">
//           <div className="container text-center">
//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >HTML5 & CSS3 </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={80} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >Python (OOP) </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={90} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >PostgreSQL </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={88} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >Linux </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={75} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >Django </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={90} />
//               </div>
//             </div>
//             <div className="row my-4">
//               <div className="col-5">
//                 <h3 >React </h3>
//               </div>
//               <div className="col-7">
//                 <ProgressBar striped variant="warning" now={90} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container text-center border border-light mx-2 my-4">
//         <div className="row text-warning justify-content-center ">
//           <div className="col-3">
//             <h2>+2</h2>
//             <h4>Years OfExperience</h4>
//           </div>
//           <div className="vr col-1" style={{ height: "100px" }}>
            
//           </div>

//           <div className="col-3">
//             <h2>+20</h2>
//             <h4>project</h4>
//           </div>
//           <div className="vr col-1" style={{ height: "100px" }}>
            
//           </div>

//           <div className="col-3">
//             <h2>+15</h2>
//             <h4>Certificates</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default About;


import { useContext } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import ThemeContext from "../context/theme";
import myPic from "../assets/MyNewPic.PNG";

function About() {
  const { theme } = useContext(ThemeContext);

  const skills = [
    { label: "HTML5 & CSS3", level: 80 },
    { label: "Python (OOP)", level: 90 },
    { label: "PostgreSQL", level: 88 },
    { label: "Linux", level: 75 },
    { label: "Django", level: 90 },
    { label: "React", level: 90 },
  ];

  return (
    <div className={`container py-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <div className="text-center mb-4">
        <h1 className="fw-bold text-primary">About Me</h1>
        <p className="text-muted">My background and technical stack</p>
      </div>

      <div className="row g-4 align-items-center mb-5">
        <div className="col-md-4 text-center">
          <img
            src={myPic}
            alt="Ebrahim Dewedar"
            className="img-fluid rounded shadow-sm"
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-8">
          {skills.map((skill, i) => (
            <div className="mb-3" key={i}>
              <div className="d-flex justify-content-between">
                <span>{skill.label}</span>
                {/* <small>{skill.level}%</small> */}
              </div>
              <ProgressBar now={skill.level} variant="info" style={{ height: "10px" }} />
            </div>
          ))}
        </div>
      </div>

      <div className="row text-center text-primary">
        <div className="col-6 col-md-4 mb-3">
          <h3 className="fw-bold">2+</h3>
          <p className="mb-0">Years Experience</p>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <h3 className="fw-bold">20+</h3>
          <p className="mb-0">Projects</p>
        </div>
        <div className="col-6 col-md-4 mb-3">
          <h3 className="fw-bold">15+</h3>
          <p className="mb-0">Certificates</p>
        </div>
      </div>
    </div>
  );
}

export default About;
