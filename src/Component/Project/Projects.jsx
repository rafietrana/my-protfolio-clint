import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

 

 
const Projects = () => {
    const [projectsData, setProjectsData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/getprotfolio')
        .then(res =>{
           console.log(setProjectsData(res?.data));
        })
    })
console.log('alhamdulillah projects data is', projectsData);
        return (
            <>
          
        <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 my-44">
 
                {
                       projectsData.map(dataProjects=>(
                             <div key={projectsData._id}>
                     
                                  <Link  to={`/projects/${dataProjects._id}`}>
                                  <img className=" h-96 rounded-lg cursor-pointer w-full object-cover" src={dataProjects?.image} alt="" />
                                  </Link>
                      
                             </div>
                       )) 
                }
        </div>
        </>
    );
};

export default Projects;