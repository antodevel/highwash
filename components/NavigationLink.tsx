"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

export function NavigationLink({
  onClick,
  ...props
}: ComponentProps<typeof Link>) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          (props.target && props.target !== "_self") ||
          props.href !== "/" ||
          window.location.pathname !== "/"
        )
          return;

        event.preventDefault();
        window.history.replaceState(
          window.history.state,
          "",
          window.location.pathname + window.location.search,
        );
        window.scrollTo({ top: 0, behavior: "auto" });
      }}
    />
  );
}
