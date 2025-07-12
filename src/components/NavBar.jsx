// import { useContext } from "react";
// import { Link } from "react-router";
// import ThemeContext from "../context/theme";

// function NavBar() {
//   const { theme, setTheme } = useContext(ThemeContext);
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  
//       <div className="container-fluid py-3 shadow-sm 	bg-light">
//         <Link className="navbar-brand fw-bold text-dark" to="/">
//           Home
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarText"
//           aria-controls="navbarText"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarText">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link
//                 className="nav-link mx-2 active"
//                 aria-current="page"
//                 to="/about"
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link mx-2 active"
//                 aria-current="page"
//                 to="/service"
//               >
//                 Services
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/portof">
//                 Portfolio
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link mx-2" to="/sets">
//                 Setting
//               </Link>
//             </li>
//           </ul>
//           <span className="navbar-text ms-auto text-muted">
//             Mode : <strong>{theme}</strong>
//           </span>
//         </div>
//       </div>
//     </nav>
//   );
// }
// export default NavBar;


import { useContext } from "react";
import { Link } from "react-router"; 
import ThemeContext from "../context/theme";
import { FaMoon, FaSun } from "react-icons/fa";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`navbar navbar-expand-lg shadow-sm ${
        theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Ebrahim Dewedar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/service", label: "Services" },
              { to: "/portof", label: "Portfolio" },
              { to: "/contact", label: "Contact" },
              { to: "/sets", label: "Setting" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link className="nav-link" to={item.to}>
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="btn btn-sm btn-outline-info ms-lg-2 d-flex align-items-center"
                title="Toggle Theme"
              >
                {theme === "light" ? <FaMoon /> : <FaSun />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
