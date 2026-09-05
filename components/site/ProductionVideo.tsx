"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import styles from "./production-video.module.css";

interface ProductionVideoProps {
  label: string;
}

export function ProductionVideo({ label }: ProductionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoId = useId();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!reducedMotion.matches) {
      void video.play().catch(() => setIsPlaying(!video.paused));
    }

    const handleReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) video.pause();
    };

    reducedMotion.addEventListener("change", handleReducedMotion);
    return () => {
      reducedMotion.removeEventListener("change", handleReducedMotion);
      video.pause();
    };
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play().catch(() => setIsPlaying(!video.paused));
    } else {
      video.pause();
    }
  };

  return (
    <>
      <video
        ref={videoRef}
        id={videoId}
        src="/images/siteaplic2.mp4"
        poster="/images/13.png"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        className={styles.control}
        aria-controls={videoId}
        onClick={togglePlayback}
      >
        {isPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        <span>{isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}</span>
      </button>
    </>
  );
}
