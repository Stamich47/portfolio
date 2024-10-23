export default function ProjectCard({ project }) {
  return (
    <div
      key={project.id}
      className="project-card bg-white shadow-sm rounded p-3 m-3"
    >
      <img
        src={project.image}
        alt={project.name}
        className="project-card-image"
      />
      <h3 className="project-card-title">{project.name}</h3>
      <p className="project-card-description fs-6">{project.description}</p>
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
          href={project.source}
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
