import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";
import { MetatronsCube } from "@/components/sacred-geometry";

export const metadata: Metadata = {
  title: "AI Consulting — Julian Kingman",
  description:
    "AI automation flows that run real work: agent pipelines with intake, routing, checks, human approval and a cost ledger.",
};

const flow = [
  { step: "Intake", text: "Email, uploads, forms and payments all land in one queue." },
  { step: "Route", text: "A classifier decides which agent owns each item and what it may touch." },
  { step: "Work", text: "The agent runs with only that job's instructions, tools and secrets." },
  { step: "Check", text: "Automated checks catch what a model can't be trusted to notice about itself." },
  { step: "Approve", text: "A person signs off where it matters. Every human touch is counted." },
  { step: "Ledger", text: "Each run records its cost and outcome, so margins are known, not guessed." },
];

const services = [
  {
    title: "Agent pipelines",
    text: "Multi-step flows where agents do the work and hand off to each other, with queues, retries and clear ownership of each state change.",
  },
  {
    title: "Long-running agents",
    text: "Jobs that take hours, not seconds. Checkpoints and saved transcripts mean a restart resumes the work instead of repeating it.",
  },
  {
    title: "Approval gates",
    text: "The right amount of human review in the right place, so output is safe to send to a customer without a person doing the whole job.",
  },
  {
    title: "Cost and failure visibility",
    text: "Per-job spend, alerts when a run fails or stalls, and no silent dead ends. You always know what the system did and what it cost.",
  },
];

interface CaseStudy {
  name: string;
  kicker: string;
  href?: string;
  linkLabel?: string;
  summary: string;
  how: string[];
}

const cases: CaseStudy[] = [
  {
    name: "Consult Ants",
    kicker: "An agency staffed by agents",
    href: "https://consult-ants.love",
    linkLabel: "consult-ants.love",
    summary:
      "A digital agency for tiny businesses. Each client gets a colony of Ants: agents that each own one job, such as keeping the website updated, social posts, review replies, search or reporting.",
    how: [
      "A client writes an ordinary email. An orchestrator, Command Ant, reads it, decides which Ant owns it and creates the task. It directs the work and does none of it.",
      "Every client is isolated in their own company, with their own playbooks, connectors, secrets and budget. Mail from unknown or unverified senders is held, never delivered to a client's agents.",
      "Each Ant runs from a playbook written by a human expert, and its output passes an approval tier before anything is published.",
      "Every run is recorded, so the monthly report and the cost of serving each client fall out of the record.",
    ],
  },
  {
    name: "Mini Brick Home",
    kicker: "Photos in, a brick-built house out",
    href: "https://minibrickhome.com",
    linkLabel: "minibrickhome.com",
    summary:
      "Custom brick-built models of real houses. A customer uploads photos of a house and gets building instructions and a parts list made for that house alone.",
    how: [
      "A vision model turns the photos into a structured description of the house, which drives a free preview image before anyone pays.",
      "Paying queues a design round. A design agent works from the photos, builds the model in a purpose-built brick engine, renders it and writes the customer a message.",
      "Rounds can run for a long time, so the agent's workspace and transcript are checkpointed as it goes. If the machine dies, the next attempt resumes where it left off.",
      "Nothing reaches the customer unreviewed. Builds and messages wait for approval, each round reports its cost, and a failed or stalled round raises an alert instead of leaving someone waiting.",
    ],
  },
  {
    name: "Gloo",
    kicker: "Automating software development",
    summary:
      "At Gloo I worked on automating the software development process itself, applying the same ideas to an engineering team's own workflow.",
    how: [],
  },
];

export default function AiConsulting() {
  return (
    <>
      <AnimatedBackground />

      <main className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
          <MetatronsCube className="w-[min(44rem,130vw)] h-[min(44rem,130vw)] opacity-[0.09] -mt-24" cycle={34} spin={-320} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Hero */}
          <section className="text-center mb-24">
            <p className="font-pixel text-amber-400 text-2xl tracking-widest uppercase mb-4">&gt; AI consulting</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-300 bg-clip-text text-transparent">
                Automation that does the work
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              I design and build AI automation flows that carry real work from request to result: agents that
              are routed, checked, approved and accounted for. I build my own businesses on them.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/contact" className="btn-crt">
                Start a conversation
              </Link>
              <a href="#work" className="btn-crt btn-crt-ghost">
                See the work
              </a>
            </div>
          </section>

          {/* The flow */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-3 text-center">
              Advanced automation flows
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
              A prompt is not a system. The flows I build share one shape, whatever the work is.
            </p>
            <ol className="crt-panel grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
              {flow.map((f, i) => (
                <li key={f.step} className="crt-panel-cell">
                  <div className="font-pixel text-2xl uppercase tracking-wider text-amber-400 mb-2">
                    <span className="opacity-50">{String(i + 1).padStart(2, "0")}</span> {f.step}
                  </div>
                  <p className="text-sm text-amber-100/70 leading-relaxed">{f.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* What I build */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-10 text-center">
              What I can build with you
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case studies */}
          <section id="work" className="mb-24 scroll-mt-28">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-3 text-center">
              From my own work
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
              Systems I have designed and built.
            </p>
            <div className="space-y-8">
              {cases.map((c) => (
                <article
                  key={c.name}
                  className="p-6 md:p-8 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-white">{c.name}</h3>
                      <p className="text-amber-400 text-sm mt-1">{c.kicker}</p>
                    </div>
                    {c.href && (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-orange-300 hover:text-amber-300 transition-colors"
                      >
                        {c.linkLabel} ↗
                      </a>
                    )}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{c.summary}</p>
                  {c.how.length > 0 && (
                    <>
                      <h4 className="font-pixel text-xl uppercase tracking-wider text-amber-400/80 mt-6 mb-3">
                        How it works
                      </h4>
                      <ul className="space-y-3">
                        {c.how.map((h) => (
                          <li key={h} className="flex gap-3 text-gray-300 leading-relaxed">
                            <span className="mt-2.5 w-2 h-2 bg-amber-400 flex-shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Have a process that eats hours every week? Tell me what it is and I&apos;ll tell you what I&apos;d automate first.
            </p>
            <Link href="/contact" className="btn-crt">
              Let&apos;s talk
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
