"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            Asawari Publications
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-500">
              Home
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500">
              Gallery
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-500">
              Request a book
            </Link>
            <Link
              href="/contact-us"
              className="text-gray-600 hover:text-blue-500"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2">
          <Link href="/" className="block text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-500">
            Gallery
          </Link>
          <Link href="#" className="block text-gray-700 hover:text-blue-500">
            Request a book
          </Link>
          <Link
            href="/contact-us"
            className="text-gray-600 hover:text-blue-500"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
