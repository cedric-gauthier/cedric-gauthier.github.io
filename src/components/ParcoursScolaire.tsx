import React from "react";

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "BTS Services informatiques aux organisations",
      company: "Option B solutions logicielles et applications métiers",
      date: "Lycée Bonaparte",
      description: "2022 - 2024",
    },
    {
      id: 2,
      title: "Licence informatique",
      company: "L1 Option informatique",
      date: "Université de La Garde",
      description: "2021 - 2022",
    },
    {
      id: 3,
      title: "Baccaulauréat Scientifique",
      company: "",
      date: "Lycée Bonaparte",
      description: "2020",
    },
  ];

  return (
    <div className="max-w-3xl px-4 ml-4">
      <h2 className="font-medium text-xl mb-3 underline underline-offset-4">Parcours scolaire</h2>
      <div className="relative">
        <div className="absolute h-full w-px bg-gray-300 top-4 left-2/4 transform -translate-x-1/2"></div>
        {experiences.map((experience) => (
          <div key={experience.id} className="flex items-center mb-8 mx-auto">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">{experience.title}</h3>
              <p className="text-gray-700 mt-1">{experience.company}</p>
              <p className="text-gray-600 mt-1">{experience.date}</p>
              <p className="text-sm text-gray-500 mt-1 italic">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
