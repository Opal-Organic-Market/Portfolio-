import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const Achievements = () => {
  const [achievements, setAchievements] = useState(null);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch("https://portfolio-api-nmrs.onrender.com/getachievements"); 
      if (!response.ok) {
        throw new Error('Failed to fetch achievements');
      }
      const data = await response.json();
      setAchievements(data);
    } catch (error) {
      console.error("Error fetching achievements:", error);
    }
  };

  if (!achievements) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Achievements</h1>
        <div className="grid grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div key={achievement._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={achievement.image} alt={achievement.alt} />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{achievement.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{achievement.description}</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Achievements;