import { IconButton } from "./ui";
import { cn } from "./ui/utils.ts";
import { Lucide } from "./icons";
import { FaSailboat } from "react-icons/fa6";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

const projects = [
  {
    title: "Nolark",
    description: "Site web html/css",
    icon: GiFullMotorcycleHelmet,
    url: "https://github.com/flamrdevs/astrolinkt",
  },
  {
    title: "Navire",
    description: "Application c#",
    icon: FaSailboat,
    url: "https://github.com/flamrdevs/astrovehnt",
  },
];

export default () => {
  return (
    <div className="max-w-3xl px-4">
      <h2 className="font-medium text-xl mb-3">Projets</h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          return (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="group/icon" key={project.title}>
              <li
                className={cn(
                  "group",
                  "flex items-center justify-between px-4 py-3",
                  "bg-accent-1 hover:bg-accent-2",
                  "shadow-lg rounded-3xl",
                  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent-7 focus-visible:ring-offset-accent-1"
                )}
              >
                <div className="flex flex-row items-stretch gap-5 pl-2">
                  <div className="flex items-center justify-center">
                    <project.icon
                      size={24}
                      className="transition duration-300 group-hover:-translate-y-1 text-neutral-0 group-hover:text-primary-9"
                    />
                  </div>

                  <div>
                    <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-0 text-sm group-hover:text-primary-9">{project.title}</h3>
                    <div className="transition duration-300 group-hover:translate-x-px text-neutral-0 group-hover:text-primary-8 text-xs">
                      {project.description}
                    </div>
                  </div>
                </div>

                <button className="flex items-center justify-center w-10 h-10 bg-accent-1 hover:bg-accent-2 rounded-full">
                  <Lucide.IconExternalLink
                    aria-label="Open"
                    className="transition text-neutral-0 group-hover:text-primary-9 group-focus-visible/icon:text-primary-11"
                  />
                </button>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
};
