import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = <>
        <ul className={`xl:flex flex-row gap-2 duration-300 top-12 md:top-[3rem] lg:top-16 absolute xl:static ${open ? 'left-0' : '-left-60'} p-10 xl:p-0 shadow-lg xl:shadow-none no-underline xl:gap-6 text-base xl:text-xl z-50 font-bold bg-white`}>
            <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2 '} to='/'>Home</NavLink></li>
            <li className="pb-1 xl:pb-0"><NavLink className={'focus:border-b-2 '} to='/form'>Add Student</NavLink></li>
        </ul>
    </>


    return (
        <nav className="flex items-center px-2 xl:px-4 py-2 xl:py-4 justify-between m-auto text-xl font-medium ">
            <div className="flex items-center xl:hidden">
                <div className="xl:hidden" onClick={() => setOpen(!open)}>
                    {
                        open == true ? <IoMdClose className="text-2xl " /> : <RiMenu2Line className="text-2xl " />
                    }
                </div>

                <div className="logo flex text-base xl:hidden items-center">
                    <h2 className="text-blue-600 text-xl font-extrabold">Student Portal</h2>
                </div>
            </div>

            <div className="logo hidden xl:flex items-center ">
                <h2 className="text-blue-600 text-3xl font-extrabold">Student Portal</h2>
            </div>


            <div className="flex flex-col xl:gap-8 xl:flex-row items-center">


                <div>
                    {links}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;