/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../../context/Context";

function AuthLogin({ children }) {
  const { user } = useContext(Context);
  if (user.length == 0) return <Navigate to="/login" />;
  return children;
}

export default AuthLogin;
