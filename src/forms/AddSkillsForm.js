import React, { useState } from 'react';

const AddSkillsForm = () => {
  const [skill, setSkill] = useState({
    name: '',
    proficiency: '',
    experience: '',
    category: 'Soft Skills', // Default category
  });

  const categories = ['Soft Skills', 'Languages', 'Frameworks', 'Tools'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSkill((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    console.log('Form submitted:', skill);
    // Reset form fields
    setSkill({
      name: '',
      proficiency: '',
      experience: '',
      category: 'Soft Skills', // Reset to default category
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Skill Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={skill.name}
            onChange={handleChange}
            placeholder="Enter skill name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="proficiency" className="block text-gray-700 font-medium mb-2">Proficiency</label>
          <input
            type="text"
            id="proficiency"
            name="proficiency"
            value={skill.proficiency}
            onChange={handleChange}
            placeholder="Enter proficiency level"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="experience" className="block text-gray-700 font-medium mb-2">Experience</label>
          <input
            type="text"
            id="experience"
            name="experience"
            value={skill.experience}
            onChange={handleChange}
            placeholder="Enter experience"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={skill.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Skill
        </button>
      </form>
    </div>
  );
};

export default AddSkillsForm;
