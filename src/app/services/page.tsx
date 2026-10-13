
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Services",
  description:
    "Explore managed IT, cybersecurity, cloud solutions, and network services from Kirk IT for businesses in the Cayman Islands.",
};

const services = [
  {
    number: "01",
    title: "Managed IT",
    description:
      "Dependable technology support that keeps your systems running and your team focused on the work that matters.",
    detail:
      "From day-to-day troubleshooting to proactive maintenance, your technology should help work move forward instead of getting in the way.",
    points: [
      "Proactive system monitoring and maintenance",
      "Technical support for your team",
      "IT planning and ongoing guidance",
    ],
  },
  {
    number: "02",
    title: "Cybersecurity",
    description:
      "Practical protection for your systems, information, and people, built around the needs of your business.",
    detail:
      "A thoughtful security approach helps reduce risk, strengthen everyday practices, and protect the information your business depends on.",
    points: [
      "Security assessments and recommendations",
      "Protection for devices and business systems",
      "Security awareness and risk reduction",
    ],
  },
  {
    number: "03",
    title: "Cloud Solutions",
    description:
      "Flexible cloud technology that helps your people collaborate, access information, and work effectively.",
    detail:
      "Make your technology more adaptable with cloud solutions selected around your workflows, collaboration needs, and business goals.",
    points: [
      "Cloud planning and migration guidance",
      "Collaboration and productivity solutions",
      "Cloud environment support",
    ],
  },
  {
    number: "04",
    title: "Networks & Voice",
    description:
      "Reliable connectivity and business communications that bring your workplace together.",
    detail:
      "A dependable network gives your team the foundation to communicate, share information, and work without unnecessary interruptions.",
    points: [
      "Business network planning and support",
      "Connectivity troubleshooting",
      "Business voice and communications solutions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="overflow-hidden bg-[#f7f6f1] text-[#203d32]">
      <Header />

      <section className="mx-auto max-w-[1440px] px-5 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16 lg:pt-28">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718578]">
              <span className="h-px w-8 bg-[#718578]" />
              Our services
            </p>

            <h1 className="mt-7 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.065em] sm:text-6xl lg:text-8xl">
              Technology that
              <br />
              <span className="font-serif font-normal italic text-[#718d76]">
                moves you forward.
              </span>
            </h1>
          </div>

          <div className="max-w-md lg:justify-self-end lg:pb-2">
            <p className="text-sm leading-8 text-[#68766c] sm:text-base">
              Your technology should make business simpler, safer, and more
              resilient. We help you build the right foundation with services
              designed around your people and priorities.
            </p>

            <Link
              href="/contact"
              className="group mt-7 inline-flex items-center gap-3 border-b border-[#b7c0b4] pb-3 text-sm font-medium transition-colors hover:border-[#24483b]"
            >
              Discuss your requirements
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-[#dcded5] sm:mt-24">
          {services.map((service) => (
            <section
              key={service.number}
              className="grid gap-7 border-b border-[#dcded5] py-10 sm:py-14 lg:grid-cols-[0.3fr_1fr_0.9fr] lg:gap-12 lg:py-16"
            >
              <div className="flex items-start justify-between lg:block">
                <span className="text-xs tracking-[0.15em] text-[#8b9a8c]">
                  / {service.number}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#8b9a8c] lg:mt-6 lg:block">
                  Kirk IT
                </span>
              </div>

              <div>
                <h2 className="text-3xl font-medium tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                  {service.title}
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-[#68766c]">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="group mt-7 inline-flex items-center gap-3 text-sm font-medium text-[#24483b]"
                >
                  Talk to our team
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>

              <div className="lg:pt-1">
                <p className="max-w-lg text-sm leading-7 text-[#718078]">
                  {service.detail}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-6 text-[#52665a]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#718d76]"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-[#e9ede4]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-10 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-16">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718578]">
              <span className="h-px w-8 bg-[#718578]" />
              Let&apos;s find the right fit
            </p>

            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
              Better technology starts with a conversation.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-[#68766c] sm:text-base">
              Every business has different priorities. Tell us what you need,
              and we can discuss an approach that makes sense for your team.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-14 items-center gap-8 bg-[#24483b] px-6 text-sm font-medium text-white transition-colors hover:bg-[#18382d]"
            >
              Get in touch
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </div>

          <div className="relative min-h-[320px] overflow-hidden bg-[#dce2d8] sm:min-h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85"
              alt="Contemporary office with a collaborative workspace"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18382d]/45 via-transparent to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-sm font-serif text-3xl italic leading-tight tracking-[-0.04em] text-white sm:bottom-9 sm:left-9 sm:text-4xl">
              Practical solutions.
              <br />
              Thoughtfully delivered.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#203d32] text-[#f7f6f1]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <Link href="/" className="text-lg font-semibold tracking-[-0.05em]">
            KIRK <span className="font-normal text-[#b9c9b8]">IT</span>
          </Link>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/70"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <Link
              href="/services"
              className="transition-colors hover:text-white"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-white"
            >
              Contact
            </Link>
          </nav>

          <p className="text-[10px] text-white/45">
            © 2026 Kirk IT. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
