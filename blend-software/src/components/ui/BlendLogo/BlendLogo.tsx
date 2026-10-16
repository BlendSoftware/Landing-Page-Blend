interface BlendLogoProps {
  /** Height in px. Width scales automatically to preserve aspect ratio. */
  size?: number;
  className?: string;
}

export default function BlendLogo({ size = 40, className }: BlendLogoProps) {
  // viewBox is 72 × 68 — slight landscape ratio
  const width = Math.round((size * 72) / 68);

  return (
    // Decorative: every usage sits next to the visible brand name or an aria-label.
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/logo-blend-mark.svg" alt="" width={width} height={size} className={className} />
  );
}
