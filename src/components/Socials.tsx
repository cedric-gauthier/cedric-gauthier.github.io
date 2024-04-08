

const ExperienceTimeline = () => {
  const experiences = [
    {
      id: 1,
      title: "Stage n°2 développement web",
      company: "Etudes et solutions",
      date: "Janvier 2024 - Mars 2024",
      description: "Application sous framework Django Python.",
      description2: "Refonte et amélioration de la solution."
    },
    {
      id: 2,
      title: "Stage n°1 développement web",
      company: "Etudes et solutions",
      date: "Mai 2023 - Juin 2023",
      description: "Application sous framework Django Python.",
      description2: "Solution de récolte de données écologique et intelligente."
    },
  ];

  return (
    <div className="max-w-3xl px-4 ml-4">
      <h2 className="font-medium text-xl mb-3 underline underline-offset-4">Expériences Professionnelles</h2>
      <div className="flex items-center">
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
                <p className="text-gray-700 mt-2">{experience.description}</p>
                <p className="text-gray-700">{experience.description2}</p>
                <p className="text-gray-600 mt-2">{experience.company}</p>
                <p className="text-sm text-gray-500 mt-1 italic">{experience.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTimeline;
