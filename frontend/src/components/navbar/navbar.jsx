import { useEffect, useState } from "react";
import logo from "./Logo.png";
import { useLocation, Link } from "react-router-dom";
import { Menu, User } from "lucide-react";
import Ham from "./Ham";
function Nav() {
  const [showProfile, setShowProfile] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const username = localStorage.getItem("LoggedUser");
    if (username != null) setShowProfile(username);
    console.log(showProfile);
  }, [showProfile]);

  //to display items on clicking ham or hide
  function setHamBurger() {
    setIsHamOpen(!isHamOpen);
  }

  //to change background after scrolling
  const changeBackground = () => {
    if (window.scrollY >= 200 && isHomePage) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <div
        className={`${
          navbar || !isHomePage ? "bg-[rgb(7,7,25)]" : null
        }  left-0 top-0 flex justify-between items-center  text-white z-50 fixed w-full`}
      >
        <div>
          <Link to="/" className="logo">
            <img src={logo} alt="logopicture" className="w-28 md:w-36" />
          </Link>
        </div>
        <div className="hidden w-[60%] md:flex justify-center items-center">
          <ul className="w-full flex justify-evenly items-center text-lg">
            <li>
              <Link
                to="/"
                className="font-[500] hover:border-b-2 hover:border-blue-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Course"
                className={`font-[500] ${
                  location.pathname === "/Course"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                to="/Carriers"
                className={`font-[500] ${
                  location.pathname === "/Carriers"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Carriers
              </Link>
            </li>
            <li>
              <Link
                to="/Universities"
                className={`font-[500] ${
                  location.pathname === "/Universities"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Universities
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className={`font-[500] ${
                  location.pathname === "/Contact"
                    ? "border-b-2 border-blue-400"
                    : null
                } hover:border-b-2 hover:border-blue-400`}
              >
                Contact
              </Link>
            </li>
            <li>
              {/* if user is logged IN show profile Icon otherwise show Sign In */}
              {!showProfile ? (
                <Link
                  to="/login"
                  className={`font-[500] ${
                    location.pathname === "/login"
                      ? "border-b-2 border-blue-400"
                      : null
                  }  hover:border-b-2 hover:border-blue-400 `}
                >
                  Sign In
                </Link>
              ) : (
                <button className="hover:border-b-2 hover:border-blue-400">
                  <User />
                </button>
              )}
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <Menu size={36} className="mr-2 mb-2" onClick={setHamBurger} />
          {isHamOpen ? <Ham isHome={isHomePage} /> : null}
        </div>
      </div>
    </>
  );
}
export default Nav;
