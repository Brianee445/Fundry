'use client';

import React, { useState } from 'react';
import { FiZap } from 'react-icons/fi';

export default function WaitlistPage() {
  const [email, setEmail] = useState('');
  const [selectedRole, setSelectedRole] = useState<'founder' | 'investor' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log({ email, role: selectedRole });
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#080C18] font-sans text-[#F8FAFC]">
      <div
        className="pointer-events-none absolute -top-1/4 left-1/2 h-[700px] w-[900px] -translate-x-1/2"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.30) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(rgba(30, 41, 59, 0.6) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-4xl">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-indigo-300 backdrop-blur-sm">
              <FiZap className="h-3.5 w-3.5 text-cyan-400" />
              <span>Private Beta · Coming 2026</span>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl">
              Shape the Future of
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-sky-400 bg-clip-text text-transparent">
                Funding.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl px-4 text-base text-[#94A3B8] sm:text-lg md:text-xl">
              Join the exclusive waitlist for Fundry – where visionary founders
              meet forward-thinking investors.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl shadow-blue-500/5 backdrop-blur-xl sm:p-10">
            <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-blue-500 to-sky-400 opacity-60" />
            
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-white">Get early access</h2>
                  <p className="text-sm text-[#94A3B8]">Be the first to know when we launch.</p>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">I am a...</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['founder', 'investor'].map((role) => (
                      <button
                        key={role}
                        type="button"
                        onClick={() => setSelectedRole(role as 'founder' | 'investor')}
                        className={`flex w-full items-center justify-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                          selectedRole === role
                            ? 'border-blue-500 bg-blue-500/15 text-white ring-1 ring-blue-500/50'
                            : 'border-white/10 bg-white/5 text-[#94A3B8] hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {role === 'founder' ? '👥 Founder' : '⚡ Investor'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-[#94A3B8]">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.com"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white placeholder-[#64748B] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!selectedRole || !email}
                  className="group flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] hover:shadow-blue-600/50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Join the Waitlist
                </button>

                <p className="text-center text-xs text-[#64748B]">No spam. Unsubscribe anytime.</p>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-3xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-white">You're on the list!</h3>
                <p className="mt-2 text-[#94A3B8]">We'll notify you the moment Fundry goes live.</p>
              </div>
            )}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-[#475569]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
              <span>100+ founders already waiting</span>
            </span>
            <span>•</span>
            <span>Built for Nigeria & beyond</span>
            <span>•</span>
            <span>© 2026 Fundry</span>
          </div>
        </div>
      </div>
    </div>
  );
}
