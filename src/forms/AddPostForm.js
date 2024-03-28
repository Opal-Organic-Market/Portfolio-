import React, { useState } from 'react';

const AddPostForm = () => {
  const [post, setPost] = useState({
    title: '',
    author: '',
    body: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) =>{
    const file = e.target.files[0];
    setPost((prevState) => ({
      ...prevState,
      image: file,
    }));

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission, e.g., sending data to backend
    const formData = new FormData();
    formData.append('title',post.title );
    formData.append('title',post.author );
    formData.append('title',post.body );
    formData.append('image',post.image);
    console.log('Form submitted:', post);
    const response = await fetch('https://portfolio-api-nmrs.onrender.com/addblogs',{
      method: 'POST',
      body: formData
    })
    console.log("Post data:", response);
    // Reset form fields
    setPost({
      title: '',
      author: '',
      body: '',
      image: null,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Enter title"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={post.author}
            onChange={handleChange}
            placeholder="Enter author"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-medium mb-2">Body</label>
          <textarea
            id="body"
            name="body"
            value={post.body}
            onChange={handleChange}
            placeholder="Enter post body"
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
            {post.image && <span className="ml-2">{post.image.name}</span>}
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
