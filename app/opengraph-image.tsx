import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#faf6ee",
          backgroundImage:
            "radial-gradient(circle at 15% 80%, rgba(157, 39, 63, 0.18) 0%, transparent 40%), radial-gradient(circle at 85% 20%, rgba(241, 150, 30, 0.22) 0%, transparent 45%)",
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              background: "#9d273f",
              color: "#faf6ee",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "serif",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "serif", fontSize: 28, fontWeight: 700, color: "#1a1410" }}>
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 16,
                color: "#8a7f72",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Established 1995 · 501(c)(3)
            </div>
          </div>
        </div>
        <div
          style={{
            fontFamily: "serif",
            fontSize: 72,
            fontWeight: 500,
            color: "#1a1410",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            maxWidth: 940,
          }}
        >
          Funding the moments that{" "}
          <span style={{ color: "#9d273f", fontStyle: "italic" }}>change</span>{" "}
          Dedham students&apos; lives.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            fontSize: 22,
            color: "#4a423a",
          }}
        >
          <div>30 years of Dedham-funded classroom moments.</div>
          <div
            style={{
              background: "#9d273f",
              color: "#faf6ee",
              padding: "10px 20px",
              borderRadius: 100,
              fontWeight: 600,
            }}
          >
            dedhameducationfoundation.org
          </div>
        </div>
      </div>
    ),
    size,
  );
}
