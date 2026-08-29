"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type ReactNode,
} from "react";
import { ChevronRight } from "lucide-react";

type LinkButtonProps = {
  href: string;
  title: string;
  icon: ReactNode;
  index?: number;
  external?: boolean;
};

const TILE = "#3d8c8d";
const TILE_PRESSED = "#0f4344";

export default function LinkButton({
  href,
  title,
  icon,
  index = 0,
  external = true,
}: LinkButtonProps) {
  const [pressed, setPressed] = useState(false);
  const [pulse, setPulse] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const trigger = useCallback(() => {
    // Re-mount icon span to restart the wiggle animation on every click
    setPulse((p) => p + 1);
    setPressed(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setPressed(false), 620);
  }, []);

  const onKeyDown = (e: KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") trigger();
  };

  return (
    <a
      href={href}
      aria-label={title}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      onPointerDown={trigger}
      onKeyDown={onKeyDown}
      className="pill-shine rise group flex h-[7cqw] w-full items-center rounded-[2.4cqw] border-[0.31cqw] border-ink bg-cream p-[0.45cqw] text-left text-ink no-underline shadow-[0_0.5cqw_1.6cqw_rgba(0,0,0,0.22)] transition-[transform,box-shadow,background-color] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[0.2cqw] hover:shadow-[0_1.2cqw_2.8cqw_rgba(0,0,0,0.3)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
      style={
        {
          "--d": `${220 + index * 70}ms`,
          transform: pressed ? "scale(0.95)" : undefined,
          backgroundColor: pressed ? "#eee9e0" : undefined,
          transitionTimingFunction: pressed
            ? "cubic-bezier(0.34,1.56,0.64,1)"
            : undefined,
        } as CSSProperties
      }
    >
      {/* Icon tile — turns darker teal + wiggles when clicked */}
      <span
        className="flex h-full aspect-square shrink-0 items-center justify-center overflow-hidden rounded-[1.8cqw] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition-colors duration-200"
        style={{ backgroundColor: pressed ? TILE_PRESSED : TILE } as CSSProperties}
      >
        <span
          key={pulse}
          className="icon-wiggle flex h-[3cqw] w-[3cqw] items-center justify-center [&>svg]:h-full [&>svg]:w-full"
          style={{ ["--tile" as string]: pressed ? TILE_PRESSED : TILE } as CSSProperties}
        >
          {icon}
        </span>
      </span>

      {/* Title */}
      <span className="flex flex-1 items-center px-[2cqw]">
        <span className="font-display text-[2.55cqw] font-bold leading-none tracking-wide text-black">
          {title}
        </span>
      </span>

      {/* Arrow */}
      <span
        className="pr-[2cqw] text-ink/80 transition-transform duration-200 [&>svg]:h-[2cqw] [&>svg]:w-[2cqw]"
        style={{ transform: pressed ? "translateX(0.8cqw)" : undefined }}
      >
        <ChevronRight size={13} strokeWidth={3} />
      </span>
    </a>
  );
}
