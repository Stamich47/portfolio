export default function ProjectCard({ project }) {
  return (
    <div key={project.id} className="project-card my-3">
      <img
        src={project.image}
        alt={project.name}
        className="project-card-image"
      />
      <h3 className="project-card-title">{project.name}</h3>
      <p className="project-card-description">{project.description}</p>
      <div className="project-card-buttons">
        <a
          href={project.location}
          target="_blank"
          rel="noreferrer"
          className="project-card-link"
        >
          View App
        </a>
        <a
          href={project.location}
          target="_blank"
          rel="noreferrer"
          className="project-card-link"
        >
          Source
        </a>
      </div>
    </div>
  );
}
