import { useContext } from "react";
import ThemeContext from "../context/theme";
import { Link } from "react-router";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-4 mt-5 ${theme === "dark" ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <div className="container">
        <div className="row g-4">

          {/* Contact Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">GET IN TOUCH</h5>
            <p className="mb-1">dewedarrebrahim998@gmail.com</p>
            <p className="mb-0">+20 120 796 9933</p>
          </div>

          {/* Contact Me Button */}
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <Link to="/contact" className="btn btn-outline-info">Contact Me</Link>
          </div>

          {/* Social + Copyright */}
          <div className="col-md-4 text-md-end text-center">
            <img src="linked.svg" alt="LinkedIn" width="24" height="24" />
            <p className="mt-2 mb-0">&copy; 2024 Ebrahim Dewedar</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
