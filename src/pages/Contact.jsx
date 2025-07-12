import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Let's Connect</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow rounded-4 p-4">
            <ul className="list-unstyled mb-4">
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-3 text-primary fs-5" />
                <span className="text-muted">ebrahimadewedar@gmail.com</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhoneAlt className="me-3 text-primary fs-5" />
                <span className="text-muted">+20 120 796 9933</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-3 text-primary fs-5" />
                <span className="text-muted">Alexandria, Egypt</span>
              </li>
            </ul>

            <div className="d-flex flex-column gap-3">
              <a
                href="https://github.com/EbrahimDewedar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark d-flex align-items-center justify-content-center rounded-pill"
              >
                <FaGithub className="me-2" /> GitHub
              </a>

              <a
                href="https://linkedin.com/in/ebrahim-dewedar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary d-flex align-items-center justify-content-center rounded-pill"
              >
                <FaLinkedin className="me-2" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
