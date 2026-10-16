'use client';

import { useEffect, useRef } from 'react';
import styles from './GradientBackdrop.module.scss';

interface GradientBackdropProps {
  /** Glow follows the pointer (hero only); inner pages use the still version */
  interactive?: boolean;
  className?: string;
}

/**
 * Soft drifting gradient in the logo colors (teal, olive, gold, ochre)
 * with paper grain on top. Blobs move with CSS only; the optional pointer
 * glow updates two custom properties per frame, eased, and only while moving.
 */
export default function GradientBackdrop({ interactive = false, className }: GradientBackdropProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const host = el?.parentElement;
    if (!el || !host || !interactive) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let frame = 0;
    const pos = { x: 0.7, y: 0.4, tx: 0.7, ty: 0.4 };

    const tick = () => {
      pos.x += (pos.tx - pos.x) * 0.08;
      pos.y += (pos.ty - pos.y) * 0.08;
      el.style.setProperty('--mx', `${(pos.x * 100).toFixed(2)}%`);
      el.style.setProperty('--my', `${(pos.y * 100).toFixed(2)}%`);
      frame = Math.abs(pos.tx - pos.x) + Math.abs(pos.ty - pos.y) > 0.001 ? requestAnimationFrame(tick) : 0;
    };

    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect();
      pos.tx = (e.clientX - r.left) / r.width;
      pos.ty = (e.clientY - r.top) / r.height;
      el.dataset.active = 'true';
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const onLeave = () => {
      el.dataset.active = 'false';
    };

    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [interactive]);

  return (
    <div ref={ref} className={`${styles.backdrop} ${className ?? ''}`} aria-hidden="true">
      <span className={`${styles.blob} ${styles.teal}`} />
      <span className={`${styles.blob} ${styles.gold}`} />
      <span className={`${styles.blob} ${styles.ochre}`} />
      <span className={`${styles.blob} ${styles.olive}`} />
      {interactive ? <span className={styles.glow} /> : null}
      <span className={styles.grain} />
    </div>
  );
}
