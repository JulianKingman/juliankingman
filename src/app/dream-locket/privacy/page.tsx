import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";

export const metadata: Metadata = {
  title: "Privacy Policy — Dream Locket",
  description:
    "Dream Locket does not collect, transmit, or sell your data. Everything stays on your device.",
};

const EFFECTIVE_DATE = "May 15, 2026";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
        {title}
      </h2>
      <div className="text-gray-300 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function DreamLocketPrivacyPage() {
  return (
    <>
      <AnimatedBackground />

      <div className="fixed inset-0 pointer-events-none -z-5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#040e1f]/40 via-transparent to-[#040e1f]/40" />
      </div>

      <main className="min-h-screen pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-amber-400/80 mb-3">
              Dream Locket
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-yellow-200 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-gray-400 text-sm">Effective {EFFECTIVE_DATE}</p>
          </div>

          {/* TL;DR */}
          <div className="p-6 md:p-8 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20">
            <p className="text-lg text-gray-200 leading-relaxed">
              <span className="text-amber-300 font-semibold">
                Dream Locket does not collect, transmit, store, or sell your data.
              </span>{" "}
              There are no accounts, no servers, no analytics, and no third-party
              tracking. Everything you write stays on your device unless you
              explicitly turn on iCloud sync, in which case it goes only into
              your own private iCloud account.
            </p>
          </div>

          {/* Body */}
          <div className="mt-4 p-6 md:p-10 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20">
            <Section title="What stays on your device">
              <p>
                When you use Dream Locket, all of the following lives locally on
                your iPhone or iPad:
              </p>
              <ul className="list-disc list-inside space-y-1 marker:text-amber-400/60">
                <li>The dreams, titles, intentions, and notes you write</li>
                <li>Tags you create and how dreams are organized</li>
                <li>Favorites and entry timestamps</li>
                <li>App settings and preferences</li>
              </ul>
              <p>
                None of it is sent to Dream Locket, to Julian Kingman, or to any
                third-party server.
              </p>
            </Section>

            <Section title="iCloud sync (optional, off by default)">
              <p>
                If you turn on iCloud sync, your journal is mirrored across
                devices signed into your Apple ID via Apple&apos;s iCloud
                infrastructure. The data lives in a private iCloud container
                tied to your account — Dream Locket has no servers in the path
                and cannot read its contents.
              </p>
              <p>
                Apple&apos;s handling of iCloud data is governed by{" "}
                <a
                  href="https://www.apple.com/legal/privacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 underline hover:text-amber-200"
                >
                  Apple&apos;s Privacy Policy
                </a>
                .
              </p>
            </Section>

            <Section title="Apple Intelligence (optional, iOS 26+)">
              <p>
                On devices that support Apple Intelligence, Dream Locket can
                surface themes and patterns across your journal. These features
                use Apple&apos;s on-device foundation models. Your dreams are
                not sent to Dream Locket and are not used to train any model.
              </p>
              <p>
                When Apple Intelligence opts to use Apple&apos;s Private Cloud
                Compute for a particular request, that handoff is governed by
                Apple and described in Apple&apos;s documentation. Dream Locket
                does not invoke any other AI service.
              </p>
            </Section>

            <Section title="Security on your device">
              <p>
                Dream Locket protects your data on-device with:
              </p>
              <ul className="list-disc list-inside space-y-1 marker:text-amber-400/60">
                <li>
                  Face ID (or device passcode) to unlock the app, with automatic
                  re-locking when the app moves to the background
                </li>
                <li>
                  Per-entry encryption available for sensitive dreams, using
                  keys derived on your device
                </li>
                <li>
                  Standard iOS data protection for the underlying database
                </li>
              </ul>
              <p>
                If you lose your device, please follow{" "}
                <a
                  href="https://support.apple.com/en-us/HT201472"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 underline hover:text-amber-200"
                >
                  Apple&apos;s guidance for a lost or stolen iPhone
                </a>
                .
              </p>
            </Section>

            <Section title="TestFlight and the App Store">
              <p>
                If you obtained Dream Locket through TestFlight or the App
                Store, Apple itself collects certain information — such as
                crash reports, install statistics, and basic usage telemetry —
                as part of operating those platforms. This information is
                shared with Julian Kingman by Apple in aggregate or anonymized
                form, and is governed by Apple&apos;s policies, not this one.
              </p>
              <p>
                Dream Locket itself does not bundle any additional analytics,
                crash reporting, or telemetry SDKs.
              </p>
            </Section>

            <Section title="Children">
              <p>
                Dream Locket is not directed at children under 13 and does not
                knowingly collect information from anyone. Since the app
                collects no information at all, this section is short by
                design.
              </p>
            </Section>

            <Section title="Your data, your control">
              <p>
                Because everything lives on your device, you are in full
                control:
              </p>
              <ul className="list-disc list-inside space-y-1 marker:text-amber-400/60">
                <li>
                  Delete an entry: tap delete inside the app — it&apos;s gone
                  from the device immediately
                </li>
                <li>
                  Delete everything: uninstall Dream Locket; iOS removes the
                  app and its local database
                </li>
                <li>
                  Turn off iCloud sync: disable it in app settings (or remove
                  Dream Locket from iCloud in your iOS Settings) and your
                  iCloud copies are removed per Apple&apos;s normal process
                </li>
                <li>
                  Export your journal: use the in-app export to take your
                  dreams with you in a portable format
                </li>
              </ul>
              <p>
                There is no &quot;request my data&quot; or &quot;delete my
                account&quot; process to go through with Dream Locket, because
                there is no account and no copy of your data anywhere we hold.
              </p>
            </Section>

            <Section title="Changes to this policy">
              <p>
                If this policy meaningfully changes, the effective date at the
                top of this page will be updated and a brief note will appear
                in the app&apos;s release notes. Significant changes that
                affect how data is handled will be highlighted clearly.
              </p>
            </Section>

            <Section title="Contact">
              <p>
                Questions, concerns, or feedback about this policy? Reach out
                via the{" "}
                <Link
                  href="/contact"
                  className="text-amber-300 underline hover:text-amber-200"
                >
                  contact page
                </Link>
                .
              </p>
            </Section>
          </div>

          {/* Back link */}
          <div className="text-center mt-12">
            <Link
              href="/dream-locket"
              className="text-orange-300 hover:text-amber-300 transition-colors"
            >
              ← Back to Dream Locket
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
