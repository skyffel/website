"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function WaitlistSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false); // Added state to track success

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Reset error state on new submission
    setIsSuccess(false); // Reset success state on new submission
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    try {
      document.URL;

      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            waitlist_id: Number(process.env.NEXT_PUBLIC_WAITLIST_ID),
            referral_link: document.URL,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Signup successful", data);
      setIsSuccess(true); // Set success state on successful signup
    } catch (error) {
      console.error("Signup failed", error);
      setError("Something went wrong, please try again."); // Set error state on failure
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <form
        className="md: bg-white md:border md:rounded-2xl flex flex-col md:flex-row gap-2 items-start md:items-center  md:shadow-md md:pr-1"
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          name="email"
          required
          placeholder="i-want-this-now@skyffel.com"
          className="px-4 py-2 rounded-tl-xl rounded-bl-xl min-w-[30ch]
          max-sm:w-full
          max-sm: bg-white max-sm:border max-sm:rounded-2xl max-sm:flex-row max-sm:shadow-md max-sm:pr-1
          "
        />

        <button
          type="submit"
          className="bg-black/10 text-black/80 px-4 py-2 rounded-xl leading-none hover:bg-black/20 transition flex gap-2 items-center
            max-sm:shadow-sm
          "
          disabled={isLoading}
        >
          Sign me up
          <AnimatePresence>
            {isLoading && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 16 }}
                exit={{ width: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="animate-spin"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" x2="12" y1="2" y2="6" />
                  <line x1="12" x2="12" y1="18" y2="22" />
                  <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                  <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                  <line x1="2" x2="6" y1="12" y2="12" />
                  <line x1="18" x2="22" y1="12" y2="12" />
                  <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                  <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </form>
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex gap-2 items-start md:items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              className="text-red-500"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
            {error}
          </motion.p>
        )}
        {isSuccess && (
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex gap-2 items-start md:items-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-green-500"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>
              {"You're in! If you have any questions or feedback, "}
              <a
                href="https://x.com/skyffelhq"
                className="underline inline"
                target="_blank"
              >
                shoot us a message on X
              </a>
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
}
