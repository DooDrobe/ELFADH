"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: string) => {
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href={`/${lang}`} className="flex items-center gap-2">
              <div className="relative w-10 h-10 overflow-hidden rounded-md border border-gray-100">
                <Image 
                  src="/logo/elfadh-logo.jpg" 
                  alt="EL-FADH Bimbel Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-2xl text-elfadh-red tracking-tight hidden sm:block">EL-FADH</span>
            </Link>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <Link href={`/${lang}`} className="text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
              {dict.home}
            </Link>
            
            <HeadlessMenu as="div" className="relative">
              <HeadlessMenu.Button className="flex items-center text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
                {dict.programs}
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
                          href={`/${lang}/programs`}
                          className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                        >
                          {dict.programs_sd_smp_sma}
                        </Link>
                      )}
                    </HeadlessMenu.Item>
                    <HeadlessMenu.Item>
                      {({ active }) => (
                        <Link
                          href={`/${lang}/programs`}
                          className={`${active ? "bg-gray-100 text-gray-900" : "text-gray-700"} block px-4 py-2 text-sm`}
                        >
                          {dict.programs_test_prep}
                        </Link>
                      )}
                    </HeadlessMenu.Item>
                  </div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>

            <Link href={`/${lang}/pricing`} className="text-gray-700 hover:text-elfadh-red px-3 py-2 rounded-md text-sm font-medium">
              {dict.pricing}
            </Link>
            
            <a 
              href="https://wa.me/6281378037428" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-elfadh-red text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {dict.contact}
            </a>

            <div className="flex bg-gray-100 rounded-md p-1 border border-gray-200 ml-4">
              <button 
                onClick={() => switchLanguage('id')} 
                className={`px-2 py-1 text-xs rounded-sm font-bold ${lang === 'id' ? 'bg-white shadow-sm text-elfadh-red' : 'text-gray-500 hover:text-gray-700'}`}
              >
                ID
              </button>
              <button 
                onClick={() => switchLanguage('en')} 
                className={`px-2 py-1 text-xs rounded-sm font-bold ${lang === 'en' ? 'bg-white shadow-sm text-elfadh-red' : 'text-gray-500 hover:text-gray-700'}`}
              >
                EN
              </button>
            </div>
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
            <Link href={`/${lang}`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              {dict.home}
            </Link>
            <Link href={`/${lang}/programs`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              {dict.programs}
            </Link>
            <Link href={`/${lang}/pricing`} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-elfadh-red hover:bg-gray-50">
              {dict.pricing}
            </Link>
            <a 
              href="https://wa.me/6281378037428" 
              target="_blank"
              rel="noopener noreferrer" 
              className="block px-3 py-2 rounded-md text-base font-medium text-elfadh-red hover:bg-gray-50"
            >
              {dict.contact}
            </a>
            
            <div className="flex px-3 py-2 space-x-2">
              <button 
                onClick={() => switchLanguage('id')} 
                className={`px-3 py-1 text-sm rounded-md border ${lang === 'id' ? 'bg-elfadh-red text-white border-transparent' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                ID
              </button>
              <button 
                onClick={() => switchLanguage('en')} 
                className={`px-3 py-1 text-sm rounded-md border ${lang === 'en' ? 'bg-elfadh-red text-white border-transparent' : 'bg-white text-gray-700 border-gray-300'}`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
