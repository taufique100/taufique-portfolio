import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import TaufiqueAli from "../../assets/TaufiqueAliProfileImage.jpeg";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import resume from "@/assets/Taufique Ali_Resume.pdf";

export default function Hero() {
  
  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl sm:px-2 py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Trust me, I'm a <span className="text-cyan-400">Software</span>{" "}
              <span className="text-cyan-400">Engineer.</span>
            </h1>

            <p className="mt-8 max-w-xl text-white/60 leading-7">
              Hi, I’m Taufique Ali — A software developer focused on building
              scalable, end-to-end web applications. I work across the full
              stack using React, Javascript, NextJs, TypeScript, Node.js,
              Express, and MongoDB, MySQL to deliver secure, production-ready
              solutions with clean architecture, efficient APIs, and performance
              in mind.
            </p>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500/20 border border-cyan-400/40 px-5 py-3 mt-6 text-sm font-medium text-cyan-200 hover:bg-cyan-500/30 transition shadow-lg shadow-cyan-500/20"
            >
              <Download size={18} />
              Download Resume
            </button>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <img
                src={TaufiqueAli}
                alt="Taufique Ali"
                className="h-[350px] w-full object-cover"
              />
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center justify-end gap-6 mx-auto text-white/60">
              {/* <Link
                className="hover:text-white transition"
                to="https://www.youtube.com/@taufiqueali7592"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link> */}
              <Link
                className="hover:text-white transition"
                to="https://x.com/Taufiqu98910345"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </Link>
              <Link
                className="hover:text-white transition"
                target="_blank"
                to="https://www.linkedin.com/in/taufique-ali-8562741a1/"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="hover:text-white transition"
                target="_blank"
                to={"https://github.com/taufique100"}
                aria-label="GitHub"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
