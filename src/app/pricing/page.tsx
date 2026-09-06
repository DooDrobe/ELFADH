"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUp } from "lucide-react";
import coursesData from "@/data/courses.json";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl tracking-tight">
            Course Catalog & Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Transparent pricing for our high-quality English programs. Find the right fit for your goals.
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
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-6 pt-4 pb-6 text-sm text-gray-600 bg-gray-50 border-t border-gray-200">
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Duration</p>
                          <p>{course.duration}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Meetings</p>
                          <p>{course.meetings}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 mb-1">Class Size</p>
                          <p>{course.participants}</p>
                        </div>
                        <div className="sm:hidden">
                          <p className="font-semibold text-gray-900 mb-1">Fee</p>
                          <p className="text-madani-blue font-semibold">{course.fee}</p>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-200 flex justify-end">
                         <a 
                          href={`https://wa.me/6281378037428?text=Hello%20EL-FADH,%20I'm%20interested%20in%20the%20${encodeURIComponent(course.name)}%20class.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-madani-blue border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        >
                          Enroll Now via WhatsApp
                        </a>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
}
