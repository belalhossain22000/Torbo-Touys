import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogOut=()=>{
    logOut()
    .then(()=>{
        console.log('user logged out');
    })
    .catch(error => console.log(error.message));
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center text-xl font-bold">
            <img src="logo.png" alt="Website Logo" className="w-8 h-8 mr-2" />
            Toy Marketplace
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
            <li>
              <Link to="/my-toys" className="hover:text-gray-300">
                My Toys
              </Link>
            </li>
            <li>
              <Link to="/add-toy" className="hover:text-gray-300">
                Add A Toy
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-300">Profile</Link>
            </li>
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
          <button
            className="focus:outline-none bg-white"
            onClick={handleMenuToggle}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className={isMenuOpen ? "hidden" : "block"}
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                className={isMenuOpen ? "block" : "hidden"}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
        <li>
          <Link to="/my-toys" className="block py-2 hover:text-gray-300">
            My Toys
          </Link>
        </li>
        <li>
          <Link to="/add-toy" className="block py-2 hover:text-gray-300">
            Add A Toy
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="block py-2 hover:text-gray-300">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/login" className="hover:text-gray-300">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
