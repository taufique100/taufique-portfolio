import React, { useMemo, useState } from "react";
import { experiences, type Experience } from "@/data/experienceData";
import { Briefcase } from "lucide-react";
import { BulletPoint } from "@/components/BulletPoint";
import SEO from "@/components/SEO";

export default function ExperiencePage() {
  const [activeId, setActiveId] = useState(experiences[0]?.id);

  const active = useMemo(
    () => experiences.find((x) => x.id === activeId) ?? experiences[0],
    [activeId],
  );

  return (
    <>
      <SEO 
        title="Experience - Taufique Ali | Software Developer Work History"
        description="2+ years of professional experience as Full Stack Developer at ItDose Infosystem and Speqto Technologies. Expertise in React.js, Node.js, TypeScript, MongoDB, REST APIs, and enterprise application development."
        keywords="software developer experience, full stack developer work history, react developer experience, nodejs developer experience, mern stack experience, professional developer portfolio"
        canonical="https://taufiqueali.dev1.com/experience"
      />
      <section id="experience" className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tight">Experience</h2>
            <p className="mt-3 max-w-2xl text-white/60 leading-7">
              Worked on real-world healthcare, crypto, and fintech platforms,
              developing scalable interfaces, security-critical workflows, and
              integration-heavy features for daily use.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-white/50">
            <Briefcase className="h-5 w-5" />
            <span className="text-sm">{experiences.length} roles</span>
          </div>
        </div>

        {/* Layout */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Left selector */}
          <div className="lg:col-span-4">
            <div className="relative pl-6">
              {/* Vertical line */}
              <div className="absolute left-2 top-2 h-[calc(100%-8px)] w-px bg-white/10" />

              <div className="space-y-4">
                {experiences.map((item) => {
                  const isActive = item.id === activeId;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={[
                        "group relative w-full text-left flex items-center gap-3 rounded-2xl px-4 py-3 border transition",
                        isActive
                          ? "bg-white/5 border-white/10"
                          : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10",
                      ].join(" ")}
                    >
                      {/* Marker */}
                      <span className="absolute left-[-21px]">
                        <span
                          className={[
                            "block h-2.5 w-2.5 rounded-full",
                            isActive
                              ? "bg-cyan-400"
                              : "bg-white/20 group-hover:bg-white/30",
                          ].join(" ")}
                        />
                      </span>

                      {/* Badge */}
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 border border-white/10 overflow-hidden">
                        {item.badgeText ? (
                          item.badgeText
                        ) : (
                          <span className="text-sm font-semibold text-white/70">
                            {item.company?.[0] ?? "•"}
                          </span>
                        )}
                      </span>

                      <div className="min-w-0">
                        <p className="truncate text-base font-semibold text-white/80">
                          {item.company}
                        </p>
                        <p className="truncate text-sm text-white/50">
                          {item.period}
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
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-bold">
                {active.role}{" "}
                <span className="text-cyan-400">@{active.company}</span>
              </h3>

              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-white/60">
                <span className="text-sm tracking-wide">{active.period}</span>
                <span className="text-white/30">•</span>
                <span className="text-sm">{active.location}</span>
              </div>

              <div className="mt-7 space-y-4">
                {active.highlights.map((text, idx) => (
                  <BulletPoint key={idx} text={text} />
                ))}
              </div>

              {/* Optional: tech chips if you add it later */}
              {active.techStack?.length ? (
                <div className="mt-8">
                  <p className="text-sm text-white/60 mb-3">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {active.techStack.map((t: string) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
