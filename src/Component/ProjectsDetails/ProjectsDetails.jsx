import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id: projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (projectId) {
      axios
        .get(`http://localhost:5000/getsingleprotfolio/${projectId}`)
        .then((response) => {
          setProjectData(response.data);
          console.log("Alhamdulillah, single project data is", response.data);
        })
        .catch((err) => {
          console.error("Error fetching project data", err);
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching project data: {error.message}</div>;
  }

  if (projectData) {
    console.log(projectData);
  }

  return (
    <div className="w-9/12 mx-auto flex flex-col justify-center items-center">
      {projectData ? (
        <div className="my-5 flex flex-col justify-center items-center space-y-3">
          <p className="text-3xl font-bold">{projectData?.name}</p>
          <p>{projectData?.description}</p>
          <p className="text-xl font-semibold">Core Features</p>
          <div className="text-center">
            {projectData.coreFeatures.map((feature, idx) => (
              <p key={idx}>{feature}</p>
            ))}
          </div>
          <div>
            <p className="text-xl font-semibold">Technologies</p>
            {projectData.technologies.map((tech, idx) => (
              <p className="text-center" key={idx}>{tech}</p>
            ))}
          </div>
          <div>
           <img src={projectData?.image} alt="" />
          </div>
        </div>
      ) : (
        <p>No project data found</p>
      )}
    </div>
  );
};

export default ProjectDetails;
