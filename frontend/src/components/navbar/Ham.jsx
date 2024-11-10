import { Link } from "react-router-dom";
function Ham({ isHome }) {
  console.log(isHome);
  return (
    <>
      <div className="absolute top-10e left-0">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Course">Courses</Link>
          </li>
          <li>
            <Link to="/Carriers">Carriers</Link>
          </li>
          <li>
            <Link to="/Universities1">Universities</Link>
          </li>
          <li>
            <Link to="/Contact"> Contact</Link>
          </li>
          <li>
            <Link to="/login">Sign In</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Ham;
