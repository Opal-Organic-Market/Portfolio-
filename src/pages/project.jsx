import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Groupphoto from "../asset/images/groupphoto.jpg";
import axios from "axios";

const Project = () => {
  const [project, setProject] = useState()
  const url = (`https://portfolio-api-nmrs.onrender.com`)

useEffect (() => {
  async function displayOneProject() {
    try {
       const project = await axios.get(url)
       const projectname = project.data
       console.log(project)

    } catch (error) {
      console.log(error)
      
    }
    }
    displayOneProject()
})


  return (

    <>
      <Navbar />
      <div className="bg-red-950 mx-auto mt-10">
        <div className="m-auto w-2/5">

          <a href="#" class="flex items-center bg-white border border-gray-200  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover h-80 md:w-48 md:rounded-none md:rounded-s-lg" src={Groupphoto} alt="" />
            <div class="flex flex-col justify-between p-4">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Opal Portfolio Project</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A team of four junior developers embarked on building a challenging portfolio website, which proved to be both educational and rewarding. Despite initial obstacles, their collaboration, dedication, and perseverance led to the successful completion of the project</p>
            </div>
          </a>
          
        </div>
      </div>


   
    </>

  );
};

export default Project;
