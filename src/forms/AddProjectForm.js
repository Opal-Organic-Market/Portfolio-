import React, { useState } from "react";

const AddProjectForm = () => {
  const [project, setProject] = useState({
    title: "",
    description: "",
    image: "",
    link: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  
  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    setProject((prevState) => ({
      ...prevState,
      image: file,
    }));

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    const formData = new FormData();
    formData.append("title", project.title);
    formData.append("description", project.description);
    formData.append("image", project.image);
    formData.append("link", project.link);
    console.log("Form submitted:", project);
    const response = await fetch(
      "https://portfolio-api-nmrs.onrender.com/addprojects",
      {
        method: "POST",
        body: formData,
      }
    );
    console.log("Form submitted:", response);
    // Reset form fields
    setProject({
      title: "",
      description: "",
      image: "",
      link: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Project</h2>
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
            value={project.title}
            onChange={handleChange}
            placeholder="Enter title"
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
            value={project.description}
            onChange={handleChange}
            placeholder="Enter description"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-medium mb-2">Image</label>
          <div className="flex items-center justify-between">
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <label
              htmlFor="image"
              className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:bg-blue-600"
            >
              Choose File
            </label>
            {project.image && <span className="ml-2">{project.image.name}</span>}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="link"
            className="block text-gray-700 font-medium mb-2"
          >
            Project Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={project.link}
            onChange={handleChange}
            placeholder="Enter project link"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};

export default AddProjectForm;
