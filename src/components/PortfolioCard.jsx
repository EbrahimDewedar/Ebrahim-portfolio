import { Link } from "react-router";

function PortfolioCard({ tocards }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
      <img
        src={tocards?.image}
        className="card-img-top rounded-3 mb-3"
        alt={tocards?.title}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-info fw-semibold mb-2">
          {tocards?.title}
        </h5>
        {/* <p className="card-text text-muted flex-grow-1">
          {tocards?.description.slice(0, 100)}...
        </p> */}
        <Link
          to={`/portof/${tocards.id}`}
          className="btn btn-outline-info rounded-pill mt-3 align-self-start"
        >
          More Info →
        </Link>
      </div>
    </div>
  );
}

export default PortfolioCard;