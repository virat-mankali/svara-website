import Image from "next/image";

const releaseUrl = "https://github.com/virat-mankali/svara/releases";
const repoUrl = "https://github.com/virat-mankali/svara";

const features = [
  {
    title: "Press, speak, paste",
    body: "Trigger Svara with a shortcut, say the thought, and it drops clean text into the app you were already using.",
  },
  {
    title: "Fast or local",
    body: "Use Groq when you want speed, or Local Whisper when you want transcription to stay on your machine.",
  },
  {
    title: "Built for macOS",
    body: "A tiny tray app with history, settings, permissions guidance, and automatic insertion where your cursor was.",
  },
];

const steps = [
  "Download the latest macOS DMG from GitHub Releases.",
  "Drag Svara into Applications and launch it from your menu bar.",
  "Grant microphone and accessibility permissions, then talk instead of typing.",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f1e6] text-[#241f1a]">
      <section className="relative min-h-[86svh] px-5 pb-12 pt-5 sm:px-8 lg:px-10">
        <Image
          src="/svara-hero.png"
          alt="A calm product mockup showing a voice dictation interface, waveforms, and cleaned transcript bubbles."
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,241,230,0.99)_0%,rgba(248,241,230,0.94)_42%,rgba(248,241,230,0.66)_68%,rgba(248,241,230,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(248,241,230,0)_0%,#f8f1e6_82%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
          <nav className="flex items-center justify-between rounded-full border border-[#d8cbbb]/80 bg-[#fffaf2]/72 px-4 py-3 shadow-[0_16px_50px_rgba(79,56,38,0.08)] backdrop-blur-xl sm:px-5">
            <a href="#top" className="flex items-center gap-3" aria-label="Svara home">
              <span className="grid size-9 place-items-center rounded-full bg-[#24201b] text-sm font-semibold text-[#fff7ea]">
                S
              </span>
              <span className="text-base font-semibold tracking-[0.18em] text-[#342d24]">
                SVARA
              </span>
            </a>
            <div className="hidden items-center gap-7 text-sm font-medium text-[#635647] md:flex">
              <a className="transition hover:text-[#241f1a]" href="#story">
                Story
              </a>
              <a className="transition hover:text-[#241f1a]" href="#features">
                Features
              </a>
              <a className="transition hover:text-[#241f1a]" href="#install">
                Install
              </a>
            </div>
            <a
              href={releaseUrl}
              className="rounded-full bg-[#24201b] px-5 py-2.5 text-sm font-semibold text-[#fff7ea] shadow-[0_12px_30px_rgba(36,32,27,0.2)] transition hover:-translate-y-0.5 hover:bg-[#3a332b]"
            >
              Get Svara
            </a>
          </nav>

          <div className="flex min-h-[calc(86svh-84px)] items-center py-16">
            <div id="top" className="max-w-3xl pt-10">
              <p className="mb-5 inline-flex rounded-full border border-[#d9c9b2] bg-[#fff8ed]/82 px-4 py-2 text-sm font-semibold text-[#6c5842] shadow-[0_10px_34px_rgba(86,64,43,0.08)] backdrop-blur">
                Free macOS voice dictation for people who think out loud
              </p>
              <h1 className="max-w-4xl text-[clamp(3rem,8vw,7.8rem)] font-semibold leading-[0.9] tracking-normal text-[#211c18]">
                Speak it.
                <br />
                Ship it.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[#5f5142] sm:text-xl">
                Svara is a tiny menu bar app that turns your voice into polished
                text anywhere on your Mac. Press a shortcut, talk naturally, and
                let it paste the result where you were already working.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={releaseUrl}
                  className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#24201b] px-7 text-base font-semibold text-[#fff7ea] shadow-[0_18px_36px_rgba(36,32,27,0.2)] transition hover:-translate-y-0.5 hover:bg-[#3a332b]"
                >
                  Download latest release
                </a>
                <a
                  href={repoUrl}
                  className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#cdbda9] bg-[#fffaf2]/78 px-7 text-base font-semibold text-[#2b251f] backdrop-blur transition hover:-translate-y-0.5 hover:border-[#a99174]"
                >
                  View source
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-y border-[#e0d2bd] bg-[#fff8ed] px-5 py-16 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a6a45]">
              Why it exists
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight text-[#241f1a] sm:text-5xl">
              I wanted the flow. I did not want the subscription.
            </h2>
          </div>
          <div className="max-w-3xl text-lg leading-8 text-[#5d5044]">
            <p>
              I liked the idea of tools like Wispr Flow: speak naturally, get
              usable text, keep moving. But I did not have the budget to spend
              on another premium voice tool, so I built Svara as a free
              alternative I could actually use every day.
            </p>
            <p className="mt-5">
              It is intentionally small: no heavy dashboard, no complicated
              setup, no lock-in. Just a shortcut, transcription, history, and
              clean insertion into the place where your thought belongs.
            </p>
          </div>
        </div>
      </section>

      <section id="features" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a6a45]">
                What it does
              </p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                A dictation layer that stays out of the way.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#6a5b4b]">
              Svara is built for the small moments where typing slows down the
              thought: messages, docs, notes, prompts, emails, and issue
              comments.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[8px] border border-[#dfd0ba] bg-[#fffaf2] p-6 shadow-[0_16px_44px_rgba(91,68,43,0.08)]"
              >
                <div className="mb-7 flex h-14 items-end gap-1.5">
                  {[22, 34, 18, 42, 28, 50, 24].map((height, index) => (
                    <span
                      key={`${feature.title}-${height}-${index}`}
                      className="w-2 rounded-full bg-[#7d8f6f]"
                      style={{ height }}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-[#241f1a]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[#695b4d]">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2a2923] px-5 py-20 text-[#fff7ea] sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d2a06d]">
              The workflow
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              From messy thought to pasted text.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#d9cdbd]">
              Svara restores the app you were using, transcribes the recording,
              and simulates paste so you can stay in the same mental lane.
            </p>
          </div>

          <div className="rounded-[8px] border border-[#5a5044] bg-[#353229] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.2)]">
            <div className="rounded-[6px] bg-[#fff8ed] p-5 text-[#241f1a]">
              <div className="mb-5 flex items-center justify-between border-b border-[#e4d6c4] pb-4">
                <span className="text-sm font-semibold">Svara History</span>
                <span className="rounded-full bg-[#dfe8d8] px-3 py-1 text-xs font-semibold text-[#536348]">
                  Ready
                </span>
              </div>
              <div className="space-y-3">
                <div className="rounded-[8px] border border-[#eadbca] bg-[#fbf3e8] p-4">
                  <p className="text-sm font-semibold text-[#917257]">
                    You said
                  </p>
                  <p className="mt-2 text-[#6c5d4e]">
                    uhh remind me to send the release page to people and make it
                    sound like calmer
                  </p>
                </div>
                <div className="rounded-[8px] border border-[#d6e0cd] bg-[#f4f8ef] p-4">
                  <p className="text-sm font-semibold text-[#657a55]">
                    Svara pasted
                  </p>
                  <p className="mt-2 text-[#34402d]">
                    Please share the release page and keep the tone calm,
                    polished, and easy to understand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="install" className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a6a45]">
              Install
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Grab the DMG and start talking.
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={releaseUrl}
                className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#24201b] px-7 text-base font-semibold text-[#fff7ea] shadow-[0_18px_36px_rgba(36,32,27,0.18)] transition hover:-translate-y-0.5 hover:bg-[#3a332b]"
              >
                Open releases
              </a>
              <a
                href={`${repoUrl}#install-svara`}
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-[#cdbda9] bg-[#fffaf2] px-7 text-base font-semibold text-[#2b251f] transition hover:-translate-y-0.5 hover:border-[#a99174]"
              >
                Read install notes
              </a>
            </div>
          </div>
          <ol className="grid gap-4">
            {steps.map((step, index) => (
              <li
                key={step}
                className="flex gap-5 rounded-[8px] border border-[#dfd0ba] bg-[#fffaf2] p-5 shadow-[0_16px_44px_rgba(91,68,43,0.07)]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#dfe8d8] text-sm font-bold text-[#4f6045]">
                  {index + 1}
                </span>
                <p className="self-center text-base leading-7 text-[#5d5044]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <footer className="border-t border-[#dfd0ba] bg-[#fff8ed] px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#716454] sm:flex-row sm:items-center sm:justify-between">
          <p>Svara is open source and not affiliated with Wispr Flow.</p>
          <div className="flex gap-5 font-semibold text-[#342d24]">
            <a className="hover:text-[#836449]" href={releaseUrl}>
              Releases
            </a>
            <a className="hover:text-[#836449]" href={repoUrl}>
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
