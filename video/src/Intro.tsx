import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// ── Brand tokens (matches the website) ────────────────────────
const BLUE = "#1a56c4";
const BLUE_BG = "#eef2fb";
const INK = "#111827";
const MUTED = "#6b7280";
const WHITE = "#ffffff";
const PAPER = "#f9fafb";
const WA_GREEN = "#25D366";
const FONT = "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif";

// Google Fonts import injected once at the composition root
const FONT_IMPORT = `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
`;

// ── Pure animation helpers ─────────────────────────────────────
function computeSpring(
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

function slideUp(
  frame: number,
  delay: number,
  fps: number,
  opts: { damping?: number; stiffness?: number } = {}
) {
  const p = computeSpring(frame, delay, fps, opts.damping ?? 20, opts.stiffness ?? 80);
  return {
    opacity: p,
    transform: `translateY(${(1 - p) * 28}px)`,
  };
}

function sceneFade(localFrame: number, duration: number): number {
  return interpolate(
    localFrame,
    [0, 15, duration - 15, duration],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );
}

// ── Scene 1 · Brand intro (comp 0–160) ────────────────────────
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const DUR = 160;
  const opacity = sceneFade(frame, DUR);

  return (
    <AbsoluteFill
      style={{
        background: WHITE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        opacity,
      }}
    >
      <div
        style={{
          ...slideUp(frame, 5, fps, { damping: 18 }),
          fontFamily: FONT,
          fontSize: 80,
          fontWeight: 800,
          color: INK,
          textAlign: "center",
          lineHeight: 1.05,
          letterSpacing: "-0.035em",
          marginBottom: 24,
        }}
      >
        Préstamos<br />con Luis
      </div>

      <div
        style={{
          ...slideUp(frame, 18, fps),
          fontFamily: FONT,
          fontSize: 26,
          fontWeight: 400,
          color: MUTED,
          textAlign: "center",
          maxWidth: 560,
          lineHeight: 1.5,
        }}
      >
        Asesoría de crédito para empleados
        <br />del gobierno federal en México
      </div>

      <div
        style={{
          ...slideUp(frame, 32, fps),
          marginTop: 40,
          width: 64,
          height: 4,
          background: BLUE,
          borderRadius: 2,
        }}
      />
    </AbsoluteFill>
  );
};

// ── Scene 2 · Audience (comp 140–300) ─────────────────────────
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const DUR = 160;
  const opacity = sceneFade(frame, DUR);

  const institutions = ["SEP", "IMSS", "ISSSTE"];

  return (
    <AbsoluteFill
      style={{
        background: PAPER,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        opacity,
      }}
    >
      <div
        style={{
          ...slideUp(frame, 0, fps),
          fontFamily: FONT,
          fontSize: 13,
          fontWeight: 700,
          color: BLUE,
          textTransform: "uppercase" as const,
          letterSpacing: "0.16em",
          marginBottom: 20,
        }}
      >
        Dirigido a
      </div>

      <div
        style={{
          ...slideUp(frame, 10, fps, { damping: 18 }),
          fontFamily: FONT,
          fontSize: 58,
          fontWeight: 800,
          color: INK,
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.03em",
          marginBottom: 52,
        }}
      >
        Empleados del gobierno<br />federal
      </div>

      <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
        {institutions.map((inst, i) => (
          <div
            key={inst}
            style={{
              ...slideUp(frame, 22 + i * 10, fps, { stiffness: 90 }),
              fontFamily: FONT,
              fontSize: 22,
              fontWeight: 700,
              color: BLUE,
              background: BLUE_BG,
              padding: "10px 32px",
              borderRadius: 6,
            }}
          >
            {inst}
          </div>
        ))}
      </div>

      <div
        style={{
          ...slideUp(frame, 55, fps),
          fontFamily: FONT,
          fontSize: 18,
          fontWeight: 400,
          color: MUTED,
          textAlign: "center",
        }}
      >
        Personal activo · Jubilados · Pensionados
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 3 · Benefits (comp 280–450) ─────────────────────────
const BENEFITS = [
  "Trámite 100% en línea",
  "Sin anticipos ni honorarios",
  "Contrato revisado antes de firmar",
  "Acompañamiento hasta el depósito",
];

const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const DUR = 170;
  const opacity = sceneFade(frame, DUR);

  return (
    <AbsoluteFill
      style={{
        background: WHITE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "64px 80px",
        opacity,
      }}
    >
      <div
        style={{
          ...slideUp(frame, 0, fps, { damping: 18 }),
          fontFamily: FONT,
          fontSize: 44,
          fontWeight: 800,
          color: INK,
          textAlign: "center",
          letterSpacing: "-0.025em",
          marginBottom: 48,
        }}
      >
        ¿Por qué Préstamos con Luis?
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 20,
          width: "100%",
          maxWidth: 920,
        }}
      >
        {BENEFITS.map((text, i) => (
          <div
            key={i}
            style={{
              ...slideUp(frame, 18 + i * 10, fps, { stiffness: 90, damping: 22 }),
              background: PAPER,
              borderLeft: `4px solid ${BLUE}`,
              padding: "22px 28px",
              borderRadius: "0 8px 8px 0",
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span
              style={{
                color: BLUE,
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            <span
              style={{
                fontFamily: FONT,
                fontSize: 19,
                fontWeight: 600,
                color: INK,
                lineHeight: 1.35,
              }}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 4 · Statement (comp 430–530) ────────────────────────
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const DUR = 100;
  const opacity = sceneFade(frame, DUR);

  return (
    <AbsoluteFill
      style={{
        background: BLUE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        opacity,
      }}
    >
      <div
        style={{
          ...slideUp(frame, 0, fps, { damping: 16, stiffness: 70 }),
          fontFamily: FONT,
          fontSize: 68,
          fontWeight: 800,
          color: WHITE,
          textAlign: "center",
          lineHeight: 1.1,
          letterSpacing: "-0.035em",
        }}
      >
        Ningún trámite<br />tiene costo.
      </div>
      <div
        style={{
          ...slideUp(frame, 18, fps),
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 400,
          color: "rgba(255,255,255,0.72)",
          marginTop: 28,
          textAlign: "center",
          maxWidth: 520,
          lineHeight: 1.5,
        }}
      >
        Nunca debes dar anticipos para obtener un financiamiento.
      </div>
    </AbsoluteFill>
  );
};

// ── Scene 5 · CTA (comp 510–600) ──────────────────────────────
const WhatsAppIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const DUR = 90;
  const opacity = sceneFade(frame, DUR);

  return (
    <AbsoluteFill
      style={{
        background: WHITE,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        opacity,
      }}
    >
      <div
        style={{
          ...slideUp(frame, 0, fps, { damping: 18 }),
          fontFamily: FONT,
          fontSize: 52,
          fontWeight: 800,
          color: INK,
          textAlign: "center",
          letterSpacing: "-0.025em",
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        Revisa tu caso<br />sin compromiso
      </div>
      <div
        style={{
          ...slideUp(frame, 14, fps),
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 400,
          color: MUTED,
          textAlign: "center",
          marginBottom: 44,
        }}
      >
        Escríbele a Luis directamente por WhatsApp
      </div>
      <div
        style={{
          ...slideUp(frame, 26, fps, { stiffness: 70, damping: 20 }),
          background: WA_GREEN,
          color: WHITE,
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 700,
          padding: "16px 48px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 12,
          letterSpacing: "-0.01em",
        }}
      >
        <WhatsAppIcon />
        <span>Comenzar por WhatsApp</span>
      </div>
    </AbsoluteFill>
  );
};

// ── Main Composition ───────────────────────────────────────────
export const Intro: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: WHITE }}>
      <style>{FONT_IMPORT}</style>

      {/* Scene 1 · Brand:     comp 0   – 160 */}
      <Sequence from={0} durationInFrames={160}>
        <Scene1 />
      </Sequence>

      {/* Scene 2 · Audience:  comp 140 – 300  (20f crossfade) */}
      <Sequence from={140} durationInFrames={160}>
        <Scene2 />
      </Sequence>

      {/* Scene 3 · Benefits:  comp 280 – 450  (20f crossfade) */}
      <Sequence from={280} durationInFrames={170}>
        <Scene3 />
      </Sequence>

      {/* Scene 4 · Statement: comp 430 – 530  (20f crossfade) */}
      <Sequence from={430} durationInFrames={100}>
        <Scene4 />
      </Sequence>

      {/* Scene 5 · CTA:       comp 510 – 600  (20f crossfade) */}
      <Sequence from={510} durationInFrames={90}>
        <Scene5 />
      </Sequence>
    </AbsoluteFill>
  );
};
