import { Simple } from "./icons";
import { cn } from "./ui/utils.ts";
import { FaMusic, FaGamepad, FaMicrochip } from "react-icons/fa";

const socials = [
  {
    href: "https://github.com/cedric-gauthier",
    name: "GitHub",
    icon: Simple.IconGitHub,
    bgColor: "var(--neutral-2)", // Couleur de fond pour GitHub
    iconColor: "text-primary-9" // Couleur de l'icône pour GitHub
  },
];

export default () => {
  return (
    <div className="flex flex-col items-start gap-6 lg:gap-8 px-3 lg:px-6 py-4" style={{ backgroundColor: 'var(--neutral-1)' }}>
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-4">
          <div
            className="w-24 h-24 lg:w-32 lg:h-32 bg-neutral-2 hover:bg-neutral-3 border border-neutral-4 hover:border-neutral-6 rounded-full overflow-hidden"
            style={{
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" // Ajout d'une ombre
            }}
          >
            <img
              src="/img/pdp.png"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start gap-2 ml-2">
            <h1 className="font-medium text-lg lg:text-3xl">GAUTHIER Cédric</h1>
            <h2 className="font-medium text-2xl lg:text-xl">Futur développeur web</h2>
          </div>
        </div>

        <ul className="flex items-center justify-end gap-3 p-1">
          {socials.map((social) => {
            return (
              <li key={social.name}>
                <a
                  href={social.href}
                  className={cn(
                    "group",
                    "flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20",
                    "outline-none rounded-3xl",
                    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
                  )}
                  target="_blank"
                  aria-label="Open"
                  style={{
                    backgroundColor: social.bgColor,
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" // Ajout d'une ombre
                  }}
                >
                  <social.icon className="transition size-1/3 text-neutral-6 group-hover:text-primary-9 group-hover:scale-110 group-focus-visible:text-primary-9 group-focus-visible:scale-110" style={{ color: social.iconColor }} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-3">
        <p>23 ans.<br />
          Actuellement en 2nde année de BTS SIO, je souhaite poursuivre mes études dans le développement web.<br />
          Je souhaiterai également gagner en compétences au niveau cybersécurité / réseau.
        </p>
      </div >
      <h2 className="font-medium text-xl ml-1 underline underline-offset-4">Passions</h2>
      {/* Ajout des cercles pour les passions avec les icônes */}
      <div className="flex justify-center gap-4">
        {/* Cercle pour les jeux vidéo */}
        <div className="w-16 h-16 bg-accent-1 flex items-center justify-center rounded-full shadow-lg">
          <FaGamepad className="text-2xl text-neutral-6" />
        </div>

        {/* Cercle pour la technologie */}
        <div className="w-16 h-16 bg-accent-1 flex items-center justify-center rounded-full shadow-lg">
          <FaMicrochip className="text-2xl text-neutral-6" />
        </div>

        {/* Cercle pour la musique */}
        <div className="w-16 h-16 bg-accent-1 flex items-center justify-center rounded-full shadow-lg">
          <FaMusic className="text-2xl text-neutral-6" />
        </div>
      </div>
      <div className="mt-4 text-xl font-medium">
          <a href="/img/CV_Cedric_GAUTHIER.pdf" target="_blank" rel="noopener noreferrer">
            <button>Voir mon CV</button>
          </a>
        </div>
    </div>
  );
};