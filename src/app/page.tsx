import Image from "next/image";

import ui1 from "../assets/ui-1.webp";
import ui2 from "../assets/ui-2.webp";
import ui3 from "../assets/ui-3.webp";
import ui4 from "../assets/ui-4.webp";
import { WaitlistSignup } from "./waitlist-signup";
import { Logo } from "./logo";

export default function Home() {
  return (
    <>
      <header className="flex justify-center mb-12">
        <Logo className="w-32" />
      </header>
      <main className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 text-black/80 max-w-[60ch]">
          <h1 className="text-5xl font-medium">
            Stay on top of your most important work.
          </h1>
          <p>
            It’s easy to lose track of what you need to do and understand what
            is going on. You get a notification, someone tags you, and stuff is
            just happening. You’ll get back to it. Eventually.
          </p>
          <p>
            We want to make it easier for you to stay on top of the important
            things and to understand what is happening within your business.
            Essentially, we’re building the “For you” with information from all
            the tools you’re already using.
          </p>
          <p>
            Things you maybe want to do will be suggested to you, like answering
            that email you forgot about. Or scheduling the meeting you said you
            would.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <label className="flex flex-col gap-2 items-start">
            <span className="text-sm">Get on the waitlist</span>
            <WaitlistSignup />
          </label>
          <label className="flex flex-col gap-2 items-start">
            <span className="text-sm">Magic button</span>
            <a
              href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2PP6mzNK_7Mz1VNxNjokAprNyoPRwtBjNR_Hrz3N1BH0A5-zH3cMQ36sL1S3AtXENwkitg5ses"
              target="_blank"
              className="bg-black/80 text-white px-4 py-2 rounded-xl leading-none shadow-lg hover:bg-black/60 transition"
            >
              See it live
            </a>
          </label>
        </div>
        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-1 flex-col gap-8">
            <article>
              <figure className="flex flex-col gap-4">
                <Image
                  src={ui1}
                  alt="Hero"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl border border-black/10 shadow-lg"
                />
                <figcaption className="text-black/80 text-sm">
                  All things relevant to you
                </figcaption>
              </figure>
            </article>
            <article>
              <figure className="flex flex-col gap-4">
                <Image
                  src={ui2}
                  alt="Hero"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl border border-black/10 shadow-lg"
                />
                <figcaption className="text-black/80 text-sm">
                  Search for your files, reports and what you need
                </figcaption>
              </figure>
            </article>
          </div>
          <div className="flex flex-1 flex-col gap-8">
            <article>
              <figure className="flex flex-col gap-4">
                <Image
                  src={ui3}
                  alt="Hero"
                  style={{ width: "100%", height: "auto" }}
                  className="rounded-xl border border-black/10 shadow-lg"
                />
                <figcaption className="text-black/80 text-sm">
                  Take command where actions will be most impactful
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
                <figcaption className="text-black/80 text-sm">
                  Your work, organized
                </figcaption>
              </figure>
            </article>
          </div>
        </section>
      </main>
      <footer className="mt-16 w-full border-t border-t-black/10 pt-8 flex justify-between items-end">
        <Logo className="h-8" />
        <ul className="flex gap-4">
          <li>
            <a
              href="https://twitter.com/skyffelhq"
              target="_blank"
              className="text-black/80 hover:text-black/100 transition"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_649_3790)">
                  <path
                    d="M14.2856 10.2619L23.2216 0.0983887H21.1048L13.3424 8.9214L7.1472 0.0983887H0L9.3704 13.4416L0 24.0983H2.1168L10.3088 14.7789L16.8528 24.0983H24M2.8808 1.66028H6.1328L21.1032 22.6131H17.8504"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_649_3790">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.0983887)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/skyffel"
              target="_blank"
              className="text-black/80 hover:text-black/100 transition"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_649_3792)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.7715 0.0991211H22.2225C23.2027 0.0991211 24 0.873871 24 1.82787V22.3659C24 23.3221 23.2027 24.0984 22.224 24.0984H1.7715C0.795 24.0984 0 23.3221 0 22.3659V1.82787C0 0.873871 0.795 0.0991211 1.7715 0.0991211ZM7.12443 9.09612H3.55818V20.5486H7.12443V9.09612ZM7.40118 5.45862C7.40118 4.32087 6.47643 3.39612 5.33868 3.39612C5.06764 3.39582 4.79919 3.44895 4.5487 3.55247C4.29821 3.65599 4.07057 3.80787 3.87881 3.99942C3.68705 4.19097 3.53493 4.41843 3.43114 4.66882C3.32735 4.9192 3.27393 5.18758 3.27393 5.45862C3.27531 6.00593 3.4934 6.53041 3.88047 6.91735C4.26755 7.30429 4.79212 7.52218 5.33943 7.52337C6.47643 7.52337 7.40118 6.59637 7.40118 5.45862ZM9.35643 9.09612H9.35118L9.35643 9.09387V9.09612ZM9.35643 9.09612V20.5464H12.9129V14.8809C12.9129 13.3884 13.1979 11.9409 15.0504 11.9409C16.8759 11.9409 16.8999 13.6509 16.8999 14.9784V20.5494H20.4572V14.2674C20.4572 11.1841 19.7919 8.81187 16.1874 8.81187C14.4489 8.81187 13.2879 9.76137 12.8124 10.6614H12.7652V9.09612H9.35643Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_649_3792">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0 0.0983887)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/skyffel"
              target="_blank"
              className="text-black/80 hover:text-black/100 transition"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_649_3796)">
                  <path
                    d="M11.9536 0.0983887C5.35266 0.0983887 0 5.45011 0 12.052C0 17.3335 3.42506 21.8142 8.17462 23.3948C8.772 23.5054 8.99137 23.1355 8.99137 22.8197C8.99137 22.5347 8.98022 21.593 8.97516 20.5942C5.64956 21.3173 4.94784 19.1838 4.94784 19.1838C4.40409 17.8021 3.62062 17.4348 3.62062 17.4348C2.53612 16.6929 3.70237 16.7081 3.70237 16.7081C4.90275 16.7924 5.53481 17.9399 5.53481 17.9399C6.60094 19.7674 8.33119 19.239 9.01331 18.9337C9.12056 18.161 9.43041 17.6338 9.77222 17.3353C7.11722 17.0329 4.32609 16.0079 4.32609 11.4277C4.32609 10.1227 4.79306 9.05629 5.55778 8.2192C5.43366 7.91808 5.02453 6.70233 5.67356 5.05579C5.67356 5.05579 6.67734 4.73451 8.96166 6.28111C9.91509 6.01617 10.9377 5.88342 11.9536 5.87892C12.9695 5.88342 13.9928 6.01617 14.9482 6.28111C17.2297 4.73451 18.2321 5.05579 18.2321 5.05579C18.8827 6.70233 18.4734 7.91808 18.3493 8.2192C19.1157 9.05629 19.5795 10.1226 19.5795 11.4277C19.5795 16.0188 16.7831 17.0298 14.1214 17.3257C14.5501 17.6967 14.9321 18.4242 14.9321 19.5393C14.9321 21.1387 14.9182 22.426 14.9182 22.8197C14.9182 23.1378 15.1334 23.5106 15.7394 23.3932C20.4863 21.8108 23.9071 17.3317 23.9071 12.052C23.9071 5.45011 18.5552 0.0983887 11.9536 0.0983887Z"
                    fill="currentColor"
                  />
                  <path
                    d="M4.47641 17.1265C4.45016 17.1859 4.3566 17.2037 4.27157 17.163C4.18485 17.124 4.1361 17.043 4.16422 16.9834C4.19 16.9222 4.28357 16.9052 4.3701 16.9462C4.457 16.9852 4.50651 17.0669 4.47641 17.1265ZM5.06441 17.6512C5.00741 17.704 4.89594 17.6795 4.82029 17.5959C4.7421 17.5126 4.72747 17.4012 4.78532 17.3475C4.8441 17.2947 4.95219 17.3194 5.03057 17.4028C5.10876 17.4871 5.12394 17.5978 5.06432 17.6512M5.46782 18.3224C5.39451 18.3733 5.27469 18.3256 5.20072 18.2193C5.1275 18.1131 5.12751 17.9856 5.20232 17.9345C5.27657 17.8834 5.3945 17.9293 5.4695 18.0348C5.54263 18.1429 5.54263 18.2704 5.46772 18.3225M6.14994 19.0999C6.08441 19.1721 5.94491 19.1527 5.84272 19.0541C5.73829 18.9577 5.70913 18.821 5.77485 18.7487C5.84113 18.6763 5.98147 18.6967 6.08441 18.7944C6.18819 18.8906 6.21979 19.0284 6.14994 19.0999ZM7.03157 19.3624C7.00279 19.4559 6.86835 19.4985 6.73297 19.4587C6.59779 19.4178 6.50929 19.3081 6.53657 19.2135C6.56469 19.1193 6.69969 19.0749 6.8361 19.1175C6.9711 19.1583 7.05969 19.2671 7.03157 19.3624ZM8.03507 19.4737C8.03844 19.5723 7.9236 19.654 7.78147 19.6558C7.63851 19.6589 7.52291 19.5791 7.52141 19.4822C7.52141 19.3826 7.63363 19.3016 7.7765 19.2993C7.91863 19.2965 8.03507 19.3757 8.03507 19.4737ZM9.02075 19.4359C9.03782 19.5321 8.939 19.6309 8.79791 19.6571C8.65916 19.6824 8.53072 19.6231 8.513 19.5277C8.49575 19.4291 8.59644 19.3304 8.73491 19.3048C8.87629 19.2802 9.00275 19.3381 9.02075 19.4359Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_649_3796">
                    <rect
                      width="24"
                      height="23.3438"
                      fill="white"
                      transform="translate(0 0.0983887)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
