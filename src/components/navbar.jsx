import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="h-14 flex justify-center ">
        <div className="grid place-content-center">
          <ul className="flex gap-x-5 m-5 font-bold ">
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
