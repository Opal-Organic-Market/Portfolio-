import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Skills = () => {
  const [skills, setSkills] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://portfolio-api-nmrs.onrender.com/getskills'); // replace the API endpoint

      if(!response.ok){
        throw new Error ('Failed to fetch skills');
      }
      const data = await response.json();
      console.log(data)
      setSkills(data);
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  if  (!skills){
    return <h1>Loading</h1>
  }

  return (
    
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 pt-15 text-white       min-h-screen">
        <div className="grid grid-cols-2 gap-10 m-10 ">
          <section className="bg-white text-black p-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-3xl mb-4">Soft Skills</h1>
            <div className="grid grid-cols-2 gap-4">
              {skills.filter((skill) => skill.category === 'Soft Skills').map((skill) => (
                <div key={skill._id} className="bg-gray-100 p-5 rounded-lg text-gray-800">
                  <h2 className="font-bold">{skill.name}</h2>
                  <p>{skill.experience}</p>
                  <p>Proficiency: {skill.proficiency}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-200 text-blue-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Languages</h1>
            <div className="grid grid-cols-2 gap-4">
              {skills.filter((skill) => skill.category === 'Languages').map((skill) => (
                <div key={skill._id} className="bg-blue-300 p-5 rounded-lg text-blue-800">
                  <h2 className="font-bold">{skill.name}</h2>
                  <p>{skill.experience}</p>
                  <p>Proficiency: {skill.proficiency}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-green-200 text-green-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Frameworks</h1>
            <div className="grid grid-cols-2 gap-4">
              {skills.filter((skill) => skill.category === 'Frameworks').map((skill) => (
                <div key={skill._id} className="bg-green-300 p-5 rounded-lg text-green-800">
                  <h2 className="font-bold">{skill.name}</h2>
                  <p>{skill.experience}</p>
                  <p>Proficiency: {skill.proficiency}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-yellow-200 text-yellow-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Tools</h1>
            <div className="grid grid-cols-2 gap-4">
              {skills.filter((skill) => skill.category === 'Tools').map((skill) => (
                <div key={skill._id} className="bg-yellow-300 p-5 rounded-lg text-yellow-800">
                  <h2 className="font-bold">{skill.name}</h2>
                  <p>{skill.experience}</p>
                  <p>Proficiency: {skill.proficiency}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  )}

export default Skills;
