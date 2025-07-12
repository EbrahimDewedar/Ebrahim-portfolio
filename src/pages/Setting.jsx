// import { useContext } from "react";
// import ThemeContext from "../context/theme";

// function Setting() {
//     const {theme, setTheme} = useContext(ThemeContext)
//   return (
//     <div>
//       <h3>setting</h3>
//       <hr />
//       <button onClick={()=> setTheme("light")} className="mx-2 btn btn-outline-warning">light</button>
//       <button onClick={()=> setTheme("dark")} className="mx-2 btn btn-outline-warning">dark</button>
//     </div>
//   );
// }
// export default Setting;

import { useContext } from "react";
import ThemeContext from "../context/theme";
import { FaSun, FaMoon, FaCog } from "react-icons/fa";

function Setting() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card border-0 shadow-sm rounded-4 p-4 w-100" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">
          <h3 className="text-info mb-3">
            <FaCog className="me-2" />
            Theme Settings
          </h3>

          <p className="text-muted">Select your preferred appearance</p>

          <div className={`badge bg-${theme === "dark" ? "dark" : "light"} text-${theme === "dark" ? "light" : "dark"} border px-3 py-2 mb-4`}>
            Current Mode: <strong className="ms-1 text-capitalize">{theme}</strong>
          </div>

          <div className="d-flex justify-content-center flex-wrap gap-3 mt-3">
            <button
              onClick={() => setTheme("light")}
              className={`btn btn-outline-info d-flex align-items-center rounded-pill px-4 py-2 ${theme === "light" ? "active shadow-sm" : ""}`}
            >
              <FaSun className="me-2" />
              Light Mode
            </button>

            <button
              onClick={() => setTheme("dark")}
              className={`btn btn-outline-info d-flex align-items-center rounded-pill px-4 py-2 ${theme === "dark" ? "active shadow-sm" : ""}`}
            >
              <FaMoon className="me-2" />
              Dark Mode
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting;
