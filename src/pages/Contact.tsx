import { Mail, Linkedin, Github, Send } from "lucide-react";
import SEO from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact - Taufique Ali | Hire Full Stack Developer"
        description="Get in touch with Taufique Ali for full-stack development opportunities, freelance projects, or collaborations. Available for React.js, Node.js, and MERN stack projects."
        keywords="hire full stack developer, hire react developer, hire nodejs developer, contact software developer, freelance web developer, mern stack developer for hire"
        canonical="https://taufiqueali.dev1.com/contact"
      />
      <section
      id="contact"
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 w-full">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let’s Build Something Great
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/60 leading-7">
            Have an idea, a project, or an opportunity?  
            I’m always open to discussing full-stack roles, freelance work,
            or interesting collaborations.
          </p>
        </div>

        {/* Content */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-white/60">
                Prefer direct contact? Reach me via email or connect on
                LinkedIn & GitHub.
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:taufiqueali2911@gmail.com"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 p-4 hover:bg-black/60 transition"
                >
                  <Mail className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-white/60">Email</p>
                    <p className="font-medium">
                      taufiqueali2911@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/taufique-ali-8562741a1/"
                  target="_blank"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 p-4 hover:bg-black/60 transition"
                >
                  <Linkedin className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-white/60">LinkedIn</p>
                    <p className="font-medium">
                      Connect professionally
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/taufique100"
                  target="_blank"
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/40 p-4 hover:bg-black/60 transition"
                >
                  <Github className="text-cyan-400" />
                  <div>
                    <p className="text-sm text-white/60">GitHub</p>
                    <p className="font-medium">
                      View my code
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-7">
            <form className="rounded-2xl border border-white/10 bg-white/5 p-8 space-y-6">
              <h3 className="text-2xl font-semibold">
                Send a message
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
                />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60"
              />

              <textarea
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full rounded-xl bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-cyan-400/60 resize-none"
              />

              <button
                type="submit"
                className="inline-flex items-center gap-3 rounded-xl bg-cyan-500/15 border border-cyan-400/30 px-6 py-3 text-cyan-200 hover:bg-cyan-500/25 transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
