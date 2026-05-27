import React from "react";
import {
  AbsoluteFill,
  Sequence,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Img,
} from "remotion";

// ── Brand tokens ───────────────────────────────────────────────
const FONT = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";
const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;
const INK        = "#0f172a";
const WHITE      = "#ffffff";
const WA_GREEN   = "#25D366";
const WA_DARK    = "#075e54";
const BLUE       = "#1a56c4";
const LIGHT_BG   = "#f8fafc";

// ── Testimonial data ───────────────────────────────────────────
const TESTIMONIALS = [
  { img: staticFile("testimonio-1.jpeg"), name: "David" },
  { img: staticFile("testimonio-2.jpeg"), name: "Rosa Elena" },
  { img: staticFile("testimonio-3.jpeg"), name: "Esperanza M." },
  { img: staticFile("testimonio-4.jpeg"), name: "Patricia G." },
  { img: staticFile("testimonio-5.jpeg"), name: "Claudia" },
  { img: staticFile("testimonio-6.jpeg"), name: "Leticia" },
  { img: staticFile("testimonio-7.jpeg"), name: "Verónica" },
  { img: staticFile("testimonio-8.jpeg"), name: "Norma L." },
];

// ── Scene timing ───────────────────────────────────────────────
const INTRO_DUR  = 75;   // 2.5 s
const SCENE_DUR  = 95;   // 3.17 s per testimonial
const OVERLAP    = 15;   // crossfade overlap
const OUTRO_DUR  = 90;   // 3 s

function testimonialStart(i: number): number {
  return INTRO_DUR - OVERLAP + i * (SCENE_DUR - OVERLAP);
}
// testimonialStart(8) = 75 - 15 + 8 * 80 = 700
export const TESTIMONIALS_FRAMES = testimonialStart(TESTIMONIALS.length) + OUTRO_DUR;
// = 700 + 90 = 790

// ── Animation helpers ──────────────────────────────────────────
function spr(
  frame: number,
  delay: number,
  fps: number,
  damping = 20,
  stiffness = 80
): number {
  const f = frame - delay;
  if (f <= 0) return 0;
  return spring({ frame: f, fps, config: { damping, stiffness, mass: 1 } });
}

function fadeSlide(
  frame: number,
  delay: number,
  fps: number,
  opts: { damping?: number; stiffness?: number } = {}
) {
  const p = spr(frame, delay, fps, opts.damping ?? 20, opts.stiffness ?? 80);
  return { opacity: p, transform: `translateY(${(1 - p) * 24}px)` };
}

function sceneFade(localFrame: number, duration: number): number {
  return interpolate(
    localFrame,
    [0, 15, duration - 15, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
}

// ── WhatsApp check icon ────────────────────────────────────────
const CheckIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={WA_GREEN}>
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
);

// ── Dot indicators ─────────────────────────────────────────────
const Dots: React.FC<{ total: number; active: number }> = ({ total, active }) => (
  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
    {Array.from({ length: total }).map((_, i) => (
      <div
        key={i}
        style={{
          width: i === active ? 20 : 6,
          height: 6,
          borderRadius: 3,
          background: i === active ? WA_GREEN : "rgba(255,255,255,0.3)",
          transition: "width 0.3s",
        }}
      />
    ))}
  </div>
);

// ── Scene: Intro ───────────────────────────────────────────────
const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = sceneFade(frame, INTRO_DUR);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(150deg, ${WA_DARK} 0%, #0d9488 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
        opacity,
      }}
    >
      {/* Eyebrow */}
      <div
        style={{
          ...fadeSlide(frame, 0, fps),
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.6)",
          marginBottom: 24,
        }}
      >
        Conversaciones reales de WhatsApp
      </div>

      {/* Headline */}
      <div
        style={{
          ...fadeSlide(frame, 8, fps, { damping: 15, stiffness: 65 }),
          fontFamily: FONT,
          fontSize: 88,
          fontWeight: 800,
          color: WHITE,
          textAlign: "center",
          lineHeight: 1.0,
          letterSpacing: "-0.04em",
          marginBottom: 28,
        }}
      >
        Resultados<br />reales
      </div>

      {/* Stat */}
      <div
        style={{
          ...fadeSlide(frame, 20, fps),
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
          textAlign: "center",
          lineHeight: 1.55,
        }}
      >
        +500 clientes atendidos. Mira lo que dicen.
      </div>

      {/* Divider bar */}
      <div
        style={{
          ...fadeSlide(frame, 30, fps),
          marginTop: 36,
          width: 48,
          height: 4,
          background: "rgba(255,255,255,0.4)",
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};

// ── Scene: Individual testimonial ──────────────────────────────
const TestimonialScene: React.FC<{
  imgSrc: string;
  name: string;
  index: number;
}> = ({ imgSrc, name, index }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = sceneFade(frame, SCENE_DUR);

  // Card entrance
  const cardP  = spr(frame, 5, fps, 18, 75);
  const cardScale = interpolate(cardP, [0, 1], [0.93, 1]);
  const cardY     = interpolate(cardP, [0, 1], [32, 0]);

  // Name pill entrance
  const pillP = spr(frame, 18, fps, 22, 85);

  return (
    <AbsoluteFill style={{ background: LIGHT_BG, opacity }}>

      {/* ── Header strip ──────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 60,
          background: INK,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 44px",
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontFamily: FONT,
            fontSize: 14,
            fontWeight: 700,
            color: WHITE,
            letterSpacing: "-0.01em",
          }}
        >
          Los Préstamos con Luis
        </div>

        {/* Dots indicator */}
        <Dots total={TESTIMONIALS.length} active={index} />
      </div>

      {/* ── Screenshot card ───────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 60,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 60,
        }}
      >
        <div
          style={{
            opacity: cardP,
            transform: `scale(${cardScale}) translateY(${cardY}px)`,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow:
              "0 32px 72px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.10)",
            border: "3px solid rgba(37,211,102,0.25)",
            background: WHITE,
            display: "flex",
          }}
        >
          <Img
            src={imgSrc}
            style={{
              maxHeight: 540,
              maxWidth: 460,
              width: "auto",
              height: "auto",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ── Name pill ─────────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - pillP) * 14}px)`,
          opacity: pillP,
          fontFamily: FONT,
          fontSize: 14,
          fontWeight: 600,
          color: INK,
          background: WHITE,
          padding: "7px 18px",
          borderRadius: 99,
          boxShadow: "0 2px 14px rgba(0,0,0,0.12)",
          display: "flex",
          alignItems: "center",
          gap: 7,
          whiteSpace: "nowrap" as const,
        }}
      >
        <CheckIcon />
        <span>{name}</span>
        <span style={{ color: "rgba(15,23,42,0.4)", fontWeight: 400 }}>
          · vía WhatsApp
        </span>
      </div>

    </AbsoluteFill>
  );
};

// ── Scene: Outro ───────────────────────────────────────────────
const OutroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = sceneFade(frame, OUTRO_DUR);

  return (
    <AbsoluteFill
      style={{
        background: BLUE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 80px",
        opacity,
      }}
    >
      {/* Counter badge */}
      <div
        style={{
          ...fadeSlide(frame, 0, fps),
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.16em",
          textTransform: "uppercase" as const,
          color: "rgba(255,255,255,0.6)",
          marginBottom: 20,
        }}
      >
        +500 clientes atendidos
      </div>

      {/* Headline */}
      <div
        style={{
          ...fadeSlide(frame, 8, fps, { damping: 15, stiffness: 65 }),
          fontFamily: FONT,
          fontSize: 72,
          fontWeight: 800,
          color: WHITE,
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.035em",
          marginBottom: 20,
        }}
      >
        Revisa tu caso<br />hoy mismo
      </div>

      {/* Subline */}
      <div
        style={{
          ...fadeSlide(frame, 18, fps),
          fontFamily: FONT,
          fontSize: 20,
          fontWeight: 400,
          color: "rgba(255,255,255,0.72)",
          textAlign: "center",
          maxWidth: 460,
          lineHeight: 1.5,
          marginBottom: 44,
        }}
      >
        Sin anticipos, sin compromiso.
        <br />
        Trámite 100% en línea.
      </div>

      {/* CTA button */}
      <div
        style={{
          ...fadeSlide(frame, 28, fps, { stiffness: 65 }),
          fontFamily: FONT,
          fontSize: 19,
          fontWeight: 700,
          color: BLUE,
          background: WHITE,
          padding: "15px 44px",
          borderRadius: 8,
          letterSpacing: "-0.01em",
        }}
      >
        Comenzar por WhatsApp
      </div>
    </AbsoluteFill>
  );
};

// ── Main composition ───────────────────────────────────────────
export const Testimonials: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: LIGHT_BG }}>
      <style>{FONT_IMPORT}</style>

      {/* Intro */}
      <Sequence from={0} durationInFrames={INTRO_DUR}>
        <IntroScene />
      </Sequence>

      {/* Testimonials */}
      {TESTIMONIALS.map((t, i) => (
        <Sequence
          key={i}
          from={testimonialStart(i)}
          durationInFrames={SCENE_DUR}
        >
          <TestimonialScene imgSrc={t.img} name={t.name} index={i} />
        </Sequence>
      ))}

      {/* Outro */}
      <Sequence
        from={testimonialStart(TESTIMONIALS.length)}
        durationInFrames={OUTRO_DUR}
      >
        <OutroScene />
      </Sequence>
    </AbsoluteFill>
  );
};
