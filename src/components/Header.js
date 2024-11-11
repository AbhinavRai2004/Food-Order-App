import { useState } from "react";
import swiggy from "../../Images/swiggy.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faAddressBook,
  faUser,
  faHouse,
  faCircleInfo
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign In");

  return (
    <div className="flex h-24 justify-between shadow-xl dark:bg-gray-600">
      <div className="my-2 size-20">
        <img className="app-logo" src={swiggy} />
      </div>
      <div className="flex items-center">
        <ul className="flex">
          <li className="p-3 text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
            {/* <a href="#">Home</a> */}
            <Link to="/">
              <span className="mx-1 dark:text-white">
                <FontAwesomeIcon icon={faHouse} />
              </span>{" "}
              Home
            </Link>
          </li>
          <li className="py-3 px-5 text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
            {/* <a href="#">About Us</a> */}
            <Link to="/about">
              <span className="mx-1 dark:text-white">
                <FontAwesomeIcon icon={faCircleInfo} />
              </span>
              About Us
            </Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
            {/* <a href="#">Contact Us</a> */}
            <Link to="/contact">
              <span className="mx-1 dark:text-white">
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              Contact Us
            </Link>
          </li>
          <li className="p-3 text-lg hover:text-orange-500 dark:text-white dark:hover:text-orange-500">
            {/* <a href="#">Cart</a> */}
            <Link to="/cart">
              <span className="mx-1 dark:text-white">
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              Cart
            </Link>
          </li>
        </ul>
        <button
          className="mx-3 py-2 px-1 text-lg shadow-md rounded-lg hover:text-orange-500 dark:hover:text-orange-500 dark:text-white dark:bg-neutral-900"
          onClick={() => {
            btnName === "Sign In"
              ? setBtnName("Logout")
              : setBtnName("Sign In");
          }}
        >
          <span className="mx-1 dark:text-white">
            <FontAwesomeIcon icon={faUser} />
          </span>{" "}
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;

// module.exports = Header;
