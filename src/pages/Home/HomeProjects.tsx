import { BulletPoint } from "@/components/BulletPoint";
import { projects } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeProjects() {
  const topProjects = projects.slice(0, 3);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Projects</h2>
            <p className="mt-2 text-white/60">
              Selected full-stack projects from real production systems.
            </p>
          </div>

          <Link
            to="/projects"
            className="text-sm flex gap-2 items-center justify-center text-cyan-300 hover:text-cyan-200 transition"
          >
            View all <ArrowRight className="mb-0" size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {topProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
            >
              {/* Image (shorter height) */}
              <img
                src={p.images?.[0]}
                alt={p.title}
                className="h-32 w-full object-cover bg-black"
              />

              {/* Content */}
              <div className="p-4">
                <p className="text-xs uppercase tracking-wide text-cyan-400/90">
                  {p.subtitle}
                </p>

                <h3 className="mt-1 text-lg font-semibold">{p.title}</h3>

                {/* 2 bullets only */}
                <div className="mt-3 space-y-2">
                  {p.descriptionPoints.slice(0, 2).map((text, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <BulletPoint text="" />
                      {text}
                    </div>
                  ))}
                </div>

                {/* Tech (single line) */}
                <p className="mt-3 text-xs text-white/50 truncate">
                  {p.techStack.slice(0, 5).join(" • ")}
                </p>

                {/* CTA */}
                <div className="mt-4">
                  <Link
                    to="/projects"
                    className="text-sm text-cyan-300 hover:text-cyan-200 transition"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
