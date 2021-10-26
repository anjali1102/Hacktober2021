import React from 'react'
import Logo from '../assets/images/svg/Logo'

function Navbar() {
  return (
    <nav className="py-12 flex   lg:justify-between  px-8">
      <div className=" flex flex-row sm:w-full sm:justify-center lg:justify-start">
        <Logo />
        <h1 className="px-2 text-xl text-center my-auto uppercase font-bold text-white">
          Crypto
        </h1>
      </div>
      <div className="hidden lg:flex lg:flex-row lg:justify-center space-x-8 text-white">
        <div className="flex flex-row justify-center my-auto space-x-4">
          <a href="www.google.com" className="px-2">
            Products
          </a>
          <a href="www.google.com" className="px-2">
            Features
          </a>
          <a href="www.google.com" className="px-2">
            About
          </a>
          <a href="www.google.com" className="px-2">
            Contact
          </a>
        </div>
        {/* <div className="flex flex-row justify-center items-center my-auto space-x-4">
          <a href="www.google.com" className="px-2">
            Login
          </a>
          <div className="w-0.5 h-6 bg-gray-700 opacity-50" />
          <a
            href="www.google.com"
            className="px-6 py-2 bg-brand-button rounded-full"
          >
            Register
          </a>
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
