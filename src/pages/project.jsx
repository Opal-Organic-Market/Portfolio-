import React from "react";
import Navbar from "../components/navbar";
import Bg1 from "../asset/images/bg1.jpg";
import Projectimage2 from "../asset/images/projectimage2.jpg"

const Project = () => {
  return (
    <section className="bg-rose-950">
      <Navbar />
      <div>
      <h1 className="text-white text-center font-bold text-2xl mt-10 mb-8 bg-rose-950 pt-3 pb-3 italic underline decoration-wavy " >FIND OUR EXCITING PROJECTS</h1>
        <div className="container center mx-auto mt-5 grid grid-cols-1 gap-12">

          <div>
            <a href="#" class="flex flex-col text-center items-center bg-white border-orange-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-300 dark:bg-rose-400 ">
              <img class="object-cover bg-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg m-2" src={Bg1} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white italic">DineRich JuiceBar</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">DineRich JuiceBar is a Ghanaian based drink hub which produces drinks and savories especially locally made ones with natural ingredients for household consumption and other events</p>
              </div>
            </a>
          </div>
          <div>
            <a href="#" class="flex flex-col text-center items-center bg-white border-orange-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-300 dark:bg-rose-400 ">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Projectimage2} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white italic">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex deleniti, obcaecati et </p>
              </div>
            </a>
          </div>
          <div>
            <a href="#" class="flex flex-col text-center items-center bg-white border-orange-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-300 dark:bg-rose-400 ">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Projectimage2} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white italic">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iste</p>
              </div>
            </a>
          </div>
          <div>
            <a href="#" class="flex flex-col text-center items-center bg-white border-orange-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-300 dark:bg-rose-400 ">
              <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={Projectimage2} alt="" />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white italic">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam fuga nul</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
