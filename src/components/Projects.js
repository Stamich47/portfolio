import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "WeatherLens",
      description:
        "A weather app that shows the current weather, a weather map and the hourly/extended forecast. Made with React.",
      image: require("../images/weatherLens_dark.png"),
      location: "https://app-weatherlens.netlify.app/",
      source: "https://github.com/Stamich47/WeatherLens",
    },
    {
      id: 2,
      name: "BookBuddy",
      description:
        "A book list app that allows users to add, edit, and delete books. Made with React.",
      image: require("../images/bookbuddy.png"),
      location: "https://bookbuddyapp.netlify.app/",
      source: "https://github.com/Stamich47/book-list",
    },
    {
      id: 3,
      name: "Flixx - Movie App",
      description:
        "A movie app that shows movies & tv shows along with details and ratings. Made in vanilla JS.",
      image: require("../images/flixxapp.png"),
      location: "https://flixxapp.netlify.app/",
      source: "",
    },
    {
      id: 4,
      name: "Speech To Text App",
      description:
        "A speech to text app that converts speech to text. Made with vanilla JS.",
      image: require("../images/speechapp.png"),
      location: "https://talk-text-app.netlify.app/",
    },
    {
      id: 5,
      name: "Squirrel Stuff, Inc.",
      description:
        "A simple site for a fictional company that sells squirrel stuff. Made with HTML & CSS.",
      image: require("../images/squirrel.png"),
      location: "https://squirrelstuff.netlify.app/",
    },
    {
      id: 6,
      name: "Rock, Paper, Scissors Game",
      description:
        "A rock, paper, scissors game that allows users to play against the computer. Made with vanilla JS.",
      image: require("../images/rps.png"),
      location: "https://rps-2024.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="projects my-5">
      <h2 className="my-5 text-center">Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
