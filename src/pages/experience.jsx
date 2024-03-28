import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import moment from "moment";

const Experience = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const response = await fetch(
        "https://portfolio-api-nmrs.onrender.com/getexperiences"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch achievements");
      }
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };
  if (!experiences) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Navbar />
      <h1 className="text-3xl mt-5 mb-5 m-5">EXPERIENCE</h1>
      <div>
        <ul
          role="list"
          className="divide-y mt-5 divide-gray-100 container mx-auto"
        >
          <div className="container mx-auto justify-center">
            {experiences.map((item) => (
              <li key={item._id} className="flex justify-between gap-x-6 py-5 border rounded hover:border-slate-400">
                <div className="flex min-w-0 gap-x-4">
                  <div className="h-12 w-12 flex-none rounded-full bg-stone-300"></div>
                  <div className="min-w-0 flex-auto">
                    <p className="text-xl font-semibold leading-6 text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 truncate text-xl leading-5 text-gray-500">
                      {item.institution}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {moment(item.startDate).format("MMMM YYYY")}
                  </p>
                  <p className="text-sm leading-6 text-gray-900">
                    {item.endDate
                      ? moment(item.endDate).format("MMMM YYYY")
                      : "Present"}
                  </p>
                </div>
                {/* <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {item.startDate}
                </p>
                {item.endDate}
              </div> */}
                <div>{item.description}</div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
