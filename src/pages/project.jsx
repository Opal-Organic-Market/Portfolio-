import React from "react";
import Navbar from "../components/navbar";
import Mixedfruit from "../asset/images/mixedfruit.jpg";
import { Card } from "flowbite-react";

const Project = () => {
  return (
    <section className="bg-white mt-15  ">
      <Navbar />
    <div>
      <h2 className="mt-10 ml-10 mb-5 font-semibold ">FIND OUR EXCITING PROJECTS</h2><hr/>
    </div>

    <div className="ml-10 grid grid-cols-4 gap-4">
    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Mixedfruit} 
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        DineRich JuiceBar is a Ghanaian based drink hub which produces drinks and savories especially locally made ones with natural ingredients for household consumption and other events. For all your weddings, birthdays, christenings amon others.
        Stay healthy with DineRich!
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
      <Link to="/projectsspage">PROJECTS</Link>
    </Card>
    </div>
    </section>
  );
};

export default Project;
