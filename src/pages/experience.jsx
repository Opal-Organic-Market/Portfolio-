import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Experience = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    try {
      const response = await fetch(
        "https://portfolio-api-nmrs.onrender.com/getexperiences"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch experiences");
      }
      const data = await response.json();
      setExperiences(data);
    } catch (error) {
      console.error("Error fetching experiences:", error);
    }
  };

  if (!experiences) return <h1>Loading</h1>;

  return (
    <div>
      <Navbar />
      <div>
        <header>
          <h1>EXPERIENCE</h1>
        </header>

        <div>
          <ul role="list" className="divide-y divide-gray-100">
            {experiences.map((item) => (
              <li
                key={item._id}
                className="flex justify-between gap-x-6 py-5"
              >
                <div className="flex min-w-0 gap-x-4">
                  {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" /> */}
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-gray-900">
                      {item.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {item.institution}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p className="text-sm leading-6 text-gray-900">
                    {item.startDate}
                  </p>
                  <div className="mt-1 flex items-center gap-x-1.5">
                    <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="text-xs leading-5 text-gray-500">
                      {experiences.endDate}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
