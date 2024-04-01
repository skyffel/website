"use client";

import { usePostHog } from "posthog-js/react";

export function Link({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const posthog = usePostHog();
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => posthog.capture("Link Clicked", { url: props.href })}
    >
      {children}
    </a>
  );
}
