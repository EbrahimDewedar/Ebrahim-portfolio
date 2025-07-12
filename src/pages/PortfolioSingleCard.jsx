import { useParams } from "react-router";
import { Link } from "react-router";
import my_projects from "../components/my_project_det.js";

function PortfolioSingleCard() {
  const { id } = useParams();
  const one_project = my_projects.find((p) => p.id === parseInt(id));

  if (!one_project) {
    return <div className="text-center mt-5 text-danger">Project not found.</div>;
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card shadow-sm border-0 rounded-4 overflow-hidden"
        style={{ maxWidth: "700px", width: "100%" }}
      >
        <img
          src={one_project.image}
          className="card-img-top"
          alt={one_project.title}
          style={{ height: "300px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h4 className="text-info fw-bold">{one_project.title}</h4>
          <p className="text-muted mb-3">{one_project.description}</p>

          <div className="mb-3">
            <strong>Tools Used:</strong>
            <ul className="list-inline mt-2">
              {one_project.Tools_Used?.map((tool, i) => (
                <li className="list-inline-item badge bg-secondary me-2" key={i}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          <div className="d-flex gap-3">
            <a
              href={one_project.github}
              className="btn btn-outline-dark rounded-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={one_project.demo}
              className="btn btn-info text-light rounded-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </div>

        <div className="card-body text-center">
          <Link
            to="/portof"
            className="btn btn-outline-info rounded-pill px-4 py-2"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSingleCard;