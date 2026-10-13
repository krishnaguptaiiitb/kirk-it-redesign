
import Link from "next/link";
import Header from "@/components/Header";
import HomeHero from "@/components/HomeHero";
import { ArrowUpRight, Network } from "lucide-react";

export default function Home() {
  return (
    <main id="top" className="overflow-hidden bg-[#faf9f6] text-[#203d32]">
      <Header />

      <HomeHero />

      <section className="bg-[#203d32] text-[#f7f6f1]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#b9c9b8]">
                <span className="h-px w-8 bg-[#b9c9b8]" />
                What we do
              </p>
              <h2 className="mt-7 max-w-lg text-4xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                Technology that works as hard as you do.
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
                The right technology should simplify your work, protect what
                matters, and give your business room to grow.
              </p>
              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-4 border-b border-white/35 pb-3 text-xs font-medium transition-colors hover:border-white"
              >
                Explore all services
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="border-t border-white/20">
              {[
                {
                  number: "01",
                  title: "Managed IT",
                  description:
                    "Proactive support and dependable systems that keep your team moving.",
                },
                {
                  number: "02",
                  title: "Cybersecurity",
                  description:
                    "Practical protection for your business, devices, and valuable data.",
                },
                {
                  number: "03",
                  title: "Cloud solutions",
                  description:
                    "Flexible cloud infrastructure designed around the way you work.",
                },
                {
                  number: "04",
                  title: "Networks & voice",
                  description:
                    "Connected workplaces with reliable networking and communications.",
                },
              ].map((service) => (
                <Link
                  key={service.number}
                  href="/services"
                  className="group grid grid-cols-[34px_1fr_24px] items-start gap-4 border-b border-white/20 py-7 transition-colors hover:bg-white/[0.04] sm:grid-cols-[44px_1fr_28px] sm:gap-5 sm:py-9"
                >
                  <span className="pt-2 text-[10px] tracking-wider text-[#b9c9b8]">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-medium tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-2xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-xs leading-6 text-white/60 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="mt-1 text-[#b9c9b8] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="approach"
        className="scroll-mt-20 overflow-hidden bg-[#f7f6f1] text-[#203d32]"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
            <div>
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718578]">
                <span className="h-px w-8 bg-[#718578]" />
                A better way to work
              </p>
              <h2 className="mt-7 text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                Technology should feel like a
                <span className="font-serif font-normal italic text-[#718d76]">
                  {" "}step forward.
                </span>
              </h2>
            </div>

            <p className="max-w-lg pb-1 text-sm leading-8 text-[#68766c] sm:text-base">
              Good IT is about more than fixing problems. It is about creating
              a dependable foundation for your people, protecting your work,
              and helping your business adapt with confidence.
            </p>
          </div>

          <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="relative min-h-[340px] overflow-hidden bg-[#dce2d8] sm:min-h-[480px]">
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85"
                alt="Light-filled contemporary workspace"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18382d]/55 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 max-w-md p-6 text-white sm:p-10">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/70">
                  Built around your business
                </p>
                <p className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                  Less firefighting.
                  <br />
                  More forward thinking.
                </p>
              </div>
              <span className="absolute right-5 top-5 border border-white/60 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white">
                Our philosophy
              </span>
            </div>

            <div className="flex flex-col justify-center">
              {[
                {
                  number: "01",
                  title: "Start with understanding",
                  description:
                    "We begin with your priorities, your people, and the challenges your business actually faces.",
                },
                {
                  number: "02",
                  title: "Make complexity manageable",
                  description:
                    "Clear recommendations and thoughtful technology choices help make everyday work simpler.",
                },
                {
                  number: "03",
                  title: "Build for what comes next",
                  description:
                    "A dependable technology foundation helps your organisation respond as its needs evolve.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="group grid grid-cols-[36px_1fr] gap-4 border-b border-[#dcded5] py-7 first:border-t sm:grid-cols-[48px_1fr] sm:gap-6 sm:py-9"
                >
                  <span className="pt-1 text-[10px] tracking-wider text-[#8b9a8c]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium tracking-[-0.035em] transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-[#718078]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e9ede4] text-[#203d32]">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full border border-[#cbd5c8] sm:h-[460px] sm:w-[460px]" />
        <div className="absolute -right-10 -top-14 h-64 w-64 rounded-full border border-[#cbd5c8] sm:h-[360px] sm:w-[360px]" />

        <div className="relative mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16 lg:px-16">
          <div>
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#718578]">
              <span className="h-px w-8 bg-[#718578]" />
              Start a conversation
            </p>
            <h2 className="mt-7 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Ready for IT that
              <br className="hidden sm:block" />
              works better for you?
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#68766c] sm:text-base">
              Tell us where your business is headed. Let&apos;s explore how the
              right technology can help you get there.
            </p>
          </div>

          <div className="relative">
            <Link
              href="/contact"
              className="group inline-flex min-h-16 w-full items-center justify-between gap-10 bg-[#24483b] px-6 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#18382d] sm:w-auto sm:min-w-[245px]"
            >
              Talk to our team
              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
            <p className="mt-4 text-[10px] uppercase tracking-[0.15em] text-[#718078]">
              Let&apos;s find a better way forward
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-[#203d32] text-[#f7f6f1]">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.4fr_0.7fr_0.7fr] lg:gap-16 lg:py-20">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-[#f7f6f1] text-[#24483b]">
                  <Network size={20} strokeWidth={1.5} />
                </span>
                <span className="text-xl font-semibold tracking-[-0.06em]">
                  KIRK <span className="font-normal text-[#b9c9b8]">IT</span>
                </span>
              </Link>
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                Thoughtful technology support, security, and infrastructure
                for businesses that want to move forward with confidence.
              </p>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9c9b8]">
                Explore
              </p>
              <nav className="flex flex-col items-start gap-4 text-sm text-white/75">
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
                  href="/#approach"
                  className="transition-colors hover:text-white"
                >
                  Our approach
                </Link>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#b9c9b8]">
                Let&apos;s connect
              </p>
              <p className="max-w-xs text-sm leading-7 text-white/65">
                Have a technology challenge or planning your next step?
              </p>
              <Link
                href="/contact"
                className="group mt-5 inline-flex items-center gap-3 border-b border-white/35 pb-2 text-sm transition-colors hover:border-white"
              >
                Start a conversation
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/15 py-6 text-[10px] tracking-wide text-white/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Kirk IT. All rights reserved.</p>
            <a href="#top" className="transition-colors hover:text-white/80">
              Back to top ↑
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
