import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Groupphoto from "../asset/images/groupphoto.jpg";

const Project = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("https://portfolio-api-nmrs.onrender.com/getprojects");
      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  if (!projects) {
    return <h1>Please Wait</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="bg-slate-700 h-dvh">
        <div className="m-auto w-2/5 ">
          {projects.map((project) => (
            <div key={project._id}>
              <a href="#" className=" flex items-center bg-gray-300 border hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700">
                <img className="h-80 md:w-48 md:rounded-none md:rounded-lg" src={project.image} alt="project" />
                <div className="flex flex-col justify-between p-4">
                  <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mt-10 underline decoration-wavy">{project.title}</h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{project.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        </div>
    </>
  );
};

export default Project;
