import React, { useState } from "react";

const AddExperienceForm = () => {
  const [experience, setExperience] = useState({
    title: "",
    institution: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExperience((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    const formData = new FormData();
    formData.append("title", experience.title);
    formData.append("title", experience.institution);
    formData.append("title", experience.description);
    formData.append("title", experience.startDate);
    formData.append("title", experience.endDate);
    console.log("Form submitted:", experience);

    const response = await fetch(
      "https://portfolio-api-nmrs.onrender.com/addexperiences",
      {
        method: "POST",
        body: formData,
      }
    );
    console.log("Form submitted:", response);
    // Reset form fields
    setExperience({
      title: "",
      institution: "",
      description: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={experience.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="institution"
            className="block text-gray-700 font-medium mb-2"
          >
            Institution
          </label>
          <input
            type="text"
            id="institution"
            name="institution"
            value={experience.institution}
            onChange={handleChange}
            placeholder="Enter institution"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={experience.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 font-medium mb-2"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={experience.startDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-gray-700 font-medium mb-2"
          >
            End Date (Optional)
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={experience.endDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Experience
        </button>
      </form>
    </div>
  );
};

export default AddExperienceForm;
