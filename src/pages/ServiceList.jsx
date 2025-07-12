// import my_services from "../components/my_service_det";
// import ServiceCard from "../components/ServiceCard";
// function Services() {
//   return (
//     <div>
//       <div className="row">
//         {my_services?.map((service) => (
//           <div className="col-sm-6 mb-3 mb-sm-0" key={service.id}>
//             <ServiceCard tocards={service} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default Services;


import my_services from "../components/my_service_det";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary fw-bold mb-4">Services</h2>
      <div className="row g-4">
        {my_services?.map((service) => (
          <div className="col-sm-6 col-md-4" key={service.id}>
            <ServiceCard tocards={service} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
