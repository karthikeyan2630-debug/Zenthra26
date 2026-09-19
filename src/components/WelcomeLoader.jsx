import { useEffect, useState } from "react";

const LOGO = "/WhatsApp_Image_2025-09-12_at_18.22.28_4ebc8d65-removebg-preview.png";

const TELEMETRY_STAGES = [
  "INITIALIZING QUANTUM PROTOCOLS...",
  "CALIBRATING TECH ARENAS...",
  "SYNCHRONIZING PARTICIPANT MATRIX...",
  "COMPILING EVENT SCHEDULES...",
  "ZENTHRA '26 SYSTEM READY",
];

export default function WelcomeLoader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [stageIndex, setStageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Eased progress counter
    const startTime = performance.now();
    const duration = 2200; // 2.2 seconds total intro

    let animationFrameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / duration);
      
      // Smooth cubic ease out
      const ease = 1 - Math.pow(1 - t, 3);
      const currentVal = Math.floor(ease * 100);

      setProgress(currentVal);

      // Cycle telemetry text based on progress
      if (currentVal < 25) setStageIndex(0);
      else if (currentVal < 50) setStageIndex(1);
      else if (currentVal < 75) setStageIndex(2);
      else if (currentVal < 98) setStageIndex(3);
      else setStageIndex(4);

      if (t < 1) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        // Completed
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 450);
        }, 180);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    // Keyboard shortcut (Escape to skip)
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsExiting(true);
        setTimeout(() => {
          if (onFinish) onFinish();
        }, 300);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onFinish]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onFinish) onFinish();
    }, 300);
  };

  return (
    <div className={`welcome-loader-overlay ${isExiting ? "loader-exit" : ""}`} role="status" aria-label="Loading ZENTHRA '26">
      {/* Background Cyber Grid */}
      <div className="loader-grid-bg" />
      <div className="loader-ambient-glow" />

      {/* Skip Button */}
      <button className="loader-skip-btn" onClick={handleSkip} aria-label="Skip introduction">
        Skip Intro <span className="skip-key">ESC</span>
      </button>

      {/* Main Center Tech Hologram */}
      <div className="loader-center-content">
        {/* Concentric Rotating Cyber HUD Rings */}
        <div className="loader-hud-rings">
          <svg viewBox="0 0 200 200" className="hud-ring hud-ring-outer">
            <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(34, 211, 238, 0.25)" strokeWidth="1.5" strokeDasharray="14 10 30 15" />
            <circle cx="100" cy="100" r="92" fill="none" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="2" strokeDasharray="40 180" />
          </svg>

          <svg viewBox="0 0 200 200" className="hud-ring hud-ring-middle">
            <circle cx="100" cy="100" r="76" fill="none" stroke="rgba(34, 211, 238, 0.35)" strokeWidth="1.5" strokeDasharray="8 6 12 18" />
            <circle cx="100" cy="100" r="76" fill="none" stroke="#22d3ee" strokeWidth="2.5" strokeDasharray="25 140" />
          </svg>

          <svg viewBox="0 0 200 200" className="hud-ring hud-ring-inner">
            <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(148, 163, 184, 0.15)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Central Logo with Neon Halo */}
          <div className="loader-logo-core">
            <img src={LOGO} alt="Dhanalakshmi Srinivasan Engineering College" className="loader-core-img" />
            <div className="core-scanner-beam" />
          </div>
        </div>

        {/* Branding & Typography */}
        <div className="loader-brand-copy">
          <div className="loader-badge">
            <span className="badge-pulse-dot" />
            <span>NATIONAL LEVEL SYMPOSIUM • 2026</span>
          </div>
          <h1 className="loader-title">
            <span>ZENTHRA</span> <em>'26</em>
          </h1>
          <p className="loader-subtitle">Department of Information Technology</p>
        </div>

        {/* Futuristic Digital Progress Module */}
        <div className="loader-progress-module">
          <div className="progress-meta-row">
            <span className="telemetry-text">
              <span className="telemetry-bracket">[</span>
              {TELEMETRY_STAGES[stageIndex]}
              <span className="telemetry-bracket">]</span>
            </span>
            <span className="progress-percent-val">{String(progress).padStart(2, "0")}%</span>
          </div>

          <div className="loader-progress-track">
            <div className="loader-progress-bar" style={{ width: `${progress}%` }}>
              <div className="progress-spark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
