import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

const RequireAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return isAuthenticated ? (
    <div className="h-screen w-full flex flex-col bg-stone-100">
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default RequireAuth;
