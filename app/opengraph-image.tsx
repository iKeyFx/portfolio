import { ImageResponse } from "next/og";
import { hero, site } from "@/lib/content";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F5F6F7",
          color: "#12161B",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* The ▲ mark as inline SVG — satori's default font has no ▲ glyph. */}
          <svg width="30" height="26" viewBox="0 0 30 26">
            <path d="M15 0 30 26H0Z" fill="#0B7A4F" />
          </svg>
          <div style={{ fontSize: 28, letterSpacing: "0.08em" }}>{site.handle}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              maxWidth: 900,
            }}
          >
            {hero.headline}
          </div>
          <div style={{ fontSize: 30, color: "#5C6672" }}>{site.title}</div>
        </div>
      </div>
    ),
    size,
  );
}
