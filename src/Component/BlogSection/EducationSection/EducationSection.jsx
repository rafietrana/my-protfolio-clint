 

const EducationSection = () => {
  const education = [
    {
      id: 1,
      degree: "SSC",
      year: "2022",
      institution: "Masua High School",
    },
    {
      id: 2,
      degree: "HSC",
      year: "2024",
      institution: "Dhaka College",
    },
    {
      id: 3,
      degree: "BSc in Computer Science",
      year: "2028",
      institution: "University of Dhaka",
    },
  ];

  return (
    <section className=" text-white py-10 px-5">
      <div className="container mx-auto">
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {education.map(edu => (
            <div key={edu.id} className="bg-gray-800 rounded-lg p-5 shadow-lg transform transition-transform hover:-translate-y-2">
              <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
              <p className="text-gray-400 mb-1">{edu.year}</p>
              <p className="text-gray-400">{edu.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
