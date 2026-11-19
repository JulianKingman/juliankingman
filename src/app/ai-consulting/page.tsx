import type { Metadata } from "next";
import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";
import { MetatronsCube } from "@/components/sacred-geometry";
import {
  siGmail,
  siGoogledrive,
  siGooglecalendar,
  siGooglesheets,
  siNotion,
  siGithub,
  siLinear,
  siJira,
  siStripe,
  siHubspot,
  siAirtable,
  siShopify,
  siQuickbooks,
  siZoom,
  siDropbox,
  siMailchimp,
  siZendesk,
} from "simple-icons";

export const metadata: Metadata = {
  title: "AI Consulting — Julian Kingman",
  description:
    "AI automation flows that run real work: agent pipelines with intake, routing, verification, human approval and a cost ledger.",
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

const safeguards = [
  {
    title: "Verified, not self-reported",
    text: "A model saying the job is done proves nothing. Output is checked by something that isn't the model: tests, validators, measurements against the source material.",
  },
  {
    title: "Least privilege",
    text: "Each agent gets only the instructions, tools and secrets for the job in front of it. One client's agent cannot read another client's data, because it was never handed it.",
  },
  {
    title: "Untrusted input stays untrusted",
    text: "Email, uploads and web pages are data, not instructions. Senders are authenticated, and anything unknown or forged is held for a person instead of reaching an agent.",
  },
  {
    title: "Approval before anything irreversible",
    text: "Publishing, sending to a customer and spending money pass a human gate sized to the risk. Low-risk work flows through; high-risk work waits.",
  },
  {
    title: "Budgets and an audit trail",
    text: "Every agent runs under a spend limit, and every run is logged with what it did, what it cost and who approved it.",
  },
  {
    title: "Fail loudly",
    text: "No silent fallbacks and no made-up results. A run that fails or stalls raises an alert and tells the customer the truth about where things stand.",
  },
];

const benefits = [
  {
    title: "Reliability first",
    text: "The main reason to automate a process properly is that it then happens the same way every time. Steps don't get skipped on a busy day, and nothing depends on one person remembering.",
    lead: true,
  },
  {
    title: "Faster turnaround",
    text: "Work starts when the request arrives, not when someone gets to it. Customers stop waiting on a queue.",
  },
  {
    title: "Capacity without headcount",
    text: "Your team spends its time on judgement and relationships while the repeatable work runs beside them.",
  },
  {
    title: "A process you can see",
    text: "Once a process runs through a system, you can see where it stalls, what each job costs and what to improve next.",
  },
];

// Brand marks where the icon set carries one; a plain name otherwise.
const integrations: Array<{ name: string; path?: string }> = [
  { name: "Gmail", path: siGmail.path },
  { name: "Google Drive", path: siGoogledrive.path },
  { name: "Google Calendar", path: siGooglecalendar.path },
  { name: "Google Sheets", path: siGooglesheets.path },
  { name: "Microsoft 365" },
  { name: "Outlook" },
  { name: "Teams" },
  { name: "Slack" },
  { name: "Notion", path: siNotion.path },
  { name: "GitHub", path: siGithub.path },
  { name: "Linear", path: siLinear.path },
  { name: "Jira", path: siJira.path },
  { name: "Stripe", path: siStripe.path },
  { name: "QuickBooks", path: siQuickbooks.path },
  { name: "HubSpot", path: siHubspot.path },
  { name: "Salesforce" },
  { name: "Airtable", path: siAirtable.path },
  { name: "Shopify", path: siShopify.path },
  { name: "Mailchimp", path: siMailchimp.path },
  { name: "Zendesk", path: siZendesk.path },
  { name: "Zoom", path: siZoom.path },
  { name: "Dropbox", path: siDropbox.path },
];

const terms = [
  {
    title: "Your data is not training data",
    text: "Nothing you send through a system I build is used to train models. Where it matters, I can build on models with zero data retention.",
  },
  {
    title: "You own the code",
    text: "Everything I build for you is yours: the code, the prompts, the playbooks. You can run it without me.",
  },
  {
    title: "Hosted where you want",
    text: "It can run on my infrastructure or on yours. I can automate the deployment and infrastructure too, so shipping a change is one step.",
  },
  {
    title: "Ongoing support",
    text: "Models and APIs change. Monthly retainers are available to keep a system maintained and improving after launch.",
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
              For companies that want tools which automate important parts of how they work. I design and
              build AI automation flows that carry real work from request to result: routed, checked, approved
              and accounted for.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#start" className="btn-crt">
                Book a consultation
              </a>
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

          {/* Benefits */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-10 text-center">
              What you get out of it
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className={`p-6 bg-black/20 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                    b.lead
                      ? "md:col-span-3 border-amber-400/50"
                      : "border-orange-500/20 hover:border-orange-500/40"
                  }`}
                >
                  <h3 className={`font-display font-semibold text-white mb-3 ${b.lead ? "text-2xl" : "text-lg"}`}>
                    {b.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${b.lead ? "max-w-3xl" : "text-sm"}`}>{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Verification and safety */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-3 text-center">
              Verification and safety
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
              Getting an agent to do something is the easy part. Knowing it did the right thing, and limiting
              the damage when it doesn&apos;t, is most of the engineering.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {safeguards.map((g) => (
                <div
                  key={g.title}
                  className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-amber-400 mb-4" />
                  <h3 className="font-display text-lg font-semibold text-white mb-3">{g.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integrations */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-3 text-center">
              Works with what you already use
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">
              Automation is only useful where your work already lives. These are common ones; anything with
              an API can be connected.
            </p>
            <ul className="flex flex-wrap justify-center gap-3">
              {integrations.map((it) => (
                <li
                  key={it.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 bg-[#140a03] border border-amber-500/40 text-amber-300"
                >
                  {it.path ? (
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                      <path d={it.path} />
                    </svg>
                  ) : (
                    <span aria-hidden="true" className="w-2 h-2 bg-amber-400" />
                  )}
                  <span className="font-mono text-sm">{it.name}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Data, ownership, hosting, support */}
          <section className="mb-24">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-amber-400 mb-10 text-center">
              Your data, your code
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {terms.map((t) => (
                <div
                  key={t.title}
                  className="p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
                >
                  <h3 className="font-display text-xl font-semibold text-white mb-3">{t.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{t.text}</p>
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

          {/* First step */}
          <section id="start" className="scroll-mt-28">
            <div className="crt-panel">
              <div className="crt-panel-cell !p-8 md:!p-12 text-center">
                <p className="font-pixel text-amber-400 text-2xl tracking-widest uppercase mb-3">&gt; Where to start</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                  A consultation, <span className="text-amber-400">$300</span>
                </h2>
                <p className="text-amber-100/80 max-w-xl mx-auto mb-8 leading-relaxed">
                  Tell me about the process that costs you the most time or goes wrong most often.
                </p>
                <ul className="grid sm:grid-cols-2 gap-px bg-amber-500/30 border border-amber-500/30 max-w-2xl mx-auto mb-10 text-left">
                  <li className="bg-[#140a03] p-5">
                    <div className="font-pixel text-xl uppercase tracking-wider text-amber-400 mb-1">One hour together</div>
                    <p className="text-sm text-amber-100/70 leading-relaxed">
                      A meet and greet where we walk through how the work gets done today.
                    </p>
                  </li>
                  <li className="bg-[#140a03] p-5">
                    <div className="font-pixel text-xl uppercase tracking-wider text-amber-400 mb-1">A plan you keep</div>
                    <p className="text-sm text-amber-100/70 leading-relaxed">
                      A written plan for what to automate and how. It is yours whether or not we work together.
                    </p>
                  </li>
                </ul>
                <Link href="/contact" className="btn-crt">
                  Book a consultation
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
