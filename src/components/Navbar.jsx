import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome } from "react-icons/hi"; 
import { MdOutlineAccessTime, MdOutlineAnalytics } from "react-icons/md";

const Navbar = () => {
    
    const activeStyle = "btn btn-sm md:btn-md bg-[#2D4F40] hover:bg-[#233f33] text-white border-none rounded-lg flex items-center gap-2 px-4 shadow-md";
    const normalStyle = "btn btn-ghost btn-sm md:btn-md text-[#4A5568] hover:bg-gray-100 flex items-center gap-2 px-3";

    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
            {/* Main Container */}
            <div className="max-w-7xl mx-auto navbar px-4 sm:px-6 lg:px-8 h-16 md:h-20">
                
                {/*Logo Section */}
                <div className="navbar-start">
                    <NavLink to="/" className="text-xl md:text-2xl font-black tracking-tight flex items-center">
                        <span className="text-[#1A202C]">Keen</span>
                        <span className="text-[#2D4F40]">Keeper</span>
                    </NavLink>
                </div>

                <div className="navbar-center hidden lg:flex">
                </div>

                <div className="navbar-end">
                    <div className="hidden sm:flex items-center gap-2 md:gap-6">
                        <NavLink 
                            to="/" 
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            <HiOutlineHome className="text-xl" />
                            <span className="font-semibold">Home</span>
                        </NavLink>

                        <NavLink 
                            to="/timeline" 
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            <MdOutlineAccessTime className="text-xl" />
                            <span className="font-semibold">Timeline</span>
                        </NavLink>

                        <NavLink 
                            to="/stats" 
                            className={({ isActive }) => isActive ? activeStyle : normalStyle}
                        >
                            <MdOutlineAnalytics className="text-xl" />
                            <span className="font-semibold">Stats</span>
                        </NavLink>
                    </div>

                    <div className="dropdown dropdown-end sm:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle text-[#2D4F40]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow-xl bg-white rounded-box w-52 border border-gray-100">
                            <li><NavLink to="/" className="flex items-center gap-2 py-3"><HiOutlineHome /> Home</NavLink></li>
                            <li><NavLink to="/timeline" className="flex items-center gap-2 py-3"><MdOutlineAccessTime /> Timeline</NavLink></li>
                            <li><NavLink to="/stats" className="flex items-center gap-2 py-3"><MdOutlineAnalytics /> Stats</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;