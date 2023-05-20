import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBeer, FaTimes } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <nav className="bg-purple-700  text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center md:text-5xl sm:text-3xl font-bold"
          >
            <img
              src="https://i.ibb.co/cg52dm6/logo-image3.jpg"
              alt="Website Logo"
              className="w-20 h-20  mr-2 rounded-full"
            />
            TurboToy
          </Link>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/allToys" className="hover:text-gray-300">
                All Toys
              </Link>
            </li>
            {user && (
              <li>
                <Link to="/my-toys" className="hover:text-gray-300">
                  My Toys
                </Link>
              </li>
            )}
            {user && (
              <li>
                <Link to="/add-toy" className="hover:text-gray-300">
                  Add A Toy
                </Link>
              </li>
            )}
            <li>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
            {user && (
              <li
                className="tooltip tooltip-left tooltip-primary"
                data-tip={user && user?.displayName}
              >
                <img
                  className="w-[40px] h-[40px] rounded-full "
                  src={user?.photoURL}
                  alt="profile picture"
                />
              </li>
            )}
            {user ? (
              <li onClick={handleLogOut}>
                <Link className="hover:text-gray-300">Logout</Link>
              </li>
            ) : (
              <li>
                <Link to="/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
        <div className="md:hidden">
          <button className="focus:outline-none" onClick={handleMenuToggle}>
            <FaBars className={isMenuOpen ? "hidden " : "block"} />

            <FaTimes className={isMenuOpen ? "block" : "hidden"}></FaTimes>
          </button>
        </div>
      </div>
      <ul className={`${isMenuOpen ? "block" : "hidden"} md:hidden mt-4`}>
        <li>
          <Link to="/" className="block py-2 hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/allToys" className="block py-2 hover:text-gray-300">
            All Toys
          </Link>
        </li>
        {user && (
          <li>
            <Link to="/my-toys" className="block py-2 hover:text-gray-300">
              My Toys
            </Link>
          </li>
        )}
        {user && (
          <li>
            <Link to="/add-toy" className="block py-2 hover:text-gray-300">
              Add A Toy
            </Link>
          </li>
        )}
        <li>
          <Link to="/blogs" className="block py-2 hover:text-gray-300">
            Blogs
          </Link>
        </li>
        {user && (
          <li
            className="tooltip tooltip-left tooltip-primary block py-2"
            data-tip={user && user?.displayName}
          >
            <img
              className="w-[40px] h-[40px] rounded-full "
              src={user?.photoURL}
              alt="profile picture"
            />
          </li>
        )}
        {user ? (
          <li onClick={handleLogOut}>
            <Link className="hover:text-gray-300 block py-2">Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/login" className="hover:text-gray-300 block py-2">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
