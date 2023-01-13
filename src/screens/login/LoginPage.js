import React, { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../redux/features/auth/AuthSlice";
import Loader from "../../components/Loader";
import Error from "../../components/Error";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const { error, loading } = useSelector((state) => state.auth);

  const handleClick = () => {
    dispatch(authUser(username))
      .unwrap()
      .then(() => navigate("/"));
  };

  return (
    <>
      <div className="text-white bg-black h-screen w-full flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 text-gray-400">
          <AiFillGithub size={60} />
          <input
            type="text"
            placeholder="Type your github id here"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="py-2.5 px-3 w-72 rounded-md shadow-md outline-none text-black bg-rose-300 placeholder:text-black font-semibold placeholder:font-medium"
          />
          <button onClick={handleClick} className="w-fit hover:text-white">
            Enter
          </button>
          {error && <Error message={error} />}
        </div>
      </div>
      {loading && <Loader color="white" message="Authenticating" />}
    </>
  );
};

export default LoginPage;
