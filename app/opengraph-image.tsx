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
            "radial-gradient(circle at 12% 80%, rgba(157, 39, 63, 0.22) 0%, transparent 42%), radial-gradient(circle at 88% 18%, rgba(241, 150, 30, 0.28) 0%, transparent 45%), radial-gradient(circle at 70% 90%, rgba(11, 75, 186, 0.12) 0%, transparent 40%)",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Trademark shape motifs in the background */}
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 64,
            display: "flex",
            gap: 14,
            opacity: 0.85,
          }}
        >
          <div
            style={{
              width: 26,
              height: 26,
              background: "#9d273f",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 26,
              height: 26,
              background: "#0b4bba",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "13px solid transparent",
              borderRight: "13px solid transparent",
              borderBottom: "22px solid #118d70",
              marginTop: 4,
            }}
          />
          <div
            style={{
              width: 26,
              height: 30,
              background: "#f1961e",
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: "#9d273f",
              color: "#faf6ee",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "serif",
              fontSize: 36,
              fontWeight: 700,
              boxShadow: "0 0 0 4px #f1961e",
            }}
          >
            D
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "serif",
                fontSize: 30,
                fontWeight: 700,
                color: "#1a1410",
                letterSpacing: "-0.01em",
              }}
            >
              {siteConfig.name}
            </div>
            <div
              style={{
                fontSize: 15,
                color: "#8a7f72",
                letterSpacing: 2.4,
                textTransform: "uppercase",
                fontWeight: 600,
                marginTop: 4,
              }}
            >
              Established 1995 · 501(c)(3) · Dedham, MA
            </div>
          </div>
        </div>

        <div
          style={{
            fontFamily: "serif",
            fontSize: 78,
            fontWeight: 500,
            color: "#1a1410",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            maxWidth: 980,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Funding the moments that</div>
          <div>
            <span style={{ color: "#9d273f", fontStyle: "italic" }}>enrich</span>
            {" "}learning.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            width: "100%",
            gap: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 40,
              fontFamily: "serif",
              alignItems: "baseline",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 600,
                  color: "#9d273f",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                $500K+
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#4a423a",
                  marginTop: 6,
                  fontFamily: "sans-serif",
                  fontWeight: 500,
                }}
              >
                granted since 1995
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 600,
                  color: "#118d70",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                3,200
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#4a423a",
                  marginTop: 6,
                  fontFamily: "sans-serif",
                  fontWeight: 500,
                }}
              >
                students reached / year
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 600,
                  color: "#0b4bba",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                K–12
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#4a423a",
                  marginTop: 6,
                  fontFamily: "sans-serif",
                  fontWeight: 500,
                }}
              >
                across 6 Dedham schools
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#9d273f",
              color: "#faf6ee",
              padding: "12px 22px",
              borderRadius: 100,
              fontWeight: 600,
              fontSize: 18,
              alignSelf: "center",
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
