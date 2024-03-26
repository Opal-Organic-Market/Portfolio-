import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-evenly ">
        <div className="grid place-content-center text-2xl">LOGO</div>
        <div className="grid place-content-center">
          <ul className="flex gap-x-5">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/aboutpage">ABOUT</Link>
            </li>
            <li>
              <Link to="/achievementpage">ACHIEVEMENT</Link>
            </li>
            <li>
              <Link to="/contactpage">CONTACT</Link>
            </li>
            <li>
              <Link to="/experiencepage">EXPERIENCE</Link>
            </li>
            <li>
              <Link to="/postspage">POSTS</Link>
            </li>
            <li>
              <Link to="/skillspage">SKILLS</Link>
            </li>
            <li>
              <Link to="/projectsspage">PROJECTS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
