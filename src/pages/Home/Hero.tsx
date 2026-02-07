import React from "react";
import { FaDiscord, FaYoutube, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Trust me, I'm a{" "}
              <span className="text-cyan-400">software</span>{" "}
              <br className="hidden sm:block" />
              <span className="text-cyan-400">engineer.</span>
            </h1>

            <p className="mt-8 max-w-xl text-white/60 leading-7">
              Meet Taufique Ali, a software developer focused on building scalable,
              user-friendly web applications. I work primarily with React, TypeScript,
              and modern UI frameworks, delivering production-ready features with
              clean architecture and performance in mind.
            </p>

            <p className="mt-4 text-white/50">~ ChatGPT</p>

            <p className="mt-10 text-white/70">
              Building <span className="font-semibold text-white">Awesome Products</span>{" "}
              next-gen UI <span aria-hidden>✨</span>
            </p>

            <a
              href="#discord"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-indigo-600 px-6 py-3 font-semibold shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition"
            >
              <FaDiscord className="text-xl" />
              Join Discord
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-md sm:max-w-lg overflow-hidden rounded-3xl ring-1 ring-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"
                alt="Profile"
                className="h-[320px] sm:h-[420px] w-full object-cover"
              />
            </div>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-6 text-white/60">
              <a className="hover:text-white transition" href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a className="hover:text-white transition" href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a className="hover:text-white transition" href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a className="hover:text-white transition" href="#" aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
