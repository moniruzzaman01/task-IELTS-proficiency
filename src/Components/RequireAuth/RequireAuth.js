import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";

const RequireAuth = ({ children }) => {
  const [authUser, authLoading] = useAuthState(auth);
  const location = useLocation();

  if (authLoading) {
    return (
      <p className=" min-h-[70vh] flex justify-center items-center ">
        Loading ...
      </p>
    );
  }

  if (!authUser) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }

  return children;
};

export default RequireAuth;
