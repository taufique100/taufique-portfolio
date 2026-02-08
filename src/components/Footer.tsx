import { FaYoutube, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import TaufiqueAliAvatar from "@/assets/TaufiqueAliProfileImage.jpeg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <a href="/" className="flex items-center gap-3 min-w-0">
            <div className="h-10 w-10 rounded-full bg-white/10 ring-2 ring-white/10 flex items-center justify-center text-white text-sm font-semibold">
              <img
                src={TaufiqueAliAvatar}
                className="rounded-3xl w-full h-full"
                alt="Taufique Ali Avatar"
              />
            </div>
            <h3 className="text-xl font-semibold tracking-wide">
              Taufique Ali
            </h3>
          </a>

          {/* Navigation */}
          <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/80">
            <Link to="/about-me" className="hover:text-white transition">
              About
            </Link>
            <Link to="/experience" className="hover:text-white transition">
              Experience
            </Link>
            <Link to="/projects" className="hover:text-white transition">
              Projects
            </Link>
            <Link to="/certifications" className="hover:text-white transition">
              Certifications
            </Link>
          </nav>

          {/* Social icons */}
          <div className="mt-6 flex items-center gap-6 text-white/60">
            <a
              href="https://www.youtube.com/@taufiqueali7592"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-white transition"
            >
              <FaYoutube size={18} />
            </a>

            <a
              href="https://x.com/Taufiqu98910345"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="hover:text-white transition"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/taufique-ali-8562741a1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="https://github.com/taufique100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white transition"
            >
              <FaGithub size={18} />
            </a>
          </div>

          {/* Divider */}
          <div className="mt-10 h-px w-full max-w-md bg-white/10" />

          {/* Copyright */}
          <p className="mt-6 text-xs text-white/40">
            © {new Date().getFullYear()} Taufique Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
