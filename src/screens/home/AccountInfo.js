import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlineLink,
  HiOutlineMail,
} from "react-icons/hi";
import { RxTwitterLogo } from "react-icons/rx";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const {
    avatar_url,
    name,
    login,
    bio,
    html_url,
    location,
    blog,
    twitter_username,
    followers,
    following,
    email
  } = useSelector((state) => state.auth.userInfo);

  return (
    <div className="w-56 text-gray-500 shrink-0 h-full">
      <div className="flex flex-col h-full gap-3">
        <img
          alt="profile-logo"
          src={avatar_url}
          className="w-44 h-44 object-cover rounded-md"
        />
        <div>
          <div className="font-extrabold text-black text-lg">{name}</div>
          <div>{`@${login}`}</div>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <span className="text-black font-bold">{following}</span> Following
          </div>
          <div>
            <span className="text-black font-bold">{followers}</span> Followers
          </div>
        </div>
        {bio && <div className="text-black font-medium break-all">{bio}</div>}
        <a
          href={html_url}
          target="_blank"
          rel="noreferrer"
          className="bg-black text-white p-1 rounded-md font-semibold text-center"
        >
          Follow
        </a>
        <div className="flex flex-col gap-2 text-xs">
          {location && (
            <div className="flex items-center gap-1">
              <HiOutlineLocationMarker size={18} className="shrink-0" />
              <div className="break-all">{location}</div>
            </div>
          )}
          {blog && (
            <a href={blog} target="_blank" rel="noreferrer">
              <div className="flex items-center gap-1">
                <HiOutlineLink size={18} className="shrink-0" />
                <div className="break-all">{blog}</div>
              </div>
            </a>
          )}
          {email && (
            <div className="flex items-center gap-1">
              <HiOutlineMail size={18} className="shrink-0" />
              <div className="break-all">{email}</div>
            </div>
          )}
          {twitter_username && (
            <a
              href={`https://twitter.com/${twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              <div className="flex items-center gap-1">
                <RxTwitterLogo size={18} />
                <div className="break-all">{twitter_username}</div>
              </div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
