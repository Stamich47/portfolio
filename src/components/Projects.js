import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "WeatherLens",
      description:
        "A weather app that shows the current weather, a weather map and the hourly/extended forecast.",
      image: require("../images/weatherLens_dark.png"),
      location: "https://app-weatherlens.netlify.app/",
      source: "https://github.com/Stamich47/WeatherLens",
    },
    {
      id: 7,
      name: "BiteSized - Recipe App",
      description:
        "A recipe app that allows users to search for recipes and save them.",
      image: require("../images/BiteSizedNew_cover.png"),
      location: "https://bitesizedapp.netlify.app/",
      source: "https://github.com/Stamich47/recipe-app",
    },
    {
      id: 2,
      name: "BookBuddy",
      description:
        "A book list app that allows users to add, edit, and delete books.",
      image: require("../images/bookbuddy.png"),
      location: "https://bookbuddyapp.netlify.app/",
      source: "https://github.com/Stamich47/book-list",
    },
    {
      id: 3,
      name: "Flixx - Movie App",
      description:
        "A movie app that shows movies & tv shows along with details and ratings.",
      image: require("../images/flixxapp.png"),
      location: "https://flixxapp.netlify.app/",
      source: "https://github.com/Stamich47/flixx-app",
    },
    {
      id: 4,
      name: "Speech To Text App",
      description: "A speech to text app that converts speech to text.",
      image: require("../images/speechapp.png"),
      location: "https://talk-text-app.netlify.app/",
      source: "https://github.com/Stamich47/speech-app",
    },
    {
      id: 5,
      name: "Client Portfolio Site",
      description:
        "A sample portfolio site for a client that showcases their work and skills.",
      image: require("../images/brand_logo.png"),
      location: "https://sample-portfolio3.netlify.app/",
      source: "https://github.com/Stamich47/client-portfolio",
    },
    {
      id: 6,
      name: "Rock, Paper, Scissors Game",
      description:
        "A rock, paper, scissors game that allows users to play against the CPU.",
      image: require("../images/rps.png"),
      location: "https://rps-2024.netlify.app/",
      source: "https://github.com/Stamich47/rock-paper-scissors",
    },
  ];

  return (
    <div id="projects" className="projects py-5">
      <h2 className="pb-5 text-center">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
