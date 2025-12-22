import React from "react";
import { Search } from "lucide-react";
import {LogOut} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const token = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");
  const isLoggedIn = !!token && !!username;
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    navigate ("/Login");
  };
  return (
    <div className="header w-full bg-transparent ">
      <div className="p-4">
        <div className="page flex gap-[60px] items-center">
          <img src="/assets/img/LOGO.svg" alt="" />
          <a href="/" className="text-[16px] font-[700] text-[#003459]">
            Home
          </a>
          <a href="/Shop" className="text-[16px] font-[700] text-[#003459]">
            Category
          </a>
          <a href="" className="text-[16px] font-[700] text-[#003459]">
            About
          </a>
          <a href="" className="text-[16px] font-[700] text-[#003459]">
            Contact
          </a>
          <div className="relative flex items-center group">
            <div className="absolute left-4 text-[#667479] group-focus-within:text-[#003459] transition-colors">
              <Search size={24} strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder="Search something here!"
              className="w-full bg-[#F7F8F9] text-[#667479] py-3 pl-14 pr-4 rounded-full 
                     outline-none border border-transparent
                     focus:bg-white focus:border-[#003459]/20 focus:ring-4 focus:ring-[#003459]/5
                     placeholder:text-[#99A2A5] transition-all duration-300"
            />
          </div>

          {isLoggedIn ? (
            <>
              <div className="flex gap-6 items-center">
                <img
                  src="/assets/img/favorite.svg"
                  alt="Favorite"
                  className="cursor-pointer"
                />
                <img
                  src="/assets/img/cart.svg"
                  alt="Cart"
                  className="cursor-pointer"
                />

                <div className="user bg-[#003459] border-[#FFE7BA] border-1 w-[200px] h-[48px] rounded-[50px] flex items-center p-1">
                  <div className="w-[40px] h-[40px] rounded-full bg-[#FFE7BA] flex items-center justify-center flex-shrink-0">
                    <img
                      src="/assets/img/user.svg"
                      alt="User Icon"
                      className="w-5 h-5"
                    />
                  </div>
                  <p className="text-[#FDFDFD] text-[16px] font-medium flex-1 text-center pr-4">
                    {username}
                  </p>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                 <LogOut/>
                </button>
              </div>
            </>
          ) : (
            <>
              <a
                href="/Register"
                className="bg-[#003459] text-white px-10 py-3 rounded-full font-bold text-sm hover:opacity-90 transition-all"
              >
                Join the community
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
