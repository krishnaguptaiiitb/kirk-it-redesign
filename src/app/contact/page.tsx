
"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import {
  ArrowUpRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#203d32]">
      <Header />

      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#718d76]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718578]">
                Start a conversation
              </p>
            </div>

            <h1 className="mt-8 text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.075em]">
              Let&apos;s make
              <br />
              technology
              <br />
              <span className="font-serif font-normal italic text-[#718d76]">
                work better.
              </span>
            </h1>

            <p className="mt-8 max-w-[420px] text-sm leading-8 text-[#68766c] sm:text-base">
              Every business has different needs. Tell us what you&apos;re
              working towards, and start a conversation about the technology
              that can help you get there.
            </p>

            <div className="mt-12 border-t border-[#dedfd6]">
              <div className="flex gap-5 border-b border-[#dedfd6] py-6">
                <Mail
                  size={19}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#718d76]"
                />
                <div>
                  <p className="text-xs font-medium">Email</p>
                  <p className="mt-2 max-w-xs text-xs leading-6 text-[#818982]">
                    Contact details can be confirmed with Kirk IT.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 border-b border-[#dedfd6] py-6">
                <Phone
                  size={19}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#718d76]"
                />
                <div>
                  <p className="text-xs font-medium">Phone</p>
                  <p className="mt-2 max-w-xs text-xs leading-6 text-[#818982]">
                    Speak with the team about your requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 py-6">
                <MapPin
                  size={19}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-[#718d76]"
                />
                <div>
                  <p className="text-xs font-medium">Location</p>
                  <p className="mt-2 text-xs leading-6 text-[#818982]">
                    Cayman Islands
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-auto hidden border-t border-[#dedfd6] pt-5 lg:block">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#929990]">
                KIRK IT · Thoughtfully managed technology
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-3 -top-3 h-20 w-20 border-r border-t border-[#a8b9a6] sm:-right-5 sm:-top-5" />

            <div className="relative border border-[#dedfd6] bg-white p-5 sm:p-9 lg:p-11">
              {submitted ? (
                <div className="flex min-h-[440px] flex-col items-start justify-center">
                  <CheckCircle2
                    size={38}
                    strokeWidth={1.3}
                    className="text-[#718d76]"
                  />

                  <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718578]">
                    Form demonstration
                  </p>

                  <h2 className="mt-4 max-w-md text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-4xl">
                    Thank you for taking the first step.
                  </h2>

                  <p className="mt-5 max-w-md text-sm leading-7 text-[#68766c]">
                    Your form passed the browser&apos;s validation. No message
                    has been sent or stored because this form is not connected
                    to a backend yet.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-xs font-medium text-[#24483b] underline underline-offset-4"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718578]">
                    Tell us about your needs
                  </p>

                  <h2 className="mt-5 text-3xl font-medium tracking-[-0.055em] sm:text-4xl">
                    Start here.
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#818982]">
                    Share a few details about your business and what you need.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-9 space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-medium text-[#344d43]"
                        >
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          placeholder="Your name"
                          required
                          className="h-13 w-full border border-[#dedfd6] bg-[#faf9f6] px-4 text-sm outline-none transition-colors placeholder:text-[#a1a69f] focus:border-[#718d76]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-xs font-medium text-[#344d43]"
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          autoComplete="organization"
                          placeholder="Company name"
                          className="h-13 w-full border border-[#dedfd6] bg-[#faf9f6] px-4 text-sm outline-none transition-colors placeholder:text-[#a1a69f] focus:border-[#718d76]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs font-medium text-[#344d43]"
                      >
                        Work email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                        className="h-13 w-full border border-[#dedfd6] bg-[#faf9f6] px-4 text-sm outline-none transition-colors placeholder:text-[#a1a69f] focus:border-[#718d76]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-xs font-medium text-[#344d43]"
                      >
                        What can we help with?
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        defaultValue=""
                        className="h-13 w-full border border-[#dedfd6] bg-[#faf9f6] px-4 text-sm text-[#52665a] outline-none transition-colors focus:border-[#718d76]"
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        <option value="Managed IT">Managed IT</option>
                        <option value="Cybersecurity">Cybersecurity</option>
                        <option value="Cloud Solutions">Cloud solutions</option>
                        <option value="Networks & Voice">Networks &amp; voice</option>
                        <option value="Other">Something else</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-medium text-[#344d43]"
                      >
                        How can we help?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us a little about your requirements..."
                        className="w-full resize-y border border-[#dedfd6] bg-[#faf9f6] px-4 py-3 text-sm leading-6 outline-none transition-colors placeholder:text-[#a1a69f] focus:border-[#718d76]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex min-h-14 w-full items-center justify-between bg-[#24483b] px-5 text-sm font-medium text-white transition-colors hover:bg-[#18382d]"
                    >
                      Submit inquiry
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-[11px] leading-5 text-[#929990]">
                      This demonstration form does not send or store your
                      information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#dedfd6]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-5 py-6 text-[11px] text-[#818982] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <Link
            href="/"
            className="font-semibold tracking-[0.08em] text-[#344d43]"
          >
            KIRK IT
          </Link>
          <span>Technology, thoughtfully managed.</span>
        </div>
      </footer>
    </main>
  );
}
