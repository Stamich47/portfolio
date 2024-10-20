export default function Projects() {
  const projects = [
    {
      id: 1,
      name: "WeatherLens - Weather App",
      description:
        "A weather app that shows the current weather, a weather map and the hourly/extended forecast. Made with React.",
      location: "https://app-weatherlens.netlify.app/",
    },
    {
      id: 2,
      name: "BookBuddy - Book list App",
      description:
        "A book list app that allows users to add, edit, and delete books. Made with React.",
      location: "https://bookbuddyapp.netlify.app/",
    },
    {
      id: 3,
      name: "Flixx - Movie App",
      description:
        "A movie app that shows movies & tv shows along with details and ratings. Made in vanilla JS.",
      location: "https://flixxapp.netlify.app/",
    },
    {
      id: 4,
      name: "Speech To Text App",
      description:
        "A speech to text app that converts speech to text. Made with vanilla JS.",
      location: "https://talk-text-app.netlify.app/",
    },
    {
      id: 5,
      name: "Squirrel Stuff, Inc. A simple site.",
      description:
        "A simple site for a fictional company that sells squirrel stuff. Made with HTML & CSS.",
      location: "https://squirrelstuff.netlify.app/",
    },
    {
      id: 6,
      name: "Rock, Paper, Scissors Game",
      description:
        "A rock, paper, scissors game that allows users to play against the computer. Made with vanilla JS.",
      location: "https://rps-2024.netlify.app/",
    },
  ];

  return (
    <div id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.location} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
