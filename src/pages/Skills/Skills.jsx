import * as siIcons from "react-icons/si";
import * as tbIcons from "react-icons/tb";
import * as biIcons from "react-icons/bi";
import * as diIcons from "react-icons/di";
import skills from "../../assets/data/skills.json";

export default function Skills() {
  const Icons = {
    Si: siIcons,
    Tb: tbIcons,
    Bi: biIcons,
    Di: diIcons,
  };

  console.log(skills);
  return (
    <>
      <div className="skillContainer">
        <h2>SKILLS</h2>
        <ul>
          {skills?.map((skill) => {
            const Icon = Icons[skill.iconLib]?.[skill.icon];
            return (
              <li key={skill.name} className="flex items-center gap-1">
                <Icon className={`ml-2 text-[${skill.color}]`} /> {skill.name}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
