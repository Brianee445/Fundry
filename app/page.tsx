// app/page.tsx

import Link from 'next/link';
import { FiZap, FiArrowRight } from 'react-icons/fi';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080C18] text-[#F8FAFC]">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[700px] w-[900px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(circle, rgba(37, 99, 235, 0.20) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Dot-grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(rgba(30, 41, 59, 0.4) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-12 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
          <FiZap className="h-3.5 w-3.5 text-cyan-400" />
          <span>Private Beta · Coming 2026</span>
        </div>

        <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl">
          Fund the Future
          <br />
          <span className="text-gradient">of Innovation.</span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-[#94A3B8] md:text-xl">
          Connect with verified founders and investors. Secure. Verified. Direct.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/waitlist"
            className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-blue-600/50"
          >
            Join Waitlist
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/auth/login"
            className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
