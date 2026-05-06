import Image from "next/image";

const releaseUrl = "https://github.com/virat-mankali/svara/releases";
const repoUrl = "https://github.com/virat-mankali/svara";
const heroPulseHeights = [22, 34, 18, 42, 26, 50, 30, 44, 24];

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
      <section className="relative overflow-hidden border-b border-[#e0d2bd] bg-[linear-gradient(180deg,#fbf6ee_0%,#f8f1e6_56%,#f5ecde_100%)] px-5 pb-14 pt-5 sm:px-8 lg:px-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-grid absolute inset-0" />
          <div className="hero-sheen absolute inset-0" />
          <div className="hero-beams absolute inset-y-0 right-[-12%] w-[62%]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col">
          <nav className="flex items-center justify-between rounded-full border border-[#d8cbbb]/80 bg-[#fffaf2]/72 px-4 py-3 shadow-[0_16px_50px_rgba(79,56,38,0.08)] backdrop-blur-xl sm:px-5">
            <a href="#top" className="flex items-center gap-3" aria-label="Svara home">
              <Image
                src="/svara.png"
                alt="Svara logo"
                width={36}
                height={36}
                className="rounded-full"
              />
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

          <div className="grid min-h-[calc(86svh-84px)] gap-14 py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:items-center">
            <div id="top" className="max-w-3xl pt-10 lg:pt-14">
              <p className="mb-5 inline-flex rounded-full border border-[#d9c9b2] bg-[#fff8ed]/84 px-4 py-2 text-sm font-semibold text-[#6c5842] shadow-[0_10px_34px_rgba(86,64,43,0.08)] backdrop-blur">
                Free macOS voice dictation for people who think out loud
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-normal text-[#211c18] sm:text-7xl lg:text-[6.6rem]">
                Speak in drafts.
                <br />
                <span className="text-[#8a6547]">Land in clarity.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#5f5142] sm:text-xl">
                Svara is a tiny menu bar app that turns your voice into polished
                text anywhere on your Mac. Press a shortcut, talk naturally, and
                watch the rough thought settle into something you can send.
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
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                <div className="rounded-[8px] border border-[#dfd0ba] bg-[#fffaf2]/82 p-4 shadow-[0_16px_44px_rgba(91,68,43,0.06)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a45]">
                    Trigger
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#241f1a]">
                    Shortcut first
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6a5b4b]">
                    Start talking without changing apps or breaking your flow.
                  </p>
                </div>
                <div className="rounded-[8px] border border-[#dfd0ba] bg-[#fffaf2]/82 p-4 shadow-[0_16px_44px_rgba(91,68,43,0.06)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a45]">
                    Engine
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#241f1a]">
                    Groq or local
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6a5b4b]">
                    Pick speed when you want it, or privacy when you need it.
                  </p>
                </div>
                <div className="rounded-[8px] border border-[#dfd0ba] bg-[#fffaf2]/82 p-4 shadow-[0_16px_44px_rgba(91,68,43,0.06)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9a6a45]">
                    Result
                  </p>
                  <p className="mt-2 text-base font-semibold text-[#241f1a]">
                    Ready to paste
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#6a5b4b]">
                    Your text comes back calmer, cleaner, and already usable.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:justify-self-end">
              <div className="hero-float absolute left-4 top-6 rounded-full border border-[#dac9b1] bg-[#fffaf2]/88 px-4 py-2 text-sm font-semibold text-[#6b5a48] shadow-[0_16px_40px_rgba(79,56,38,0.12)] backdrop-blur">
                Option + Space
              </div>
              <div className="hero-float-delayed absolute bottom-10 right-0 rounded-full border border-[#d3dfc9] bg-[#f4f8ef]/92 px-4 py-2 text-sm font-semibold text-[#4d5e42] shadow-[0_16px_40px_rgba(73,92,55,0.12)] backdrop-blur">
                Clean paste ready
              </div>
              <div className="rounded-[8px] border border-[#dccdb8] bg-[#fffaf2]/78 p-4 shadow-[0_28px_80px_rgba(91,68,43,0.14)] backdrop-blur-xl">
                <div className="rounded-[8px] border border-[#eadcca] bg-[#fcf6ec] p-5">
                  <div className="mb-6 flex items-center justify-between border-b border-[#e6d8c5] pb-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/svara.png"
                        alt="Svara logo"
                        width={38}
                        height={38}
                        className="rounded-full"
                      />
                      <div>
                        <p className="text-sm font-semibold text-[#241f1a]">
                          Svara live
                        </p>
                        <p className="text-xs text-[#7d6b59]">
                          Floating on top of your current app
                        </p>
                      </div>
                    </div>
                    <span className="rounded-full border border-[#d3dfc9] bg-[#f3f8ed] px-3 py-1 text-xs font-semibold text-[#556647]">
                      Listening
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-[8px] border border-[#e8d9c7] bg-[linear-gradient(180deg,#fffaf1_0%,#f8efe2_100%)] p-5">
                    <div className="hero-scan-line absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(138,101,71,0.6),transparent)]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9a6a45]">
                      Current thought
                    </p>
                    <p className="mt-3 max-w-sm text-lg leading-8 text-[#4d4034]">
                      okay write a release note that sounds calm, direct, and
                      less like I was sprinting when I recorded it
                    </p>
                    <div className="mt-6 flex h-16 items-end gap-1.5">
                      {heroPulseHeights.map((height, index) => (
                        <span
                          key={`${height}-${index}`}
                          className="hero-meter w-2 rounded-full bg-[#7c8f6e]"
                          style={{
                            height,
                            animationDelay: `${index * 120}ms`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-[8px] border border-[#eadbca] bg-[#fbf3e8] p-4">
                      <p className="text-sm font-semibold text-[#917257]">
                        Heard
                      </p>
                      <p className="mt-2 text-[#6c5d4e]">
                        remind me to send the release page around and make the
                        copy feel calmer
                      </p>
                    </div>
                    <div className="rounded-[8px] border border-[#d6e0cd] bg-[#f4f8ef] p-4">
                      <p className="text-sm font-semibold text-[#657a55]">
                        Pasted
                      </p>
                      <p className="mt-2 text-[#34402d]">
                        Please send the release page around today. I tightened
                        the copy so it reads a little calmer and more direct.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="border-b border-[#e0d2bd] bg-[#fff8ed] px-5 py-16 sm:px-8 lg:px-10"
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
                    Remind me to send the release page to people and make it
                    sound calmer.
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

      <section className="border-t border-[#e0d2bd] bg-[#fff8ed] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:gap-14 lg:text-left">
          <Image
            src="/virat.jpg"
            alt="Virat Mankali"
            width={160}
            height={160}
            className="shrink-0 rounded-full border-4 border-[#e4d6c4] object-cover shadow-[0_16px_44px_rgba(91,68,43,0.12)]"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9a6a45]">
              Built by
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#241f1a] sm:text-4xl">
              Virat Mankali
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5d5044]">
              I&apos;m a Computer Science student who liked the idea of voice
              dictation tools like Wispr Flow but didn&apos;t have the budget for
              another subscription. So I built Svara — a free, open-source
              alternative that does one thing well: turn messy speech into clean
              text on macOS, without the price tag.
            </p>
          </div>
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
