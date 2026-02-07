// import React, { useMemo, useState } from "react";
// import { Check, ExternalLink, X, Award } from "lucide-react";
// import gfgMernCertificate from '../../assets/certificates/gfg-mern-certificate.jpg'

// type Certificate = {
//   id: string;
//   title: string;
//   issuer: string;
//   type?: "Certification" | "Training" | "Workshop";
//   date: string; // "Jan 2025"
//   skills: string[];
//   credentialUrl?: string;
//   imageUrl: string; // certificate image path
//   featured?: boolean;
// };

// const certificates: Certificate[] = [
//   {
//     id: "next-auth",
//     title: "Full Stack Developer Bootcamp",
//     issuer: "GeeksforGeeks",
//     type: "Training",
//     date: "Feb 2026",
//     skills: ["React.Js", "JavaScript", "NodeJs", "EpressJs", "MongoDB", "MySQL", "HTML5/CSS3", "Tailwind"],
//     credentialUrl: "https://media.geeksforgeeks.org/courses/certificates/cacd57a0ff5b6931bf8b0fc0b6895b06.pdf",
//     imageUrl: gfgMernCertificate,
//     featured: true,
//   },
//   {
//     id: "react",
//     title: "React.js Advanced",
//     issuer: "Udemy",
//     type: "Certification",
//     date: "Dec 2025",
//     skills: ["React", "Hooks", "Performance", "Component Design"],
//     imageUrl: "/certificates/react-advanced.jpg",
//   },
//   {
//     id: "node",
//     title: "Node.js + Express APIs",
//     issuer: "Coursera",
//     type: "Certification",
//     date: "Oct 2025",
//     skills: ["Node.js", "Express", "REST APIs", "Auth"],
//     imageUrl: "/certificates/node-express.jpg",
//   },
//   {
//     id: "sql",
//     title: "SQL & Database Fundamentals",
//     issuer: "Great Learning",
//     type: "Training",
//     date: "Aug 2025",
//     skills: ["SQL", "Joins", "Indexes", "Schema"],
//     imageUrl: "/certificates/sql.jpg",
//   },
// ];

// export default function CertificationsSection() {
//   const featured = useMemo(
//     () => certificates.find((c) => c.featured) ?? certificates[0],
//     []
//   );

//   const [active, setActive] = useState<Certificate>(featured);
//   const [open, setOpen] = useState(false);

//   const openPreview = (c: Certificate) => {
//     setActive(c);
//     setOpen(true);
//   };

//   return (
//     <section id="certifications" className="w-full bg-black text-white">
//       {/* container */}
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
//         <div className="flex items-end justify-between gap-6">
//           <div>
//             <h2 className="text-4xl font-bold tracking-tight">
//               Certifications & Training
//             </h2>
//             <p className="mt-3 text-white/60 max-w-2xl">
//               Proof of skills, continuous learning, and hands-on implementation —
//               with verifiable credentials and certificate previews.
//             </p>
//           </div>

//           <div className="hidden sm:flex items-center gap-2 text-white/50">
//             <Award className="h-5 w-5" />
//             <span className="text-sm">{certificates.length} achievements</span>
//           </div>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
//           {/* Featured preview */}
//           <div className="lg:col-span-5">
//             <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
//               <div className="flex items-start justify-between gap-4">
//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-cyan-400/90">
//                     Featured
//                   </p>
//                   <h3 className="mt-2 text-2xl font-semibold leading-tight">
//                     {featured.title}
//                   </h3>
//                   <p className="mt-2 text-white/60">
//                     {featured.issuer} • {featured.date}
//                   </p>
//                 </div>

//                 {featured.credentialUrl ? (
//                   <a
//                     className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10 transition"
//                     href={featured.credentialUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                   >
//                     Verify <ExternalLink className="h-4 w-4" />
//                   </a>
//                 ) : null}
//               </div>

//               <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-black">
//                 <button
//                   onClick={() => openPreview(featured)}
//                   className="group block w-full"
//                   aria-label="Open certificate preview"
//                 >
//                   <img
//                     src={featured.imageUrl}
//                     alt={`${featured.title} certificate`}
//                     className="h-64 w-full object-cover opacity-90 group-hover:opacity-100 transition"
//                   />
//                 </button>
//               </div>

//               <div className="mt-5">
//                 <p className="text-sm text-white/60 mb-3">Key skills</p>
//                 <div className="flex flex-wrap gap-2">
//                   {featured.skills.map((s) => (
//                     <span
//                       key={s}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
//                     >
//                       {s}
//                     </span>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() => openPreview(featured)}
//                   className="mt-5 w-full rounded-xl bg-cyan-500/15 border border-cyan-400/20 px-4 py-3 text-sm text-cyan-200 hover:bg-cyan-500/20 transition"
//                 >
//                   View certificate
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Cards grid */}
//           <div className="lg:col-span-7">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {certificates.map((c) => (
//                 <div
//                   key={c.id}
//                   className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
//                 >
//                   <div className="flex items-start justify-between gap-3">
//                     <div className="min-w-0">
//                       <p className="text-xs text-white/50">
//                         {c.type ?? "Certification"}
//                       </p>
//                       <h4 className="mt-1 text-lg font-semibold text-white/90 truncate">
//                         {c.title}
//                       </h4>
//                       <p className="mt-1 text-sm text-white/60">
//                         {c.issuer} • {c.date}
//                       </p>
//                     </div>

//                     {c.credentialUrl ? (
//                       <a
//                         href={c.credentialUrl}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 transition"
//                         aria-label="Open credential link"
//                       >
//                         <ExternalLink className="h-4 w-4" />
//                       </a>
//                     ) : null}
//                   </div>

//                   <div className="mt-4 flex gap-3">
//                     <button
//                       onClick={() => openPreview(c)}
//                       className="flex-1 rounded-xl border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80 hover:bg-black/60 transition"
//                     >
//                       Preview
//                     </button>
//                     <button
//                       onClick={() => openPreview(c)}
//                       className="rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white/70 hover:bg-white/10 transition"
//                       title="View image"
//                     >
//                       <Check className="h-4 w-4" />
//                     </button>
//                   </div>

//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {c.skills.slice(0, 3).map((s) => (
//                       <span
//                         key={s}
//                         className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
//                       >
//                         {s}
//                       </span>
//                     ))}
//                     {c.skills.length > 3 ? (
//                       <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
//                         +{c.skills.length - 3}
//                       </span>
//                     ) : null}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Modal / Lightbox */}
//         {open ? (
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
//             onClick={() => setOpen(false)}
//             role="dialog"
//             aria-modal="true"
//           >
//             <div
//               className="w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b]"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4">
//                 <div className="min-w-0">
//                   <p className="text-sm text-white/60">{active.issuer}</p>
//                   <h3 className="text-lg font-semibold text-white/90 truncate">
//                     {active.title}
//                   </h3>
//                   <p className="text-sm text-white/50">{active.date}</p>
//                 </div>

//                 <button
//                   onClick={() => setOpen(false)}
//                   className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/70 hover:bg-white/10 transition"
//                   aria-label="Close"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </div>

//               <div className="bg-black py-2">
//                 <img
//                   src={active.imageUrl}
//                   alt={`${active.title} certificate preview`}
//                   className="max-h-[65vh] w-full object-contain"
//                 />
//               </div>

//               <div className="p-4 flex flex-wrap items-center justify-between gap-3">
//                 <div className="flex flex-wrap gap-2">
//                   {active.skills.map((s) => (
//                     <span
//                       key={s}
//                       className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
//                     >
//                       {s}
//                     </span>
//                   ))}
//                 </div>

//                 {active.credentialUrl ? (
//                   <a
//                     href={active.credentialUrl}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
//                   >
//                     Verify credential <ExternalLink className="h-4 w-4" />
//                   </a>
//                 ) : null}
//               </div>
//             </div>
//           </div>
//         ) : null}
//       </div>
//     </section>
//   );
// }

import { certificates } from "@/data/certificates";
import { Award, ExternalLink, X } from "lucide-react";
import { useState } from "react";

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
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    className="rounded-xl border border-white/10 bg-white/5 p-2 hover:bg-white/10 transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
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
