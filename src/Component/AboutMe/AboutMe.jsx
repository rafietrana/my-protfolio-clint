 

const AboutMe = () => {
  return (
    <div className="min-h-screen flex flex-col items-center p-4 text-white">
      <div className="bg-gray-900 shadow-md rounded-lg p-6 max-w-4xl w-full mt-10">
        <div className="flex flex-col md:flex-row md:items-center">
          <img
            src="https://i.ibb.co/nDbgCPm/Untitled-design.png" 
            alt="Profile Picture"
            className="w-32 h-32 rounded-full mx-auto md:mx-0 md:mr-6"
          />
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">Rafiet Rana</h1>
            <p className="text-gray-400">Front End Developer</p>
            <div className="mt-4 flex justify-center md:justify-start">
              <a
                href="https://github.com/yourprofile"
                className="text-gray-400 hover:text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-gray-400 hover:text-white mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
          <p className="text-gray-400 mt-2">
            I am a passionate Full Stack Developer with experience in building web applications using
            modern technologies like React, Node.js, and MongoDB. I love coding and solving problems,
            and I am always eager to learn new things and improve my skills.
          </p>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Skills</h2>
          <div className="flex flex-wrap mt-2">
            {['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS', 'Tailwind CSS'].map((skill, idx) => (
              <span key={idx} className="bg-gray-800 text-white text-sm font-medium mr-2 mb-2 px-2.5 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <ul className="list-disc list-inside mt-2">
            {[
              'Project 1: A web application for managing tasks.',
              'Project 2: An e-commerce website built with MERN stack.',
              'Project 3: A personal blog using React and Markdown.',
            ].map((project, idx) => (
              <li key={idx} className="text-lg text-gray-400">
                {project}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
