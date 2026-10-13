
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="editorial-reveal relative overflow-hidden bg-[#f7f6f1] text-[#203d32]">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
        <div className="grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-20">
          <div className="relative z-10">
            <div className="mb-9 flex items-center gap-3">
              <span className="h-px w-9 bg-[#577b66]" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#64796b] sm:text-[11px]">
                IT that moves business forward
              </p>
            </div>

            <h1 className="max-w-[680px] text-[clamp(3.4rem,7.1vw,6.8rem)] font-medium leading-[0.94] tracking-[-0.075em]">
              Technology
              <br />
              should move
              <br />
              <span className="font-serif font-normal italic text-[#718d76]">
                you forward.
              </span>
            </h1>

            <p className="mt-8 max-w-[440px] text-[15px] leading-8 text-[#66736a] sm:text-base">
              Thoughtful IT management, security, and cloud solutions that help
              your business work smarter, stay protected, and grow with
              confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group inline-flex min-h-14 items-center gap-7 bg-[#24483b] px-6 text-[12px] font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#18382d]"
              >
                Let&apos;s talk about your IT
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-[12px] font-medium text-[#40594a]"
              >
                Explore our services
                <ArrowDownRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </Link>
            </div>

            <div className="mt-14 flex max-w-[450px] items-center gap-5 border-t border-[#dcded5] pt-6">
              <div className="flex -space-x-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f7f6f1] bg-[#dce5d9] text-[10px] font-semibold text-[#24483b]">
                  IT
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f7f6f1] bg-[#e8dfcd] text-[10px] font-semibold text-[#24483b]">
                  IT
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f7f6f1] bg-[#c7d4c7] text-[10px] font-semibold text-[#24483b]">
                  IT
                </span>
              </div>
              <p className="max-w-[250px] text-[11px] leading-5 text-[#778078]">
                Reliable technology support, built around the way your
                business works.
              </p>
            </div>
          </div>

          <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[590px]">
            <div className="absolute inset-0 overflow-hidden bg-[#dce2d8]">
              <Image
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85"
                alt="Contemporary professional workspace with an open, light-filled office"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-[1.025]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#152d23]/40 via-transparent to-transparent" />
            </div>

            <div className="absolute left-0 top-8 max-w-[220px] bg-[#f7f6f1] p-5 sm:left-[-24px] sm:max-w-[245px] sm:p-6">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#788578]">
                Our perspective
              </p>
              <p className="mt-3 font-serif text-[22px] leading-tight tracking-[-0.04em] text-[#24483b] sm:text-[26px]">
                Good technology feels effortless.
              </p>
            </div>

            <div className="absolute bottom-5 right-5 max-w-[245px] border border-white/30 bg-[#203d32]/90 p-5 text-white backdrop-blur-md sm:bottom-8 sm:right-8 sm:p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/65">
                  The bigger picture
                </span>
                <span className="h-2 w-2 rounded-full bg-[#b9d2a7]" />
              </div>
              <p className="text-sm leading-6 text-white/90">
                Less complexity. Better protection. More room to grow.
              </p>
              <div className="mt-5 h-px bg-white/20" />
              <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/55">
                Managed IT · Security · Cloud
              </p>
            </div>

            <span className="absolute right-0 top-0 h-16 w-16 border-r border-t border-[#91a58e]" />
            <span className="absolute bottom-0 left-0 h-16 w-16 border-b border-l border-[#91a58e]" />
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-[#dcded5] py-6 sm:grid-cols-4">
          {[
            "Managed IT",
            "Cybersecurity",
            "Cloud solutions",
            "Networks & voice",
          ].map((service, index) => (
            <div
              key={service}
              className={`py-3 text-[10px] font-medium uppercase tracking-[0.12em] text-[#64746a] sm:text-[11px] ${
                index % 2 === 0 ? "pr-3" : "pl-3 sm:pl-8"
              } ${index >= 2 ? "sm:border-l sm:border-[#dcded5] sm:pl-8" : ""}`}
            >
              <span className="mr-3 text-[#9aaa98]">0{index + 1}</span>
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
