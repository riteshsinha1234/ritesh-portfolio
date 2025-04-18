"use client";

import store from "@/hooks/store";
import { themesStore } from "@/hooks/theme";
import React from "react";

const experiences = [
  {
    company: "M.D. TRADELINE",
    period: "January 2024 - Present",
    role: "Software Engineer",
    description: `• Developing a comprehensive B2B seller onboarding and partnership to facilitate seamless customer onboarding on a global scale.

• Developed the QwikStone Web Platform, Dealer Portal, and Seller Portal.

• Oversaw daily software operations and collaborated with the Product Manager, IT Lead, and R&D teams to enhance product development.`,
    technologies: ["Next.js", "Node.js", "PostgreSQL", "MongoDB", "AWS"],
  },
  {
    company: "Puja Purohit Private Limited",
    period: "Jane 2022 - December 2023",
    role: "Software Developer",
    description: `• Developed and fixed screens in Puja Purohit and iPurohit application, including Bug Fixing, UI design with Flutter, GraphQL and GetX state management.

• Integrated backend API and mutations in GraphQL, Dart and Next.js which improved the app response time and complexity by 30%.

• Integrated Google Analytics & Ads across chrome and youtube, and performed research to increase the versatile growth of existig platforms.`,
    technologies: ["API", "GraphQL", "Dart", "Flutter", "MongoDB"],
  },
  {
    company: "Radiance Infotech",
    period: "July 2021 - December 2021",
    role: "Application Developer",
    description: `• Developed core features such as authentication using Dart, Firebase, and Flutter, fixed bugs on Android and iOS applications, and integrated Node.js APIs.


• Optimised code for better performance and tested for bugs and errors. Monitored and upgraded the app for improved performance.`,
    technologies: ["Dart", "Flutter", "Firebase", "Figma"],
  },
  {
    company: "Akcellence Management Services OPC Private Limited",
    period: "January 2021 - June 2021",
    role: "Application Developer",
    description: `• Developed Android and iOS applications using Flutter framework. Improved code structure, standards and efficient user interface. 

• Worked on building multiple Flutter projects in a team demonstrating meticulous attention to detail & enhanced teamwork abilities at industry level.

• Used Dart language, Flutter Framework and Firebase as a back-end service. Used code versioning tools & followed SDLC standards.`,
    technologies: ["Dart", "Flutter", "Firebase", "Android", "iOS", "Figma"],
  },
];

const DetailExperience = () => {
  const theme = store((state) => state.theme);
  const currentTheme = themesStore[theme];

  return (
    <div className={`space-y-10 max-w-5xl ${currentTheme["text-300"]}`}>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row justify-between gap-5 border-b pb-8"
        >
          <div className="space-y-2 sm:w-1/2">
            <h3 className="text-xl font-semibold">{exp.company}</h3>
            <span className="inline-block bg-yellow-400 text-white px-3 py-1 rounded text-sm font-medium">
              {exp.period}
            </span>
          </div>
          <div className="space-y-2 sm:w-1/2">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-sm text-gray-300 whitespace-pre-line">
              {exp.description}
            </p>
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-white text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailExperience;
