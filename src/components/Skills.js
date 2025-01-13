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
import { SiTypescript } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <IoLogoJavascript />,
  },
  { name: "TypeScript", icon: <SiTypescript /> },
  {
    name: "CSS",
    icon: <IoLogoCss3 />,
  },
  {
    name: "HTML5",
    icon: <IoLogoHtml5 />,
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
    name: "Git",
    icon: <FaGitAlt />,
  },

  {
    name: "Next.js",
    icon: <RiNextjsLine />,
  },
];

export default function Skills({ isDarkMode }) {
  return (
    <IconContext.Provider value={{ size: "2em" }}>
      <section id="skills" className="py-5">
        <h2 className="pb-5">Skills</h2>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillsCard isDarkMode={isDarkMode} key={index} skill={skill} />
          ))}
        </div>
      </section>
    </IconContext.Provider>
  );
}
