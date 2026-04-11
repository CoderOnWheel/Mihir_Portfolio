import { useEffect, useState } from "react";
import Container from "../components/ui/Container";
import SectionTitle from "../components/ui/SectionTitle";
import Button from "../components/ui/Button";

const linesData = [
  "$ initializing contact system...",
  "$ loading modules...",
  "$ npm install communication",
  "✔ packages installed successfully",
  "$ connecting to mihir-shirsath.dev",
  "✔ secure channel established",
  "$ sending message pipeline...",
  "✔ ready to receive input"
];

const Contact = () => {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < linesData.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, linesData[index]]);
        setIndex(index + 1);
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="py-24 bg-black relative overflow-hidden">

      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 blur-3xl" />

      <Container>

        <SectionTitle
          title="Contact Me"
          subtitle="Let's build something amazing together"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

{/* LEFT SIDE - CYBER FORM */}
<div className="relative">

  {/* glow behind form */}
  <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-pink-500/20 blur-2xl rounded-2xl" />

  <div className="relative bg-black/60 border border-white/10 rounded-2xl p-8 backdrop-blur-md overflow-hidden">

    {/* subtle grid overlay */}
    <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]" />

    <div className="relative z-10">

      <h3 className="text-cyan-300 text-lg font-semibold mb-6 tracking-widest">
        &gt; INITIATE_CONTACT
      </h3>

      <form className="space-y-5">

        <input
          type="text"
          placeholder="ENTER NAME"
          className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20 text-cyan-100 placeholder-cyan-700
          focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 outline-none transition"
        />

        <input
          type="email"
          placeholder="ENTER EMAIL"
          className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20 text-cyan-100 placeholder-cyan-700
          focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 outline-none transition"
        />

        <textarea
          rows="5"
          placeholder="TYPE MESSAGE..."
          className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20 text-cyan-100 placeholder-cyan-700
          focus:border-pink-400 focus:ring-2 focus:ring-pink-500/20 outline-none transition"
        />

        <Button className="w-full bg-cyan-500/10 border border-cyan-400 text-cyan-200 hover:bg-pink-500/20 hover:border-pink-400 transition">
          TRANSMIT MESSAGE 🚀
        </Button>

      </form>

    </div>
  </div>
</div>

          {/* RIGHT SIDE - LIVE TERMINAL */}
          <div className="relative flex items-center justify-center">

            {/* glow */}
            <div className="absolute w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse" />

            {/* terminal */}
            <div className="relative w-full max-w-md bg-black/70 border border-green-400/30 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,255,100,0.15)]">

              {/* top bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-black/80 border-b border-green-500/20">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <p className="text-xs text-gray-400 ml-2">
                  terminal — live session
                </p>
              </div>

              {/* body */}
              <div className="p-4 font-mono text-sm text-green-300 space-y-2 min-h-[250px]">

                {lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}

                {/* blinking cursor */}
                <p className="flex items-center gap-1 mt-3">
                  <span>$</span>
                  <span className="animate-pulse text-green-300">█</span>
                </p>

              </div>
            </div>

          </div>

        </div>

      </Container>
    </section>
  );
};

export default Contact;