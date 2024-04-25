export const USE_CASES = [
  {
    question: "What’s the escalation policy during on-call?",
    items: [
      {
        type: "doc",
        name: "Incident Report: INC-2",
      },
    ],
    title: "On-call with ease",
    description:
      "Navigating unfamiliar systems and docs while on-call is tough. With skyffel, just ask and get answers. We also help draft post-mortems when incidents are resolved.",
  },
  {
    question: "What did we get done this week?",
    items: [
      {
        type: "doc",
        name: `Release 12.3 (${new Date().getDate()}/${new Date().getMonth()})`,
      },
      {
        type: "doc",
        name: `Monthly Update: ${new Intl.DateTimeFormat("en-US", {
          month: "long",
        }).format(new Date())}`,
      },
    ],
    title: "Weekly updates, delivered to you",
    description:
      "With skyffel, easily generate and share reports across your organization. Set up automatic posts to Slack for even easier distribution.",
  },
  {
    question: "What bugs did we fix this week?",
    items: [
      {
        type: "dashboard",
        name: "Bug dashboard",
      },
    ],
    title: "Keep CX in the loop",
    description:
      "Keep CX & CS in the loop on fixes, bugs, and what's going on in engineering.",
  },
  {
    question: "What is our release process?",
    items: [
      {
        type: "doc",
        name: "Release Cycle",
      },
      {
        type: "doc",
        name: "Deployment Process",
      },
    ],
    title: "Smooth onboarding",
    description:
      "Get your new colleagues up to speed even faster by letting them access all your information through one interface.",
  },
] as const;
