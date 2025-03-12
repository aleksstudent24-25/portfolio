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
    <section
      id="skills"
      className="flex justify-center items center bg-gradient-to-bl from-fuchsia-300 via-blue-300 to-blue-300"
    >
      <div className="skillContainer p-5 text-center font-outfit">
        <h1 className="text-[32px] font-extrabold text-gray-200 title tracking-wide p-10">
          SKILLS
        </h1>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills?.map((skill) => {
            const Icon = Icons[skill.iconLib]?.[skill.icon];
            return (
              <a key={skill.name} href={skill.url} target="_blank">
                <li className="flex m-2 items-center gap-1 border-2 border-gray-100 bg-gray-800 hover:bg-gray-700 hover:cursor-pointer text-gray-100 p-5 place-content-center rounded-2xl">
                  <Icon className={`${skill.color}`} /> {skill.name}
                </li>
              </a>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
