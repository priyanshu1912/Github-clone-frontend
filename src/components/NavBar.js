import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useSelector } from "react-redux";

const NavBar = () => {
  const { avatar_url } = useSelector((state) => state.auth.userInfo);

  return (
    <div className="h-14 bg-white shrink-0 flex items-center justify-between px-8">
      <AiFillGithub size={35} className="text-black/60" />
      <div className="text-gray-400">Powered by Github API</div>
      <img
        alt="nav-logo"
        src={avatar_url}
        className="w-7 h-7 rounded-md object-cover"
      />
    </div>
  );
};

export default NavBar;
