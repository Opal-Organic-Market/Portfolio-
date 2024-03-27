import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Groupphoto2 from "../asset/images/grouphoto2.jpg";
import axios from "axios";

const Project = () => {
  const [project, setProject] = useState()
  const url = `fix in api`

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
      <div className="bg-zinc-400 mt-10">
        <div className="m-auto w-2/5">

          <a href="#" class="flex items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Groupphoto2} alt="" />
            <div class="flex flex-col justify-between p-4 leading-normal">
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
