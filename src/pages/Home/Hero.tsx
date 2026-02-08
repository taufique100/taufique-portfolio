import {
  FaDiscord,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import TaufiqueAli from "../../assets/TaufiqueAliAvatar.jpg";
import { Link } from "react-router-dom";
import { FileTypeIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl sm:px-2 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h1 className="text-2xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              Trust me, I'm a <span className="text-cyan-400">Software</span>{" "}
              <span className="text-cyan-400">Engineer.</span>
            </h1>

            <p className="mt-8 max-w-xl text-white/60 leading-7">
              Hi, I’m Taufique Ali — A software developer focused on building
              scalable, end-to-end web applications. I work across the full
              stack using React, TypeScript, Node.js, Express, and MongoDB,
              MySQL to deliver secure, production-ready solutions with clean
              architecture, efficient APIs, and performance in mind.
            </p>

            <p className="mt-6 text-white/70">
              Building{" "}
              <span className="font-semibold text-white">Awesome Products</span>{" "}
              next-gen UI <span aria-hidden>✨</span>
            </p>

            <span
              className="inline-flex items-center gap-1 rounded-md  bg-rose-500/15 px-2 py-2 mt-3 text-xs font-semibold text-rose-400  border border-rose-400/30"
            >
              <FileTypeIcon fontSize={16}/>
              Download Resume
            </span>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md sm:max-w-lg overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src={TaufiqueAli}
                alt="Profile Image"
                className="h-[250px] sm:h-[350px] w-full object-cover"
              />
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-6 mx-auto text-white/60">
              <Link
                className="hover:text-white transition"
                to="https://www.youtube.com/@taufiqueali7592"
                aria-label="YouTube"
              >
                <FaYoutube />
              </Link>
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
