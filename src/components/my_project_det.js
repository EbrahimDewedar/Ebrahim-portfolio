import movie_app from "../assets/movie_project.png";
import portfolio from "../assets/homepage.png";
import weather from "../assets/weather_app.png";
import book from "../assets/book_app.png";


const my_projects = [
  {
    id: 1,
    title: "Movies and Shows website",
    description:
      "A responsive web application that allows users to search, browse, and discover movies using real-time data from a movie API. Built with React.js, the app features a clean, user-friendly interface where users can view trending films, detailed movie information, and cover art.",
    Tools_Used: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
    github: "https://github.com/MOMEN186/movie_app",
    demo: "https://movie-app-nine-gold.vercel.app/",
    image: movie_app,
  },
  
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "This is a responsive and modern personal portfolio website built with React.js and Bootstrap. It showcases my work as a Full Stack Web Developer, including a Home page, About section, list of Services, a Portfolio of projects with detailed views, and a Contact section. The site supports both light and dark themes using React Context and is fully responsive across all devices. Users can explore my featured projects, view the technologies used, and access live demos or GitHub links. The Contact section provides my email, phone, location, and direct links to my GitHub and LinkedIn profiles. The portfolio is designed to be clean, fast, and easy to navigate.",
    Tools_Used: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
    github: "https://github.com/EbrahimDewedar/Ebrahim-portfolio",
    demo: "https://github.com/EbrahimDewedar/Ebrahim-portfolio",
    image: portfolio,
  },
  {
    id: 3,
    title: "Weather website",
    description:
      "A simple and responsive weather web app built with HTML, CSS, and Vanilla JavaScript. It fetches real-time weather data from a public API (like OpenWeatherMap) based on the user's city input. The UI displays temperature, weather conditions, and icons with clean styling and basic error handling.",
    Tools_Used: ["HTML5", "CSS3", "Bootstrap", "JavaScript"],
    github: "https://github.com/MOMEN186/weather_app",
    demo: "https://github.com/MOMEN186/weather_app",
    image: weather,
  },
  {
    id: 4,
    title: "Django Bookstore App",
    description:
      "a full-stack online bookstore web application built with Django. It allows users to browse a collection of books, view detailed descriptions, and manage a shopping cart. Admins can add, update, or delete books through a secure admin panel. The app features user authentication, clean navigation, and a responsive design for easy access on all devices. Ideal for learning Django models, views, templates, and CRUD operations in a real-world context.",
    Tools_Used: ["HTML5", "CSS3", "Bootstrap", "Python", "Django", "PostgreSQL"],
    github: "https://github.com/EbrahimDewedar/Django-Bookstore-App",
    demo: "https://github.com/EbrahimDewedar/Django-Bookstore-App",
    image: book,
  },
];

export default my_projects;
