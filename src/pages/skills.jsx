import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Skills = () => {
  // Your skills data here
  const softSkills = [
    // Your softSkills data here
    {
      title: "Communication",
      description:
        "We believe in clear and concise communication, ensuring that our ideas.",
    },
    {
      title: "Creativity",
      description:
        "We think outside the box, bringing unique and innovative solutions to the table.",
    },
    {
      title: "Team Work",
      description:
        "We value collaboration and believe that great things can be achieved when we work together.",
    },
    {
      title: "Leadership",
      description:
        "We take initiative and guide our team towards achieving our common goals.",
    },
  ];

  const languages = [
    // Your languages data here
    {
      title: "HTML",
      description:
        "Our HTML roots run deep. We cultivate the digital soil, planting seeds of structure and semantics.",
    },
    {
      title: "JavaScript",
      description:
        "JavaScript is our wand—conjuring interactivity and dynamic spells. We breathe life into static pages.",
    },
    {
      title: "CSS",
      description:
        "CSS is our brushstroke on the canvas of the web. We paint layouts, colors, and animations.",
    },
  ];

  const frameworks = [
    // Your frameworks data here
    {
      title: "React.js",
      description:
        "We build interactive UIs with ease using React.js, creating seamless user experiences.",
    },
    {
      title: "Express.js",
      description:
        "We leverage Express.js to build robust and scalable back-end services.",
    },
    {
      title: "Tailwind",
      description:
        "We use Tailwind to craft modern and responsive designs with ease.",
    },
    {
      title: "Bootstrap",
      description:
        "We utilize Bootstrap to quickly design and customize responsive mobile-first sites.",
    },
  ];

  const tools = [
    // Your tools data here
    {
      title: "GitHub",
      description:
        "We use GitHub for version control, enabling us to collaborate and track changes in our code.",
    },
    {
      title: "VSCode",
      description:
        "We use VSCode as our code editor of choice, leveraging its features to write clean and efficient code.",
    },
    {
      title: "Thunder Client",
      description:
        "We use Thunder Client to test our APIs, ensuring they work as expected.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-10 pt-15 text-white min-h-screen">
        <div className="grid grid-cols-2 gap-10 m-10 ">


          <section className="bg-white text-black p-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-3xl mb-4">Soft Skills</h1>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-5 rounded-lg text-gray-800"
                >
                  <h2 className="font-bold">{skill.title}</h2>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-200 text-blue-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Languages</h1>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((skill, index) => (
                <div
                  key={index}
                  className="bg-blue-300 p-5 rounded-lg text-blue-800"
                >
                  <h2 className="font-bold">{skill.title}</h2>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-green-200 text-green-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Frameworks</h1>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((skill, index) => (
                <div
                  key={index}
                  className="bg-green-300 p-5 rounded-lg text-green-800"
                >
                  <h2 className="font-bold">{skill.title}</h2>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
          <section className="bg-yellow-200 text-yellow-900 p-5 rounded-lg shadow-lg  transform transition-transform duration-500 hover:scale-105">
            <h1 className="text-4xl mb-4">Tools</h1>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((skill, index) => (
                <div
                  key={index}
                  className="bg-yellow-300 p-5 rounded-lg text-yellow-800"
                >
                  <h2 className="font-bold">{skill.title}</h2>
                  <p>{skill.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
