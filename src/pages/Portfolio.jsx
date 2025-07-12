
import my_projects from "../components/my_project_det";
import PortfolioCard from "../components/PortfolioCard";

function Portfolio() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">My Projects</h2>
      <div className="row g-4">
        {my_projects?.map((project) => (
          <div className="col-sm-6 col-md-4" key={project.id}>
            <PortfolioCard tocards={project} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;