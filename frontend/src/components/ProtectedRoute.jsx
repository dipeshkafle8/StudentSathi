import useAuth from "./hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { isAuthenticatedUser, authMessage, loading } = useAuth();
  /* loading is state used is useAuth because before executing the
  async call and gettting result from backend rest of the component
  was rendering
  */
  console.log("Is authenticated User", isAuthenticatedUser);
  const location = useLocation();
  if (loading) {
    return <h1>Loading......</h1>;
  }
  if (!isAuthenticatedUser) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  //if authenticated renders the children
  return children;
}

export default ProtectedRoute;
