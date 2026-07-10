import { cn } from "@/lib/utils";

/**
 * we2 brand mark — vector rebuild of the studio logo.
 * Twin italic strokes + triple-bar motif forming the W, with a bold 2.
 * Uses currentColor, so it inherits text color (charcoal on light, warm white on dark).
 */
export function LogoMark({ className, title = "we2" }: { className?: string; title?: string }) {
  return (
    <svg
      viewBox="0 0 1100 420"
      role="img"
      aria-label={title}
      className={cn("block", className)}
      fill="none"
    >
      {/* W — twin strokes */}
      <g stroke="currentColor" strokeWidth="58" strokeLinecap="round">
        <path d="M150 38 L400 400" />
        <path d="M395 24 L560 272 L752 32" />
        {/* triple-bar motif inside the V */}
        <g strokeWidth="46">
          <path d="M492 96 L652 96" />
          <path d="M536 166 L626 166" />
          <path d="M578 232 L608 232" />
        </g>
      </g>
      {/* 2 — bold geometric numeral */}
      <text
        x="800"
        y="400"
        fill="currentColor"
        stroke="none"
        fontFamily="var(--font-body), Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="500"
      >
        2
      </text>
    </svg>
  );
}

export function LogoLockup({ className, tagline = true }: { className?: string; tagline?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col items-start gap-3", className)}>
      <LogoMark className="h-full w-auto" />
      {tagline && (
        <span className="font-sans text-[0.62rem] uppercase tracking-label opacity-70">
          Architect&ensp;|&ensp;Interior&ensp;|&ensp;Civil
        </span>
      )}
    </span>
  );
}
