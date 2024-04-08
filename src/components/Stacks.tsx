

// Définir les données des différentes compétences avec leur niveau de compétence
const stacks = [
  {
    name: "HTML",
    category: "Langage de balisage",
    level: 90,
    icon: "/img/html-5.png",
  },
  {
    name: "CSS",
    category: "Langage de style",
    level: 80,
    icon: "/img/css-3.png",
  },
  {
    name: "PHP",
    category: "Langage de programmation",
    level: 75,
    icon: "/img/php.png", // Ajoutez le chemin de l'icône PHP
  },
  {
    name: "JavaScript",
    category: "Langage de programmation",
    level: 50,
    icon: "/img/js.png", // Ajoutez le chemin de l'icône JavaScript
  },
  {
    name: "C#",
    category: "Langage de programmation",
    level: 70,
    icon: "/img/c.png", // Ajoutez le chemin de l'icône C#
  },
  {
    name: "Python",
    category: "Langage de programmation",
    level: 85,
    icon: "/img/python.png", // Ajoutez le chemin de l'icône Python
  },
  {
    name: "Symfony",
    category: "Framework PHP",
    level: 65,
    icon: "/img/symfony.png", // Ajoutez le chemin de l'icône Symfony
  },
  {
    name: "Django",
    category: "Framework Python",
    level: 70,
    icon: "/img/django.png", // Ajoutez le chemin de l'icône Django
  },
  {
    name: "MySQL/MariaDB",
    category: "Système de gestion de base de données",
    level: 75,
    icon: "/img/mysql.png", // Ajoutez le chemin de l'icône MySQL/MariaDB
  },
  {
    name: "Oracle",
    category: "Système de gestion de base de données",
    level: 60,
    icon: "/img/oracle.png", // Ajoutez le chemin de l'icône Oracle
  },
];

const langages = stacks.filter(stack => stack.category === "Langage de programmation" || stack.category === "Langage de balisage" || stack.category === "Langage de style");
const frameworks = stacks.filter(stack => stack.category.includes("Framework"));
const databases = stacks.filter(stack => stack.category.includes("Système de gestion de base de données"));


// Composant fonctionnel pour afficher les compétences avec des barres de compétences
export default () => {
  return (
    <div className="max-w-3xl px-4">
      <h2 className="font-medium text-xl mb-6 underline underline-offset-4">Compétences</h2>
      {/* Section des langages */}
      <div className="mb-6">
        <h3 className="font-medium text-xl mb-3">Langages</h3>
        <ul className="grid grid-cols-1 gap-3 p-1">
          {/* Affichage des compétences de langage */}
          {langages.map((stack, index) => (
            <li key={index} className="flex items-center justify-between mb-3">
              {/* Icône de compétence */}
              <div className="flex items-center gap-3">
                {stack.icon && (
                  <div className="w-14 h-14 overflow-hidden">
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-black">{stack.name}</h3> {/* Nom de compétence en noir */}
                  <p className="text-sm text-neutral-7">{stack.category}</p>
                </div>
              </div>
              {/* Barre de compétence */}
              <div className="flex items-center gap-3">
                <span className="text-black">{stack.level}%</span>
                <div className="relative h-3 w-40 bg-neutral-4 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary-9 rounded-full"
                    style={{ width: `${stack.level}%` }} // Ajustement de la largeur en fonction du niveau de compétence
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section des frameworks */}
      <div className="mb-6">
        <h2 className="font-medium text-xl mb-3">Frameworks</h2>
        <ul className="grid grid-cols-1 gap-3 p-1">
          {/* Affichage des compétences de framework */}
          {frameworks.map((stack, index) => (
            <li key={index} className="flex items-center justify-between mb-3">
              {/* Icône de compétence */}
              <div className="flex items-center gap-3">
                {stack.icon && (
                  <div className="w-14 h-14 overflow-hidden">
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-black">{stack.name}</h3> {/* Nom de compétence en noir */}
                  <p className="text-sm text-neutral-7">{stack.category}</p>
                </div>
              </div>
              {/* Barre de compétence */}
              <div className="flex items-center gap-3">
                <span className="text-black">{stack.level}%</span>
                <div className="relative h-3 w-40 bg-neutral-4 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary-9 rounded-full"
                    style={{ width: `${stack.level}%` }} // Ajustement de la largeur en fonction du niveau de compétence
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Section des bases de données */}
      <div>
        <h2 className="font-medium text-xl mb-3">Bases de données</h2>
        <ul className="grid grid-cols-1 gap-3 p-1">
          {/* Affichage des compétences de base de données */}
          {databases.map((stack, index) => (
            <li key={index} className="flex items-center justify-between mb-3">
              {/* Icône de compétence */}
              <div className="flex items-center gap-3">
                {stack.icon && (
                  <div className="w-14 h-14 overflow-hidden">
                    <img
                      src={stack.icon}
                      alt={stack.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                )}
                <div>
                  <h3 className="text-black">{stack.name}</h3> {/* Nom de compétence en noir */}
                  <p className="text-sm text-neutral-7">{stack.category}</p>
                </div>
              </div>
              {/* Barre de compétence */}
              <div className="flex items-center gap-3">
                <span className="text-black">{stack.level}%</span>
                <div className="relative h-3 w-40 bg-neutral-4 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-primary-9 rounded-full"
                    style={{ width: `${stack.level}%` }} // Ajustement de la largeur en fonction du niveau de compétence
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

