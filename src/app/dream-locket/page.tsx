import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";

export const metadata: Metadata = {
  title: "Dream Locket — Julian Kingman",
  description:
    "A private, local-first dream journal for iOS. Encrypted, Face ID-locked, with on-device Apple Intelligence insights.",
};

const TESTFLIGHT_URL = "https://testflight.apple.com/join/HwQfrgq8";

const features = [
  {
    title: "Local-first",
    body: "Your dreams live in an on-device SQLite database. Nothing leaves your phone unless you opt into iCloud sync.",
  },
  {
    title: "Face ID lock",
    body: "Auto-relocks the moment the app goes to background. Your subconscious stays yours.",
  },
  {
    title: "End-to-end encryption",
    body: "Sensitive entries are encrypted with a key derived from your device — readable only on hardware you control.",
  },
  {
    title: "Apple Intelligence insights",
    body: "On iOS 26+, on-device models surface themes, motifs, and patterns across your journal — no servers, no telemetry.",
  },
  {
    title: "Optional iCloud sync",
    body: "Mirror your journal across your devices through your private iCloud container. Off by default.",
  },
  {
    title: "Tags & full-text search",
    body: "Organize with lightweight tags. Recall any fragment with fast on-device search.",
  },
];

const screenshots = [
  { src: "/dream-locket/screens/home.png", alt: "Dream Locket home feed", label: "Home feed" },
  { src: "/dream-locket/screens/favorites.png", alt: "Dream Locket favorites view", label: "Favorites" },
  { src: "/dream-locket/screens/detail.png", alt: "Dream Locket entry detail", label: "Detail" },
];

const stack = [
  "Expo SDK 51",
  "React Native",
  "Tamagui",
  "SQLite",
  "Apple Intelligence",
  "MMKV",
  "expo-local-authentication",
  "iCloud (CloudKit)",
];

function PhoneFrame({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <figure className="flex flex-col items-center">
      <div className="rounded-[2.5rem] border border-amber-500/20 p-2 bg-gradient-to-b from-amber-500/5 to-transparent shadow-[0_0_60px_-20px_rgba(255,183,125,0.25)]">
        {/* aspect-[1320/2868] matches modern iPhone (6.9") screenshot dimensions */}
        <div className="relative w-[240px] aspect-[1320/2868] sm:w-[260px] rounded-[2rem] overflow-hidden bg-[#f5ebe2]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 640px) 240px, 260px"
            className="object-cover object-top"
          />
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-gray-400">{label}</figcaption>
    </figure>
  );
}

export default function DreamLocketPage() {
  return (
    <>
      <AnimatedBackground />

      {/* Atmospheric twilight tint layered over the shared bg */}
      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040e1f]/40 via-transparent to-[#040e1f]/40" />
        <div className="absolute inset-x-0 top-1/3 h-[40rem] bg-gradient-to-b from-amber-500/5 via-transparent to-transparent blur-3xl" />
      </div>

      <main className="min-h-screen pt-32 pb-24 px-6">
        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-8 relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-400/30 to-orange-600/20 blur-2xl" />
            <Image
              src="/dream-locket/icon.png"
              alt="Dream Locket app icon"
              width={144}
              height={144}
              priority
              className="relative rounded-[2rem] shadow-2xl"
            />
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-200 bg-clip-text text-transparent">
              Dream Locket
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto mb-10">
            A private, local-first dream journal for iOS.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative">Get on TestFlight</span>
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 border border-orange-500/50 rounded-full font-semibold text-orange-300 hover:text-white hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300"
            >
              All projects
            </Link>
          </div>
        </section>

        {/* What it is */}
        <section className="max-w-3xl mx-auto mt-32 text-center">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Dream Locket is a quiet, on-device sanctuary for recording and reflecting on dreams.
            No accounts, no servers, no analytics. Just you, your journal, and — if you want it —
            a layer of on-device intelligence that surfaces patterns over time.
          </p>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto mt-32">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Built for privacy first
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="max-w-6xl mx-auto mt-32">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-14">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              A look inside
            </span>
          </h2>
          <div className="flex gap-8 overflow-x-auto pb-6 px-2 snap-x snap-mandatory md:grid md:grid-cols-3 md:justify-items-center md:overflow-visible md:gap-8">
            {screenshots.map((s) => (
              <div key={s.src} className="snap-center shrink-0 md:shrink">
                <PhoneFrame {...s} />
              </div>
            ))}
          </div>
        </section>

        {/* Privacy blurb */}
        <section className="max-w-3xl mx-auto mt-32 text-center">
          <div className="p-8 md:p-12 bg-black/20 backdrop-blur-sm rounded-3xl border border-orange-500/20">
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              <span className="text-amber-300 font-semibold">Your data never leaves your device</span>
              {" "}unless you turn on iCloud sync, in which case it travels only through your private
              iCloud container. No third-party servers. No telemetry. No tracking.
            </p>
          </div>
        </section>

        {/* Tech stack */}
        <section className="max-w-4xl mx-auto mt-32 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-8 text-gray-200">How it&apos;s built</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((s) => (
              <span
                key={s}
                className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/15 to-amber-500/15 border border-orange-500/30 text-sm text-gray-200"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Support */}
        <section className="max-w-3xl mx-auto mt-32 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Need help?
            </span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Run into a bug, have a feature request, or just want to say hi?
            I read every message.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
          >
            Contact support
          </Link>
        </section>

        {/* Footer CTA */}
        <section className="max-w-3xl mx-auto mt-32 text-center">
          <p className="text-gray-300 mb-6">Curious to try it?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
            >
              Get on TestFlight
            </a>
            <Link
              href="/projects"
              className="text-orange-300 hover:text-amber-300 transition-colors"
            >
              ← Back to projects
            </Link>
          </div>
          <div className="mt-10 text-sm text-gray-500">
            <Link href="/dream-locket/privacy" className="hover:text-amber-300 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
