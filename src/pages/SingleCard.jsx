// import { useParams } from "react-router";
// import services from "../components/my_service_det";
// import { Link } from "react-router";
// function SingleCard() {
//   const { id } = useParams();
//   const one_service = services.find((s) => s.id === parseInt(id));

//   return (
//     <div className="container d-flex justify-content-center align-items-center">
//       <div className="card" style={{width: "18rem"}}>
//         <img src={one_service.image} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{one_service.title}</h5>
//           <p className="card-text">
//             {one_service.description}
//           </p>
//         </div>
//         <ul className="list-group list-group-flush">
//             {one_service.examples.map((example)=>(
//                 <li className="list-group-item">{example}</li>
//             ))}
//         </ul>
//         <div className="card-body">
//           <Link to="/service" className="card-link">
//             Back to All Services
//           </Link>

//         </div>
//       </div>
//     </div>
//   );
// }
// export default SingleCard;



import { useParams } from "react-router";
import { Link } from "react-router";
import services from "../components/my_service_det";

function SingleCard() {
  const { id } = useParams();
  const one_service = services.find((s) => s.id === parseInt(id));

  if (!one_service) {
    return <div className="text-center mt-5 text-danger">Service not found.</div>;
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card shadow-sm border-0 rounded-4 overflow-hidden"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <img
          src={one_service.image}
          className="card-img-top"
          alt={one_service.title}
          style={{ height: "280px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h4 className="text-info fw-bold">{one_service.title}</h4>
          <p className="text-muted">{one_service.description}</p>
        </div>

        <ul className="list-group list-group-flush">
          {one_service.examples.map((example, idx) => (
            <li key={idx} className="list-group-item px-4 py-2">
              ✅ {example}
            </li>
          ))}
        </ul>

        <div className="card-body text-center">
          <Link
            to="/service"
            className="btn btn-outline-info rounded-pill px-4 py-2"
          >
            ← Back to Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
