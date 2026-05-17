import { ImageResponse } from "next/og";
import { SEO } from "@/constants/seo";

export const dynamic = "force-static";

export const alt = SEO.siteName;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "96px",
          background: "linear-gradient(180deg, #0f141b 0%, #2c3441 100%)",
          color: "#f4f6f8",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "#dfb462",
              color: "#0f141b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: 1.1,
            }}
          >
            <div style={{ fontSize: "32px", fontWeight: 600 }}>Nirbhay</div>
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "6px",
                color: "#a8b3c2",
                marginTop: "4px",
              }}
            >
              ELEVATORS
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "20px",
              letterSpacing: "6px",
              color: "#dfb462",
              fontWeight: 500,
            }}
          >
            NIRBHAY ELEVATORS · INDIA
          </div>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "900px",
            }}
          >
            Vertical mobility, engineered for India.
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#a8b3c2",
              fontFamily: "sans-serif",
              maxWidth: "880px",
            }}
          >
            Passenger · Capsule · Hospital · Cargo · Home lifts — installed across 60+ Indian cities.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
