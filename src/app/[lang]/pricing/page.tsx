"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronUp } from "lucide-react";
import coursesData from "@/data/courses.json";
import { useEffect, useState } from "react";
import { Locale } from "@/dictionaries/dictionaries";
import { motion, AnimatePresence } from "framer-motion";

export default function PricingPage({ params: { lang } }: { params: { lang: Locale } }) {
  const [dict, setDict] = useState<any>(null);

  useEffect(() => {
    import(`@/dictionaries/${lang}.json`).then((module) => {
      setDict(module.default.pricing);
    });
  }, [lang]);

  if (!dict) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            {dict.title}
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            {dict.description}
          </p>
        </div>

        <div className="w-full space-y-4">
          {coursesData.map((course) => (
            <Disclosure key={course.id}>
              {({ open }) => (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <Disclosure.Button className="flex w-full justify-between items-center px-6 py-5 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-madani-blue focus-visible:ring-opacity-75 transition-colors">
                    <span className="text-lg font-bold text-gray-900">{course.name}</span>
                    <div className="flex items-center">
                      <span className="hidden sm:block text-madani-blue font-semibold mr-4">
                        {course.fee}
                      </span>
                      <ChevronUp
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-500 transition-transform duration-200`}
                      />
                    </div>
                  </Disclosure.Button>
                  <AnimatePresence>
                    {open && (
                      <Disclosure.Panel static as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-4 pb-6 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">{dict.duration}</p>
                              <p>{course.duration}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">{dict.meetings}</p>
                              <p>{course.meetings}</p>
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 mb-1">{dict.class_size}</p>
                              <p>{course.participants}</p>
                            </div>
                            <div className="sm:hidden">
                              <p className="font-semibold text-gray-900 mb-1">{dict.fee}</p>
                              <p className="text-madani-blue font-semibold">{course.fee}</p>
                            </div>
                          </div>
                          
                          <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                             <a 
                              href={`https://wa.me/6281378037428?text=${encodeURIComponent(`${dict.enroll_msg} ${course.name}`)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-madani-blue border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                            >
                              {dict.enroll}
                            </a>
                          </div>
                        </div>
                      </Disclosure.Panel>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
