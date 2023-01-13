import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../../components/Error";
import Paginate from "../../components/Paginate";
import { RepoComponent } from "../../components/RepoComponent";
import { getRepo } from "../../redux/features/repo/RepoSlice";

const Repos = () => {
  const dispatch = useDispatch();
  const { login } = useSelector((state) => state.auth.userInfo);
  const { repos, error } = useSelector((state) => state.repo);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(10);
  const indexOfLastPost = currentPage * blogsPerPage;
  const indexOfFirstPost = indexOfLastPost - blogsPerPage;
  const currentBlogs = repos?.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getRepo(login));
  }, [dispatch, login]);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage !== Math.ceil(repos.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {error ? (
        <Error color="red" message={error} />
      ) : (
        <div className="grow flex flex-col gap-5 justify-between h-full">
          <div className="font-extrabold text-black text-lg">
            Repositories{" "}
            {repos && (
              <span className="text-xs text-gray-500">({repos.length})</span>
            )}
          </div>
          <div className="relative w-full h-full overflow-y-scroll">
            <div className="absolute w-full h-full grid grid-cols-3 gap-5 pr-3">
              {currentBlogs.map((item) => {
                return <RepoComponent data={item} />;
              })}
            </div>
          </div>
          <Paginate
            totalBlogs={repos.length}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            previousPage={previousPage}
            nextPage={nextPage}
            blogsPerPage={blogsPerPage}
            setBlogsPerPage={setBlogsPerPage}
          />
        </div>
      )}
    </>
  );
};

export default Repos;
