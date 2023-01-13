import React from "react";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import AccountInfo from "./AccountInfo";
import Repos from "./Repos";

const HomePage = () => {
  const { loading } = useSelector((state) => state.repo);

  return (
    <>
      <div className="grow flex gap-24 py-10 px-8">
        <AccountInfo />
        <Repos />
      </div>
      {loading && <Loader color="white" message="Loading Repositories" />}
    </>
  );
};

export default HomePage;
