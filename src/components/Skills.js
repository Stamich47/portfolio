import SkillsCard from "./SkillsCard";
import { IconContext } from "react-icons";
import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoCss3,
  IoLogoHtml5,
} from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  {
    name: "React",
    icon: <IoLogoReact />,
  },
  {
    name: "Node.js",
    icon: <IoLogoNodejs />,
  },
  {
    name: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    name: "HTML5",
    icon: <IoLogoHtml5 />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },

  {
    name: "Next.js",
    icon: <RiNextjsLine />,
  },
];

export default function Skills() {
  return (
    <IconContext.Provider value={{ size: "3em" }}>
      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))}
        </div>
      </section>
    </IconContext.Provider>
  );
}
