"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-elfadh-red">EL-FADH</span>
              <span className="font-semibold text-2xl text-gray-800 ml-2">Bimbel</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href="/" className="text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            
            <HeadlessMenu as="div" className="relative">
              <HeadlessMenu.Button className="flex items-center text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
                Programs
                <ChevronDown className="ml-1 w-4 h-4" />
              </HeadlessMenu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <Link
                          href="/programs"
                          className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                        >
                          SD / SMP / SMA
                        </Link>
                      )}
                    </HeadlessMenu.Item>
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <Link
                          href="/programs"
                          className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                        >
                          Test Preparation
                        </Link>
                      )}
                    </HeadlessMenu.Item>
                  </div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>

            <Link href="/pricing" className="text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            
            <a 
              href="https://wa.me/6281378037428" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-elfadh-red text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              Home
            </Link>
            <Link href="/programs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              Programs
            </Link>
            <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              Pricing
            </Link>
            <a 
              href="https://wa.me/6281378037428" 
              target="_blank"
              rel="noopener noreferrer" 
              className="block px-3 py-2 rounded-md text-base font-medium text-elfadh-red hover:bg-gray-50"
            >
              Contact Us (WhatsApp)
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
