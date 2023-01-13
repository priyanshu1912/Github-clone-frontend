import moment from "moment/moment";
import React from "react";
import {
  AiOutlineClockCircle,
  AiOutlineStar,
  AiOutlineFork,
  AiOutlineEye,
} from "react-icons/ai";
import { FcFolder } from "react-icons/fc";

export const RepoComponent = ({ data }) => {
  return (
    <a href={data.html_url} target="_blank" rel="noreferrer">
      <div className="bg-white rounded-md h-44 flex text-gray-500 shadow-md w-full">
        <div className="p-3 grow">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <FcFolder size={30} />
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineClockCircle />
                <div className="text-xs">
                  {moment(data.created_at).format("MMM DD YYYY")}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineEye />
                <div className="text-xs">{data.watchers_count}</div>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineFork />
                <div className="text-xs">{data.forks_count}</div>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <AiOutlineStar />
                <div className="text-xs">{data.stargazers_count}</div>
              </div>
            </div>
          </div>
          <div className="my-3">
            <div className="font-extrabold text-black">{data.name}</div>
            {data.description && <div>Lorem, ipsum dolor.</div>}
          </div>
          {data.language && (
            <div>
              <div className="text-xs font-bold">Languages used :</div>
              <div className="flex items-center gap-4 text-xs mt-1">
                <div className="bg-sky-100 font-medium px-3 py-0.5 rounded-xl">
                  {data.language}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
