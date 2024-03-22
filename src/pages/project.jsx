import React from "react";
import Navbar from "../components/navbar";
import Projectimage2 from "../asset/images/projectimage2.jpg";

const Project = () => {
  return (
    <section>
      <Navbar />
      <h1 className="text-black text-center py-7 underline-offset-1 font-bold text-2xl ">FIND OUR EXCITING PROJECTS</h1>
      <a className=""
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <a href="https://unsplash.com/photos/baby-clinging-on-back-1YnBzhJISg4">
        <img className="object-cover w-full rounded-t-lg h-96  md:w-48  " src="../asset/images/projectimage2.jpg" alt=""></img>
       </a>
        <div className=" flex-row justify-between pl-7 mx-2.5 leading-normal">
          <h5 className="mb-2 mr-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Opal Organic Market
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          In today's fast-paced world, convenience is king, and what could be more convenient than having access to a wide array of products right at your fingertips? Our team has been hard at work behind the scenes, crafting an online shopping experience that will revolutionize the way you shop.
          </p>
        </div>

        

      </a>
    </section>
  );
};

export default Project;
