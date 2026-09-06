"use client";

import { useState } from "react";
import { BookOpen, GraduationCap, School } from "lucide-react";

export default function GradeSelectorTabs() {
  const [activeTab, setActiveTab] = useState("SD");

  const curriculums = {
    SD: {
      title: "English for SD (Primary)",
      description: "Building a strong foundation with fun and interactive learning.",
      features: [
        "Basic Vocabulary & Grammar",
        "Fun Interactive Speaking Games",
        "School PR Assistance",
        "Confidence Building",
      ],
      icon: <BookOpen className="w-6 h-6" />
    },
    SMP: {
      title: "English for SMP (Junior High)",
      description: "Leveling up English skills for academics and daily conversation.",
      features: [
        "Advanced Grammar & Tenses",
        "Conversational Practice",
        "National Exam Preparation",
        "Reading & Writing Mastery",
      ],
      icon: <School className="w-6 h-6" />
    },
    SMA: {
      title: "English for SMA (Senior High)",
      description: "Preparing for university, TOEFL, and global communication.",
      features: [
        "Academic Reading & Writing",
        "Debate & Public Speaking",
        "University Entrance Prep (UTBK)",
        "TOEFL/TOEIC Introduction",
      ],
      icon: <GraduationCap className="w-6 h-6" />
    },
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="flex border-b border-gray-200">
        {(Object.keys(curriculums) as Array<keyof typeof curriculums>).map((grade) => (
          <button
            key={grade}
            className={`flex-1 py-4 px-6 text-center font-semibold text-lg border-b-2 transition-colors duration-200 flex items-center justify-center gap-2 ${
              activeTab === grade
                ? "border-madani-blue text-madani-blue bg-blue-50"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab(grade)}
          >
            {curriculums[grade].icon}
            {grade}
          </button>
        ))}
      </div>

      <div className="p-8 bg-white shadow-sm rounded-b-lg border border-t-0 border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {curriculums[activeTab as keyof typeof curriculums].title}
        </h3>
        <p className="text-gray-600 mb-6 text-lg">
          {curriculums[activeTab as keyof typeof curriculums].description}
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {curriculums[activeTab as keyof typeof curriculums].features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-madani-orange mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
