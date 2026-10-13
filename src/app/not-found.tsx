
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#faf9f6] px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#718078]">
        KIRK IT
      </p>

      <h1 className="mt-6 text-7xl font-semibold tracking-[-0.06em] text-[#24483f] sm:text-9xl">
        404
      </h1>

      <h2 className="mt-6 text-2xl font-medium tracking-tight text-[#202c26] sm:text-3xl">
        This page doesn&apos;t exist.
      </h2>

      <p className="mt-4 max-w-md text-sm leading-7 text-[#718078]">
        The page may have moved, or the link may be incorrect. Let&apos;s get
        you back to the right place.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-3 bg-[#24483f] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#19372f]"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center gap-3 border border-[#deded6] px-5 py-3 text-sm font-medium text-[#24483f] transition-colors hover:bg-[#f0efe9]"
        >
          Contact us
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </main>
  );
}
