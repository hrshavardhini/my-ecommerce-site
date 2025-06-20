import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        {" "}
        <img
          src={assets.logo}
          loading="lazy"
          width="144"
          height="40"
          className="w-36  h-10 object-contain"
          alt="Forever icon"
        />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      <div className=" flex items-center gap-6">
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          loading="lazy"
          className="cursor-pointer w-5 h-5"
          alt="search icon"
        />
        <div className="group relative">
          {user ? (
            <Link to="/profile">
              <img
                src={assets.profile_icon}
                className="w-5 h-5 cursor-pointer"
                width="20"
                height="20"
                loading="lazy"
                alt="profile icon"
              />
            </Link>
          ) : (
            <Link to="/login">
              <img
                src={assets.profile_icon}
                className="w-5 cursor-pointer"
                loading="lazy"
                alt="login icon"
              />
            </Link>
          )}

          <div className="group-hover:block hidden absolute dropdown right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              {user ? (
                <>
                  <Link to="/profile" className="hover:text-black">
                    My Profile
                  </Link>
                  <Link to="/orders" className="hover:text-black">
                    Orders
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      setTimeout(() => {
                        navigate("/login");
                      }, 1000);
                    }}
                    className="text-left hover:text-black"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="hover:text-black">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="cart icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="menu icon"
        />
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-white z-50 transition-transform duration-300 ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3"
          >
            <img
              className="h-4 rotate-180 "
              src={assets.dropdown_icon}
              loading="lazy"
              alt="dropdown icon"
            />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2  pl-6 border"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2  pl-6 border"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2  pl-6 border"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2  pl-6 border"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
