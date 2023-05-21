/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Context } from "../../context/Context";
import { Navigate } from "react-router-dom";

function IsLoggedIn({ children }) {
  const { user } = useContext(Context);
  if (user.length > 0) {
    return <Navigate to="/" />;
  }
  return children;
}

export default IsLoggedIn;
