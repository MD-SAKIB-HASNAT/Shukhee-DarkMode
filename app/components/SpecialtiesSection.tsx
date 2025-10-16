"use client";
import React from "react";
import Image from "next/image";

const specialties = [
  { name: "Anesthesiology", icon: "💉" },
  { name: "Dentistry", icon: "🦷" },
  { name: "General Physician", icon: "👨‍⚕️" },
  { name: "Hepatology", icon: "🫀" },
  { name: "Neurosurgery", icon: "🧠" },
  { name: "Cardiology", icon: "❤️" },
  { name: "Dermatology and Venereology", icon: "💄" },
  { name: "General Surgery", icon: "🔪" },
  { name: "Internal Medicine", icon: "🫁" },
  { name: "Nutritionist", icon: "🥦" },
  { name: "Psychiatry", icon: "🧘" },
  { name: "Endocrinology", icon: "🧬" },
  { name: "Gynecology and Obstetrics", icon: "👶" },
  { name: "Nephrology", icon: "💧" },
  { name: "Oncology", icon: "🎗️" },
  { name: "Colorectal Surgery", icon: "🧻" },
  { name: "Gastroenterology", icon: "🍽️" },
  { name: "Haematology", icon: "🩸" },
  { name: "Neuromedicine", icon: "🧠" },
  { name: "Orthopedics", icon: "🦴" },
];

 const handleClick = (name:String) => {
    alert(`You clicked on ${name}`)
  };


export default function SpecialtiesSection() {
  return (
    <section className="bg-[#FCF4FC] dark:bg-gray-800 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-white">
          Consult with top doctors across <span className="text-pink-600">30+ specialties</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mt-2">
          Get expert advice from our doctors
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
          {specialties.map((s) => (
            <div
              key={s.name}
              onClick={() => handleClick(s.name)}
              className="border-2 border-pink-200 dark:border-gray-700 rounded-xl py-6 px-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 hover:shadow-md hover:scale-[1.02] transition-all duration-300"
            >
              <div className="text-3xl text-pink-500 dark:text-pink-400 mb-2">
                {s.icon}
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-sm font-medium text-center">
                {s.name}
              </p>
            </div>
          ))}
        </div>

        
        <div className="flex justify-center items-center mt-8 gap-4 text-pink-600 dark:text-pink-400">
          <button className="hover:text-pink-800 dark:hover:text-pink-300 transition">
            ◀
          </button>
          <button className="hover:text-pink-800 dark:hover:text-pink-300 transition">
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
