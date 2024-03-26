import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Web Junior",
      company: "Entreprise ABC",
      date: "Janvier 2022 - Juillet 2022",
      description: "Travail sur divers projets web utilisant les technologies X, Y et Z.",
    },
    {
      id: 2,
      title: "Stagiaire Développeur Front-end",
      company: "Startup XYZ",
      date: "Mai 2021 - Août 2021",
      description: "Assistance à la création d'interfaces utilisateur réactives pour les applications web de l'entreprise.",
    },
    {
      id: 3,
      title: "Assistant en Informatique",
      company: "Université de ABC",
      date: "Septembre 2020 - Avril 2021",
      description: "Soutien technique aux étudiants et au personnel universitaire, gestion des systèmes informatiques.",
    },
  ];

  return (
    <div className="max-w-3xl px-4">
      <h2 className="font-medium text-xl mb-3">Expériences Professionnelles</h2>
      <div className="relative">
        <div className="absolute h-full w-px bg-gray-300 top-4 left-2/4 transform -translate-x-1/2"></div>
        {experiences.map((experience) => (
          <div key={experience.id} className="flex items-center mb-8">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">{experience.title}</h3>
              <p className="text-gray-600">{experience.company}</p>
              <p className="text-sm text-gray-500">{experience.date}</p>
              <p className="text-gray-700">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
