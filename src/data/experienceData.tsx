import React from "react";
import SpeqtoLogo from "@/assets/speqtoLogo.png";

export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  badgeText?: React.ReactNode;
  techStack?: string[];
};

export const experiences: Experience[] = [
  {
    id: "itdose",
    company: "ItDose Infosystem Pvt. Ltd.",
    role: "Software Developer",
    period: "Jan 2025 – Present",
    location: "Noida, Uttar Pradesh, India",
    highlights: [
      "Led frontend development for a large-scale Laboratory Information & Management System (LIMS) with reusable and scalable UI components.",
      "Integrated React frontend with secure REST APIs enabling real-time sample tracking and transactional workflows.",
      "Designed and implemented role-based access control (RBAC) and JWT-based authentication for healthcare and finance modules.",
      "Integrated multiple payment gateways including HDFC Smart Gateway and Razorpay with robust error handling.",
      "Collaborated with backend and DevOps teams for smooth deployments, CI/CD pipelines, and stable releases.",
      "Conducted code reviews, followed Git branching strategies, and mentored junior developers.",
    ],
    badgeText: (
      <img
        src="https://www.itdoseinfo.com/assets/logoitdose-CsMdzkJU.png"
        alt="ItDose Infosystem logo"
        className="h-8 w-8 object-contain"
      />
    ),
  },
  {
    id: "speqto",
    company: "Speqto Technologies Pvt. Ltd.",
    role: "Associate Software Developer",
    period: "Sep 2023 – Dec 2024",
    location: "Noida Sector-62, Uttar Pradesh, India",
    highlights: [
      "Built responsive and user-centric enterprise applications using React.js, Tailwind CSS, and Material-UI.",
      "Contributed to backend development using Node.js, Express.js, and MongoDB for RESTful services.",
      "Implemented authentication, authorization, and email notifications using JWT and SMTP services.",
      "Containerised frontend and backend applications using Docker for consistent development environments.",
      "Improved application performance through optimized API integration and structured state management.",
      "Participated in sprint planning, debugging sessions, and cross-team technical discussions.",
    ],
    badgeText: (
      <img
        src={SpeqtoLogo}
        alt="Speqto Technologies logo"
        className="h-8 w-8 object-contain"
      />
    ),
  },
];
