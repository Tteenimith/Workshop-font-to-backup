import React from "react";
import { Link } from "react-router-dom";
const MainNav = () => {
  return (
    <div className="bg-neutral-900 text-white h-12 flex gap-2 items-center text-nowrap px-4">
      <a className="text-2xl font-bold">APP LOGO</a>

      <div className="flex justify-between w-full pl-12">
        <ul className="flex gap-4">
          <li className="hover:scale-105 hover:-translate-y-1 duration-200 hover:cursor-pointer">
            <Link to={"/"}>HOME</Link>
          </li>
          <li className="hover:scale-105 hover:-translate-y-1 duration-200 hover:cursor-pointer">
            <Link to={"/about"}>ABOUT</Link>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:scale-105 hover:-translate-y-1 duration-200 hover:cursor-pointer">
            <Link to={"/register"}>Register</Link>
          </li>
          <li className="hover:scale-105 hover:-translate-y-1 duration-200 hover:cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNav;
