import React from "react";
import Navbar from "../components/navbar";
import { Card } from "flowbite-react";
import Projectimage3 from "../asset/images/projectimage3.jpg";


const Posts = () => {
  return (
   <div>
    <div>
         <Navbar />
    </div>
    <div>
      <h2 className="mt-10 ml-10 mb-5 font-semibold ">READ MORE ON OUR POSTS</h2><hr/>
    </div>

    <div className="ml-10 grid grid-cols-4 gap-4">
    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3} 
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>

    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>

    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>

    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>

    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>


    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>


    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>


    <Card
      className="max-w-sm mt-10"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={Projectimage3}
    >
      <p className="font-normal mx-auto text-gray-700 dark:text-gray-400 mt-4 mb-10 font-semibold ml-5">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <h4 className="px-4 py-2 ml-3 text-gray-700 font-semibold">Read More</h4>
    </Card>
  </div>
    
</div>
  );
};
export default Posts;
