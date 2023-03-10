import React, { useState } from "react";
import Logo from "./img/logo.png";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import avatar from "./img/avatar.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
const Header = () => {
  const friebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const login = async () => {
    if (!user) {
      const {
        // eslint-disable-next-line no-unused-vars
        user: { refreshToken, providerData },
      } = await signInWithPopup(friebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };
  const Logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <div className="fixed z-50 w-screen span-3  px-4 md:span-6 md:px-16 bg-primary">
      {/**desktop as tablet  */}
      <div className="hidden md:flex w-full h-full items-center justify-between ">
        <Link to={"/"} className=" flex items-centet gap-2 ">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <span className=" text-headingColor text-xl font-bold">City</span>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <div className="relative flex items-center justify-center ">
            <MdShoppingBasket className="text-textColor text-2xl" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
              <span className="text-xs text-white font-semibold">2</span>
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt="useprofile"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0 "
              >
                {user && user.email === "taducdung062002@gmail.com" && (
                  <Link to={"/CreateContainer"}>
                    <div
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all durtion-100 ease-in-out text-textColor text-base  "
                      onClick={() => setIsMenu(false)}
                    >
                      New Item
                      <MdAdd />
                    </div>
                  </Link>
                )}

                <span
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all durtion-100 ease-in-out text-textColor text-base"
                  onClick={Logout}
                >
                  Logout
                  <MdLogout />
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/**mobile */}
      <div className="flex items-center justify-between  md:hidden w-full h-full ">
        <div className="relative flex items-center justify-center ">
          <MdShoppingBasket className="text-textColor text-2xl" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center ">
            <span className="text-xs text-white font-semibold">2</span>
          </div>
        </div>
        <Link to={"/"} className=" flex items-centet gap-2 ">
          <img src={Logo} className="w-8 object-cover" alt="Logo" />
          <span className=" text-headingColor text-xl font-bold">City</span>
        </Link>
        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            alt="useprofile"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-xl flex flex-col absolute top-12 right-0 "
            >
              {user && user.email === "taducdung062002@gmail.com" && (
                <Link to={"/createItem"}>
                  <span className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all durtion-100 ease-in-out text-textColor text-base  ">
                    New Item
                    <MdAdd />
                  </span>
                </Link>
              )}
              <span>
                <ul className="flex flex-col ">
                  <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Home
                  </li>
                  <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Menu
                  </li>
                  <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    About Us
                  </li>
                  <li className=" text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer px-4 py-2">
                    Service
                  </li>
                </ul>
              </span>

              <span
                className="px-4 py-2 flex items-center justify-center bg-gray-200  gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base  rounded-xl"
                onClick={Logout}
              >
                Logout
                <MdLogout />
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
