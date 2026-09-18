import { useCallback, useEffect, useRef, useState } from "react";

// Seconds of overlap while one clip dissolves into the next.
const FADE = 1.4;

// Plays the given clips back to back, cross-dissolving between them with a
// slow push-in, forever. Pauses while off-screen or in a background tab and
// falls back to the poster frame for visitors who prefer reduced motion.
const HeroVideo = ({ clips, onProgress, controlRef }) => {
  const videoRefs = useRef([]);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrapRef = useRef(null);
  const switching = useRef(false);
  // Start un-zoomed so the first clip also gets the slow push-in.
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setStarted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  // Only spend CPU / battery on the video while the hero is on screen.
  useEffect(() => {
    const el = wrapRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goTo = useCallback(
    (next) => {
      const nextVideo = videoRefs.current[next];
      if (!nextVideo || next === active) return;
      switching.current = true;
      nextVideo.currentTime = 0;
      nextVideo.play().catch(() => {});
      setActive(next);
      // Let the previous clip keep playing under the dissolve, then park it.
      const prev = videoRefs.current[active];
      setTimeout(() => {
        prev?.pause();
        switching.current = false;
      }, FADE * 1000 + 100);
    },
    [active]
  );

  if (controlRef) controlRef.current = { goTo };

  // Drive playback of the active clip and trigger the next dissolve.
  useEffect(() => {
    if (reducedMotion) return;
    const video = videoRefs.current[active];
    if (!video) return;

    if (visible && !document.hidden) video.play().catch(() => {});
    else video.pause();

    let raf;
    const tick = () => {
      const d = video.duration;
      if (d && isFinite(d)) {
        onProgress?.(active, Math.min(video.currentTime / d, 1));
        if (
          clips.length > 1 &&
          !switching.current &&
          d - video.currentTime <= FADE
        ) {
          goTo((active + 1) % clips.length);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVisibility = () =>
      document.hidden ? video.pause() : visible && video.play().catch(() => {});
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [active, visible, reducedMotion, clips.length, goTo, onProgress]);

  // Warm up the next clip so the dissolve never waits on the network.
  useEffect(() => {
    const next = videoRefs.current[(active + 1) % clips.length];
    if (next && next.preload !== "auto") {
      next.preload = "auto";
      next.load();
    }
  }, [active, clips.length]);

  return (
    <div ref={wrapRef} className="absolute inset-0 -z-10 overflow-hidden bg-ink">
      {clips.map((clip, i) => {
        const isActive = i === active;
        return reducedMotion ? (
          i === 0 ? (
            <img
              key={clip.src}
              src={clip.poster}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : null
        ) : (
          <video
            key={clip.src}
            ref={(el) => (videoRefs.current[i] = el)}
            muted
            playsInline
            autoPlay={i === 0}
            preload={i === 0 ? "auto" : "metadata"}
            poster={clip.poster}
            aria-hidden="true"
            tabIndex={-1}
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            style={{
              opacity: isActive ? 1 : 0,
              transform: `scale(${isActive && started ? 1.08 : 1})`,
              // Active: fade in + slow push-in across the clip.
              // Outgoing: fade out, then reset zoom once invisible.
              transition: isActive
                ? `opacity ${FADE}s ease-in-out, transform ${
                    (clip.duration || 10) + FADE
                  }s linear`
                : `opacity ${FADE}s ease-in-out, transform 0s linear ${FADE}s`,
            }}
          >
            <source src={clip.mobileSrc} type="video/mp4" media="(max-width: 767px)" />
            <source src={clip.src} type="video/mp4" />
          </video>
        );
      })}
    </div>
  );
};

export default HeroVideo;
