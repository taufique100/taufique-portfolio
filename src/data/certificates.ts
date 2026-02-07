import gfgMerncertificate from "@/assets/certificates/gfg-mern-certificate.jpg";
import coreJavaCertificate from "@/assets/certificates/core java Certificate.jpg";
import cppEssentialTraining from "@/assets/certificates/cpp-essential-training.png";
import apiwebServicesCert from "@/assets/certificates/apiNwebServices.png";
import writeInternshipCert from "@/assets/certificates/internship certificate_page-0001.jpg";

export const certificates = [
  {
    id: "writo-react-internship-2023",
    title: "Internship – React.js Developer",
    issuer: "Writo Education Private Limited",
    date: "Jul 2023 - Sep 2023",
    category: "Internship",
    imageUrl: writeInternshipCert,
    credentialUrl: "", // (optional) add verification link if you have any
    skills: [
      "React.js Fundamentals",
      "Component-Based UI Development",
      "Hooks (useState, useEffect)",
      "React Router (Navigation)",
      "API Integration (REST)",
      "State Management Basics",
      "Responsive UI (HTML/CSS)",
      "Debugging & Fixing UI Issues",
    ],
  },
  {
    id: "full-stack-developer-bootcamp-gfg",
    title: "Full Stack Developer Bootcamp",
    issuer: "GeeksforGeeks",
    date: "2024",
    category: "Training",
    imageUrl: gfgMerncertificate,
    credentialUrl:
      "https://media.geeksforgeeks.org/courses/certificates/cacd57a0ff5b6931bf8b0fc0b6895b06.pdf",
    skills: [
      "React.js",
      "Redux & State Management",
      "Node.js",
      "Express.js",
      "RESTful API Development",
      "MongoDB",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Responsive Web Design",
      "Git & Version Control",
      "Deployment Fundamentals",
    ],
  },
  {
    id: "internshala-core-java",
    title: "Core Java",
    issuer: "Internshala",
    date: "Aug 2022",
    category: "Training",
    imageUrl: coreJavaCertificate,
    credentialUrl: "",
    skills: [
      "Java",
      "OOP Concepts",
      "Collections",
      "Exception Handling",
      "JavaFXML",
    ],
  },
  {
    id: "cpp-essential-training",
    title: "C++ Essential Training",
    issuer: "LinkedIn Learning",
    date: "Jul 2021",
    category: "Training",
    imageUrl: cppEssentialTraining, // better to use a C++ certificate image
    credentialUrl: "",
    skills: [
      "C++ Fundamentals",
      "Object-Oriented Programming (OOP)",
      "Pointers and Memory Management",
      "STL (Standard Template Library)",
      "Classes and Inheritance",
      "Exception Handling",
      "Basic Data Structures",
    ],
  },

  {
    id: "programming-foundations-apis-web-services",
    title: "Programming Foundations: APIs and Web Services (2019)",
    issuer: "LinkedIn Learning",
    date: "August 2021",
    category: "Training",
    imageUrl: apiwebServicesCert,
    credentialUrl: "",
    skills: [
      "Web Services Fundamentals",
      "REST APIs",
      "API Design Principles",
      "HTTP Methods & Status Codes",
      "Request Headers & Authentication",
      "Secure Web Services",
      "Error Handling & Exceptions",
      "Microservices Concepts",
    ],
  },
];
