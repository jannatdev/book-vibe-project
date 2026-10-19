import Image from 'next/image';
import React from 'react';
import Logo from '@/app/asset/book.ico'
import Link from 'next/link';

const Navbar = () => {

    const link = <>
      <li><Link href={'/books'}>Books</Link></li>
      <li><Link href={'/listedBooks'}>Listed Books</Link></li>
      
    </>
    return (
       
    <div className="max-w-7xl mx-auto px-5">
    <div className="navbar min-h-20 border-b border-gray-200 bg-white px-0 flex items-center justify-between gap-80">

        {/* Left - Logo & Brand */}
        <div className="navbar-start">
        <div className="dropdown">
            <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost px-2 lg:hidden"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
                />
            </svg>
            </div>

            <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-10 mt-3 w-48 rounded-lg border border-gray-100 bg-white p-2 shadow-lg"
            >
            {link}
            </ul>
        </div>

        <div className="flex items-center justify-between gap-10">

            <Link href={'/'} className='flex items-center gap-2'>
              <Image
            src={Logo}
            width={42}
            height={42}
            alt="Book Vibe Logo"
            />
            
            <h2 className="text-xl font-bold tracking-tight text-gray-900">Book Vibe</h2>
             
            
            </Link>
            

           
            
        </div>
        </div>

        {/* Center - Navigation */}
        <div className="navbar-center hidden md:flex ">
        <ul className="menu menu-horizontal gap-2">
            {link}
        </ul>
        </div>

        {/* Right - Authentication */}
        <div className="navbar-end gap-2">
        <button className="btn btn-ghost font-medium">
            Sign In
        </button>

        <button className="btn btn-neutral rounded-lg px-5">
            Sign Up
        </button>
        </div>

    </div>
    </div>


    );
};

export default Navbar;