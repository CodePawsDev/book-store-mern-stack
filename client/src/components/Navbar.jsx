import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import { RiUserFill } from "react-icons/ri";
import { RiHeart3Fill } from "react-icons/ri";
import { PiShoppingCartFill } from "react-icons/pi";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/order" },
  { name: "Cart Page", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

function Navbar() {
  const currentUser = true;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  console.log(isDropDownOpen);

  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center gap-4 md:gap-16">
          <Link to="/">
            <GiHamburgerMenu className="size-6" />
          </Link>

          {/* search input */}
          <div className="relative w-40 sm:w-72 space-x-2">
            <IoSearchOutline className="size-6 absolute inline-block left-3 inset-y-1" />
            <input
              type="text"
              placeholder="Search Here"
              className="bg-gray-200 w-full py-1 px-6 md:px-8 rounded-md focus:outline-none"
            />
          </div>
        </div>
        {/* right side */}
        <div className="relative flex items-center space-x-2 md:space-x-3">
          {/* different ui for profile whether login or not*/}
          <div>
            {currentUser ? (
              <>
                <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full ${
                      currentUser ? "ring-2 ring-orange-400" : ""
                    }`}
                  />
                </button>
                {/* show dropdowns */}
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                          <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-200">{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <RiUserFill className="size-6" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <RiHeart3Fill className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 py-2 flex items-center"
          >
            <PiShoppingCartFill className="size-6" />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
