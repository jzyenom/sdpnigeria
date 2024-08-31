// import { Navigate, Outlet } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   //  const user = userInfo && userInfo._id ? userInfo._id : null;

//   return userInfo ? <Outlet /> : <Navigate to="/login" replace />;
// };
// export default PrivateRoute;

// privateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ role }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  if (role && userInfo.role !== role) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
