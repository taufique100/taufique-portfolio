import Qvani1 from '@/assets/Qvani/Qvani1.png'
import Qvani2 from '@/assets/Qvani/Qvani2.png'
import Qvani3 from '@/assets/Qvani/Qvani3.png'
import Qvani4 from '@/assets/Qvani/Qvani4.png'

import Kaamwala1 from '@/assets/Qvani/Kaamwala1.png'
import Kaamwala2 from '@/assets/Qvani/kaamwala2.png'
import Kaamwala3 from '@/assets/Qvani/Kaamwala3.png'
import Kaamwala4 from '@/assets/Qvani/Kaamwala4.png'

import Lims1 from '@/assets/LIMS/image1.png'
import Lims2 from '@/assets/LIMS/image2.png'
import Lims3 from '@/assets/LIMS/image3.png'
import Lims4 from '@/assets/LIMS/image4.png'
import Lims5 from '@/assets/LIMS/image5.png'
import Lims6 from '@/assets/LIMS/image6.png'
import Lims7 from '@/assets/LIMS/image7.png'
import Lims8 from '@/assets/LIMS/image8.png'

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  descriptionPoints: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  images: string[]; // placeholders for now
};

export const projects: Project[] = [
  {
    id: "innopath-lims",
    title: "INNOPATH (LIMS)",
    subtitle: "Laboratory Information & Management System",
    duration: "Jan 2025 – Present",
    descriptionPoints: [
      "Built and scaled a multi-site Laboratory Information Management System supporting 3,500+ clients across 7+ Indian states.",
      "Led development of 10+ core business modules including sample lifecycle management, lab reporting, billing, dashboards, and audit workflows.",
      "Architected a modular and reusable frontend using React and Redux Toolkit for real-time lab operations handling 12,000+ samples daily.",
      "Implemented secure authentication and authorization using JWT, RBAC, and session management to protect healthcare and financial data.",
      "Delivered analytics dashboards and reporting features with PDF/Excel exports to improve operational visibility for lab administrators.",
    ],
    techStack: [
      "React.js",
      "Redux Toolkit",
      "TypeScript",
      "REST APIs",
      "JWT",
      "MySQL",
      "Chart.js",
    ],
    liveUrl: "https://lis9.ldpldiagnostics.in/login",
    githubUrl: "",
    images: [Lims1, Lims2, Lims3, Lims4, Lims5, Lims6, Lims7, Lims8],
  },
  {
    id: "qvani",
    title: "Qvani",
    subtitle: "Crypto Exchange & Investment Platform",
    duration: "Dec 2023 – Apr 2024",
    descriptionPoints: [
      "Built secure and high-performance React interfaces for wallets, asset balances, swaps, withdrawals, and transaction history.",
      "Integrated REST APIs and blockchain services using Web3.js / Ethers.js for secure asset transfers and transaction validation.",
      "Implemented authentication, authorization, and session security to protect sensitive financial data.",
      "Optimized application performance using Redux-based state management for smooth UX during high-frequency data updates.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "Redux",
      "REST APIs",
      "Web3.js",
      "Ethers.js",
      "Firebase",
    ],
    liveUrl: "https://qvani.com/",
    githubUrl: "",
    images: [Qvani1, Qvani2, Qvani3, Qvani4],
  },
  {
    id: "kaamvala",
    title: "Kaamvala",
    subtitle: "Job Portal (Employer & Candidate Panels)",
    duration: "Apr 2024 – Sep 2024",
    descriptionPoints: [
      "Developed job posting, application tracking, and hiring dashboards supporting end-to-end recruitment workflows.",
      "Integrated frontend with Node.js REST APIs for authentication and job-related workflows.",
      "Enabled real-time notifications using Firebase to improve user engagement.",
      "Designed and developed RESTful APIs using Node.js and Express.js for job postings, applications, and user profiles.",
      "Implemented JWT-based authentication and role-based authorization across multiple modules.",
      "Optimized MongoDB schemas and queries to support efficient search, filtering, and application tracking.",
    ],
    techStack: [
      "React.js",
      "Material-UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "JWT",
      "Firebase",
    ],
    liveUrl: "https://kaamvala.com/",
    githubUrl: "",
    images: [Kaamwala1, Kaamwala2, Kaamwala3, Kaamwala4],
  },
];
