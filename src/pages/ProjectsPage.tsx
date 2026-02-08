import React, { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projectsData";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { BulletPoint } from "@/components/BulletPoint";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function ProjectsPage() {
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);

  const activeProject = useMemo(
    () => projects.find((p) => p.id === activeProjectId) ?? projects[0],
    [activeProjectId],
  );

  return (
    <>
      <SEO 
        title="Projects - Taufique Ali | React, Node.js, MERN Stack Projects"
        description="Explore my portfolio of full-stack projects built with React.js, Next.js, Node.js, MongoDB, Express.js, TypeScript. Real-world applications including LIMS, healthcare systems, and enterprise solutions."
        keywords="react projects, nodejs projects, mern stack projects, full stack projects, javascript projects, typescript projects, nextjs projects, mongodb projects, rest api projects, web development portfolio, software developer projects"
        canonical="https://taufiqueali.dev1.cloud/projects"
      />
      <section id="projects" className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          {/* <p className="text-cyan-400 text-sm tracking-widest uppercase mb-2">Portfolio</p> */}
          <h1 className="text-3xl sm:text-3xl font-bold tracking-tight mb-4">
            Projects
          </h1>
          <p className="text-white/60 text-sm max-w-2xl leading-relaxed">
            A curated selection of impactful projects from my professional work
            experience, showcasing real-world systems built with scalable
            architecture, secure authentication, robust APIs, payments, and
            performance-focused UI.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex gap-2 flex-wrap mb-10">
          {projects.map((p) => {
            const active = p.id === activeProjectId;
            return (
              <button
                key={p.id}
                onClick={() => setActiveProjectId(p.id)}
                className={[
                  "rounded-xl px-5 py-2.5 text-sm font-medium border transition-all",
                  active
                    ? "border-cyan-400/40 bg-cyan-500/15 text-cyan-200 shadow-lg shadow-cyan-500/20"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20",
                ].join(" ")}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Viewer */}
        <ProjectViewer project={activeProject} />
      </div>
    </section>
    </>
  );
}

function ProjectViewer({ project }: { project: Project }) {
  const [activeImage, setActiveImage] = useState(project.images[0]);
  const [expanded, setExpanded] = useState(false);

  React.useEffect(() => {
    setActiveImage(project.images[0]);
    setExpanded(false);
  }, [project.id]);

  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden shadow-2xl">
      {/* Main Image */}
      <div className="bg-black relative group">
        <img
          src={activeImage}
          alt={`${project.title} screenshot`}
          className="w-full h-[280px] sm:h-[400px] md:h-[480px] object-cover opacity-95 group-hover:opacity-100 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Thumbnails */}
      <div className="border-t border-white/10 bg-black/60 backdrop-blur-sm">
        <div className="flex gap-2 overflow-x-auto px-4 py-3 scrollbar-thin themed-scrollbar">
          {project.images.map((img, idx) => {
            const isActive = img === activeImage;
            return (
              <button
                key={img + idx}
                onClick={() => setActiveImage(img)}
                className={[
                  "shrink-0 rounded-lg overflow-hidden border-2 transition-all",
                  isActive
                    ? "border-cyan-400/60 shadow-lg shadow-cyan-500/30 scale-105"
                    : "border-white/10 hover:border-white/30 hover:scale-105",
                ].join(" ")}
              >
                <img
                  src={img}
                  alt={`${project.title} thumbnail ${idx + 1}`}
                  className={[
                    "h-16 w-28 sm:h-20 sm:w-36 object-cover",
                    isActive ? "opacity-100" : "opacity-70 hover:opacity-100",
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-cyan-400 font-semibold">
          {project.subtitle}
        </p>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {project.title}
          </h3>

          {/* Links */}
          <div className="flex gap-3 flex-wrap">
            {project.liveUrl ? (
              <Link
                to={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 px-5 py-2.5 text-sm font-medium text-cyan-200 hover:bg-cyan-500/30 transition-all shadow-lg shadow-cyan-500/20"
              >
                Live <ExternalLink className="h-4 w-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-5 py-2.5 text-sm text-white/50">
                Live (private)
              </span>
            )}

            {project.githubUrl ? (
              <Link
                to={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white/10 hover:border-white/20 transition-all"
              >
                Code <Github className="h-4 w-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center rounded-xl border border-white/10 bg-black/40 px-5 py-2.5 text-sm text-white/50">
                Code (private)
              </span>
            )}
          </div>
        </div>
        <div className="mt-7 space-y-3">
          {(expanded
            ? project.descriptionPoints
            : project.descriptionPoints.slice(0, 3)
          ).map((point, idx) => (
            <BulletPoint key={idx} text={point} />
          ))}

          {project.descriptionPoints.length > 3 && (
            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              {expanded ? (
                <>
                  Show Less <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Show More <ChevronDown size={16} />
                </>
              )}
            </button>
          )}
        </div>

        {/* Tech Stack */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-sm font-medium text-white/70 mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
