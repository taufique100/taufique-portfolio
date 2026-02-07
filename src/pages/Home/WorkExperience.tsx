import React, { useState } from "react";
import { Check, Dot } from "lucide-react";
import SpeqtoLogo from "@/assets/speqtoLogo.png";

type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  badgeText?: React.ReactNode;
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

export default function WorkExperience() {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const active = experiences.find((x) => x.id === activeId)!;

  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl sm:px-2 pb-14 pt-6">
        <h2 className="text-4xl font-bold tracking-tight">Work Experience</h2>
        <p className="mt-3 text-white/60">
          I switch a lot of companies. It&apos;s mostly about the culture.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left selector */}
          <div className="lg:col-span-4">
            <div className="relative pl-6">
              {/* vertical line */}
              <div className="absolute left-2 top-2 h-[calc(100%-8px)] w-px bg-white/10" />

              <div className="space-y-5">
                {experiences.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={[
                        "group w-full text-left flex items-center gap-3 rounded-xl px-4 py-3",
                        "transition border",
                        isActive
                          ? "bg-white/5 border-white/10"
                          : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10",
                      ].join(" ")}
                    >
                      {/* small circle marker on the line */}
                      <span className="absolute left-[3px]">
                        <span
                          className={[
                            "block h-2.5 w-2.5 rounded-full",
                            isActive
                              ? "bg-cyan-400"
                              : "bg-white/20 group-hover:bg-white/30",
                          ].join(" ")}
                        />
                      </span>

                      {/* badge */}
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10">
                        <span className="text-sm font-semibold text-white/70">
                          {item.badgeText ?? "•"}
                        </span>
                      </span>

                      <div className="min-w-0">
                        <p className="truncate text-lg font-medium text-white/80">
                          {item.company}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right details */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <h3 className="text-2xl sm:text-3xl font-bold">
                {active.role}{" "}
                <span className="text-cyan-400">@{active.company}</span>
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/60">
                <span className="text-sm tracking-wide">{active.period}</span>
                <span className="text-white/30">•</span>
                <span className="text-sm">{active.location}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {active.highlights.map((text, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <Check className="mt-0.5 h-5 w-5 text-cyan-400" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              {/* optional: subtle glow */}
              <div className="pointer-events-none mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
