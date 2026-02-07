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
    images: [
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=INNOPATH+Dashboard",
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=INNOPATH+Billing",
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=INNOPATH+Reports",
    ],
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
    images: [
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=QVANI+Wallet",
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=QVANI+Swap",
      "https://placehold.co/1600x900/0b0b0b/22d3ee?text=QVANI+Transactions",
    ],
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
    liveUrl: "",
    githubUrl: "",
    images: [
      "https://placehold.co/1600x900?text=Kaamvala+Dashboard",
      "https://placehold.co/1600x900?text=Kaamvala+Jobs",
      "https://placehold.co/1600x900?text=Kaamvala+Applications",
    ],
  },
];
