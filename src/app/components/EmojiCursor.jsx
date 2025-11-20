'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// Two-state cursor: moving 😀 → idle 😴 (stable, no flicker)
export default function EmojiCursor({
  idleMs = 500,   // how long to wait before showing 😴
  sizeRem = 2,
  jitterPx = 3,   // ignore micro-moves under this distance
  idleEmoji="😴",
  activeEmoji="😀",
}) {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // follower position + smoothing
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 22, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 250, damping: 22, mass: 0.6 });

  const [idle, setIdle] = useState(false);

  // state for jitter filtering and timeout
  const lastPos = useRef({ x: null, y: null });
  const idleTimer = useRef(null);

  useEffect(() => {
    setMounted(true);

    // enable only on precise pointers & without reduced motion
    const mqCoarse = window.matchMedia?.('(pointer: coarse)');
    const mqNoHover = window.matchMedia?.('(hover: none)');
    const mqReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)');

    const compute = () =>
      !(mqReduced?.matches) && !(mqCoarse?.matches && mqNoHover?.matches);

    setShouldRender(compute());
    const onChange = () => setShouldRender(compute());
    mqCoarse?.addEventListener?.('change', onChange);
    mqNoHover?.addEventListener?.('change', onChange);
    mqReduced?.addEventListener?.('change', onChange);
    return () => {
      mqCoarse?.removeEventListener?.('change', onChange);
      mqNoHover?.removeEventListener?.('change', onChange);
      mqReduced?.removeEventListener?.('change', onChange);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !shouldRender) return;

    const armIdle = () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => setIdle(true), idleMs);
    };

    const onPointerMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;

      // always move the follower visually
      x.set(e.clientX);
      y.set(e.clientY);

      // jitter guard for "state"
      const lx = lastPos.current.x, ly = lastPos.current.y;
      if (lx !== null && ly !== null) {
        const dx = e.clientX - lx, dy = e.clientY - ly;
        if (dx * dx + dy * dy < jitterPx * jitterPx) return; // ignore micro-moves
      }
      lastPos.current = { x: e.clientX, y: e.clientY };

      // significant move: we're active, cancel idle and re-arm
      if (idle) setIdle(false);
      armIdle();
    };

    window.addEventListener('pointermove', onPointerMove);
    // start the idle timer once user first moves
    armIdle();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [mounted, shouldRender, x, y, idleMs, jitterPx, idle]);

  if (!mounted || !shouldRender) return null;

  const emoji = idle ? idleEmoji : activeEmoji;
  const animate = idle ? { scale: [1.04, 1.12, 1.04] } : { scale: 1, rotate: 0 };
  const transition = idle
    ? { duration: 1.1, repeat: Infinity }
    : { type: 'spring', stiffness: 420, damping: 26 };

  return (
    <motion.div
      aria-hidden
      style={{
        position: 'fixed',
        top: 50,
        left: 50,
        x: sx,
        y: sy,
        translateX: '-50%',
        translateY: '-50%',
        pointerEvents: 'none',
        zIndex: 9999,
        fontSize: `${sizeRem}rem`,
      }}
      animate={animate}
      transition={transition}
    >
      {emoji}
    </motion.div>
  );
}
