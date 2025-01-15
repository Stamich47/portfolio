export default function SkillsCard({ skill, isDarkMode }) {
  return (
    <div className="card-container">
      {isDarkMode ? (
        <div
          id="skill-card"
          className="d-flex justify-content-between align-items-center bg-dark shadow-sm rounded p-3 m-2"
        >
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.name}</h3>
        </div>
      ) : (
        <div
          id="skill-card"
          className="d-flex justify-content-between align-items-center bg-white shadow-sm rounded p-3 m-2"
        >
          <div className="skill-icon">{skill.icon}</div>
          <h3>{skill.name}</h3>
        </div>
      )}
    </div>
  );
}
