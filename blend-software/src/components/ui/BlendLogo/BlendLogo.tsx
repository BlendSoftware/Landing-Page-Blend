interface BlendLogoProps {
  /** Height in px. Width scales automatically to preserve aspect ratio. */
  size?: number;
  className?: string;
}

export default function BlendLogo({ size = 40, className }: BlendLogoProps) {
  // viewBox is 72 × 68 — slight landscape ratio
  const width = Math.round(size * 72 / 68);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-blend-mark.svg"
      alt=""
      width={width}
      height={size}
      className={className}
    />
  );
}
