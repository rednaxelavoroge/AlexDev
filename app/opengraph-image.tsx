import { ImageResponse } from "next/og";

export const alt = "AlexDev Studio — We design. We build. We scale.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#030712",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(99,102,241,0.25), transparent 45%), radial-gradient(circle at 85% 80%, rgba(168,85,247,0.22), transparent 45%)",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "rgba(99,102,241,0.15)",
              border: "1px solid rgba(99,102,241,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#a5b4fc",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            A
          </div>
          <div style={{ display: "flex", gap: 10, color: "white", fontSize: 32, fontWeight: 700 }}>
            <span>AlexDev</span>
            <span style={{ color: "#818cf8" }}>Studio</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ color: "white", fontSize: 80, fontWeight: 800, lineHeight: 1.05 }}>
            We design. We build.
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 800,
              lineHeight: 1.05,
              background: "linear-gradient(90deg,#818cf8,#c084fc,#2dd4bf)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            We scale.
          </div>
        </div>

        <div style={{ color: "#9ca3af", fontSize: 30, display: "flex", gap: 16 }}>
          <span>AI · SaaS · Web3</span>
          <span style={{ color: "#374151" }}>·</span>
          <span>Founder-led software studio</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
