import { MapPin, Briefcase, Code2 } from "lucide-react";
import { BulletPoint } from "@/components/BulletPoint";
import TaufiqueAliAvatar from '@/assets/TaufiqueAliAvatar.jpg'

export default function AboutPage() {
  
  return (
    <section id="about" className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <p className="text-cyan-300 text-sm tracking-widest uppercase">
              About
            </p>

            <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
              Taufique Ali
            </h1>

            <p className="mt-3 text-white/70 text-lg">
              Software Developer • MERN • MEAN • MySQL
            </p>

            <p className="mt-6 max-w-2xl text-white/60 leading-7">
              Hi, I’m Taufique Ali — a MERN stack software developer focused on
              building scalable, end-to-end web applications. I work across the
              full stack using React, TypeScript, Node.js, Express, and MongoDB
              to deliver secure, production-ready solutions with clean
              architecture, efficient APIs, and performance in mind.
            </p>

            {/* Quick cards */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium">Location</span>
                </div>
                <p className="mt-2 text-sm text-white/60">New Delhi, India</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Briefcase className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium">Experience</span>
                </div>
                <p className="mt-2 text-sm text-white/60">2+ Years</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 text-white/80">
                  <Code2 className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium">Focus</span>
                </div>
                <p className="mt-2 text-sm text-white/60">
                  Full-Stack Web Apps
                </p>
              </div>
            </div>
          </div>

          {/* Right: image */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm">
              {/* subtle glow */}
              <div className="absolute -inset-6 rounded-3xl bg-cyan-500/10 blur-2xl" />

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={TaufiqueAliAvatar}
                  alt="Taufique Ali"
                  className="h-[420px] w-full object-cover"
                />
              </div>

              <p className="mt-4 text-center text-sm text-white/50">
                Building scalable products with Full stack.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/10" />

        {/* Highlights */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold">What I do</h2>
            <p className="mt-3 text-white/60 leading-7">
              I enjoy solving real business problems with clean UI, secure APIs,
              and scalable architecture. My work spans healthcare systems,
              enterprise dashboards, and fintech platforms.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 space-y-4">
              <BulletPoint text="Build responsive and reusable UI components using React, TypeScript, and modern UI frameworks." />
              <BulletPoint text="Develop secure REST APIs with Node.js/Express and implement auth using JWT and RBAC." />
              <BulletPoint text="Integrate third-party services like payment gateways, notifications (Firebase), and email workflows." />
              <BulletPoint text="Optimize performance using structured state management and scalable component architecture." />
              <BulletPoint text="Work with Git, CI/CD pipelines, and collaboration best practices to ship stable releases." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
