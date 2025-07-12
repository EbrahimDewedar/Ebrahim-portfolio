// import { useState } from "react";
// import { Link } from "react-router";
// function ServiceCard(props) {
//   const { tocards } = props;
//   return (
//     <div className="card">
//       <div className="card-body">
//         <h5 className="card-title">{tocards?.title}</h5>
//         <p className="card-text">
//           {tocards?.description}
//         </p>
//         <Link to={`/scard/${tocards.id}`} className="btn btn-warning">
//           More Info
//         </Link>
//       </div>
//     </div>
//   );
// }
// export default ServiceCard;


import { Link } from "react-router"; 

function ServiceCard({ tocards }) {
  return (
    <div className="card h-100 shadow-sm border-0 rounded-4 p-3">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-info fw-semibold mb-2">
          {tocards?.title}
        </h5>
        <p className="card-text text-muted flex-grow-1">
          {tocards?.description}
        </p>
        <Link
          to={`/scard/${tocards.id}`}
          className="btn btn-outline-info rounded-pill mt-3 align-self-start"
        >
          More Info →
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
