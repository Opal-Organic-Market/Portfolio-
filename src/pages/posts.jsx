import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://portfolio-api-nmrs.onrender.com/getblogs"
      ); // replace the API endpoint

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const data = await response.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!posts) {
  //   return <h1>Loading</h1>;
  // }

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-green-400 to-blue-500 p-10 pt-15 text-white min-h-screen">
        <div className="grid grid-cols-2 gap-20">
          {posts.map((post) => (
            <div key={post._id} className="bg-white p-5 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
              <a href="#">
                <img
                  className="rounded-t-lg w-full h-64 object-cover"
                  src={`https://savefiles.org/${post.image}?shareable_link=162`}
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.body}
                </p>
                <p className="font-semibold">`{post.author}`</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
          };  

export default Posts;
