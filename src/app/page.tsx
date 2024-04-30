import Image from "next/image";

import { Metadata } from "next";
import ui1 from "../assets/ui-1.webp";
import ui2 from "../assets/ui-2.webp";
import ui3 from "../assets/ui-3.webp";
import ui4 from "../assets/ui-4.webp";
import { Footer } from "./footer";
import { Link } from "./link";
import { Logo } from "./logo";
import { Pipes } from "./pipes";
import { USE_CASES } from "./use-cases";
import { WaitlistSignup } from "./waitlist-signup";

export const metadata: Metadata = {
  title: "skyffel",
  description: "the command center for engineering teams",
  openGraph: {
    images: [
      {
        url: "https://skyffel.com/opengraph-image.png",
        width: 4800,
        height: 2520,
        alt: "skyffel",
      },
    ],
  },
};

export default async function Home() {
  return (
    <>
      <header className="flex justify-center mb-12">
        <Logo className="w-32" />
      </header>
      <main className="flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center gap-4 text-black/80 max-w-[80ch]">
          <h1 className="md:leading-tight leading-tight text-4xl md:text-4xl font-semibold text-center text-balance">
            Hard time keeping up with your engineering teams?
          </h1>
          <p className="text-center text-lg max-w-[50ch] text-black/60 text-balance">
            {
              "Break information silos and get real time visibility of what is happening across teams. Your works apps, unified. Finally."
            }
          </p>
        </div>
        <iframe
          className="w-full max-w-xl md:w-3/4 aspect-video rounded-xl"
          src="https://www.youtube.com/embed/U_2KU2gk-pY?si=FJc0PDmx_ggXQbsY"
          title="skyffel - beta demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div className="flex flex-col gap-4 items-center my-4">
          <Link
            href="https://link.skyffel.com/demo"
            target="_blank"
            className="bg-black/80 text-white px-4 py-2 rounded-xl leading-none shadow-lg hover:bg-black/60 transition"
          >
            Schedule demo
          </Link>
          <label className="flex flex-col gap-2 items-center mt-4">
            <span className="text-sm text-black/80">
              Get on the beta waitlist
            </span>
            <WaitlistSignup />
          </label>
        </div>

        <div className="mb-16">
          <span className="text-black/60 block mb-1">Use cases</span>
          <h2 className="text-3xl font-medium mb-8">
            {"Accessible information for those who need it"}
          </h2>
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {USE_CASES.map((useCase) => (
              <article
                key={useCase.title}
                className="flex flex-col gap-1 rounded-xl border border-black/10 shadow-lg bg-white p-6 hover:border-black/20 transition"
              >
                <h3 className="text-xl font-medium text-black/80">
                  {useCase.title}
                </h3>
                <p className="text-black/80 mb-4">{useCase.description}</p>
                <div className="flex flex-col items-start gap-2 mt-auto">
                  <input
                    type="search"
                    placeholder="hey there!"
                    autoComplete="off"
                    defaultValue={useCase.question}
                    className="h-11 w-full border border-transparent focus:border-black/40 bg-black/5 px-3 pl-4 py-1 placeholder:text-black/40 focus:outline-none backdrop-blur-lg rounded-xl transition"
                  />
                  <ul className="flex gap-2 justify-start">
                    {useCase.items.map((item) => {
                      if (item.type === "dashboard") {
                        return (
                          <div
                            key={item.name}
                            className="flex items-center gap-2 text-sm px-3 py-2 border border-black/10 rounded-xl hover:bg-black/5 transition"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect width="7" height="9" x="3" y="3" rx="1" />
                              <rect width="7" height="5" x="14" y="3" rx="1" />
                              <rect width="7" height="9" x="14" y="12" rx="1" />
                              <rect width="7" height="5" x="3" y="16" rx="1" />
                            </svg>
                            {item.name}
                          </div>
                        );
                      }

                      if (item.type === "doc") {
                        return (
                          <div
                            key={item.name}
                            className="flex items-center gap-2 text-sm px-3 py-2 border border-black/10 rounded-xl hover:bg-black/5 transition"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                              <path d="M10 9H8" />
                              <path d="M16 13H8" />
                              <path d="M16 17H8" />
                            </svg>
                            {item.name}
                          </div>
                        );
                      }

                      return null;
                    })}
                  </ul>
                </div>
              </article>
            ))}
          </section>
        </div>
        <Pipes />
        <div>
          <span className="text-black/60 block mb-1">Features</span>
          <h2 className="text-4xl font-medium mb-8">
            {"The glue between your tools"}
          </h2>
          <section className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-1 flex-col gap-8">
              <article>
                <figure className="flex flex-col gap-4">
                  <Image
                    src={ui1}
                    alt="Hero"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl border border-black/10 shadow-lg hover:border-black/20 transition"
                  />
                  <figcaption className="space-y-1 text-black/80 text-sm">
                    <p className="font-medium">Search across all your apps</p>
                    <p>
                      Find files and documents you need instantly instead of
                      browsing every app where you <i>might</i> find it
                    </p>
                  </figcaption>
                </figure>
              </article>
              <article>
                <figure className="flex flex-col gap-4">
                  <Image
                    src={ui3}
                    alt="Hero"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl border border-black/10 shadow-lg"
                  />
                  <figcaption className="space-y-1 text-black/80 text-sm">
                    <p className="font-medium">
                      Grouped and summarized activity
                    </p>
                    <p>
                      Get what you need to know in a single place instead of
                      scattering them across different apps
                    </p>
                  </figcaption>
                </figure>
              </article>
            </div>
            <div className="flex flex-1 flex-col gap-8">
              <article>
                <figure className="flex flex-col gap-4">
                  <Image
                    src={ui2}
                    alt="Hero"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl border border-black/10 shadow-lg"
                  />
                  <figcaption className="space-y-1 text-black/80 text-sm">
                    <p className="font-medium">Organized in spaces</p>
                    <p>
                      A space for every team and project to keep your documents
                      and activity organized
                    </p>
                  </figcaption>
                </figure>
              </article>
              <article>
                <figure className="flex flex-col gap-4">
                  <Image
                    src={ui4}
                    alt="Hero"
                    style={{ width: "100%", height: "auto" }}
                    className="rounded-xl border border-black/10 shadow-lg"
                  />
                  <figcaption className="space-y-1 text-black/80 text-sm">
                    <p className="font-medium">
                      Shareable reports for stakeholders
                    </p>
                    Generate reports so you can keep them in the loop without
                    writing them yourself
                  </figcaption>
                </figure>
              </article>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
