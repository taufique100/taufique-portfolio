import { certificates } from "@/data/certificates";
import { Award, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Certifications() {
  const [active, setActive] = useState<null | typeof certificates[0]>(null);

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-4xl font-bold">Certifications & Training</h2>
        <p className="mt-3 text-white/60 max-w-2xl">
          Industry-recognized certifications and formal training validating
          technical skills and continuous learning.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl flex flex-col justify-between border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-cyan-400 uppercase tracking-wide">
                    {cert.category}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <Award className="h-6 w-6 text-cyan-400/70" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs rounded-full border border-white/10 bg-white/5 px-3 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <button
                  onClick={() => setActive(cert)}
                  className="flex-1 rounded-xl border border-white/10 bg-black/40 py-2 text-sm hover:bg-black/60 transition"
                >
                  View Certificate
                </button>

                {cert.credentialUrl && (
                  <Link
                    to={cert.credentialUrl}
                    target="_blank"
                    className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="max-w-4xl w-full bg-[#0b0b0b] rounded-2xl overflow-hidden border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <h4 className="font-semibold">{active.title}</h4>
              <button className="cursor-pointer" onClick={() => setActive(null)}>
                <X />
              </button>
            </div>
            <img
              src={active.imageUrl}
              alt={active.title}
              className="w-full max-h-[80vh] object-contain bg-black py-2"
            />
          </div>
        </div>
      )}
    </section>
  );
}
