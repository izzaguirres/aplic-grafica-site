import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const runtime = "edge"
export const alt = "Aplic Gráfica - Cartões, panfletos, banners e adesivos em Florianópolis"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const siteHost = new URL(siteConfig.url).host

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#f5f5f7",
          color: "#18181b",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 90% 18%, rgba(230,255,80,0.9), transparent 0 24%), radial-gradient(circle at 12% 88%, rgba(40,40,45,0.12), transparent 0 30%), linear-gradient(135deg, #f8f8fa 0%, #eef0f2 100%)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 22,
              color: "rgba(24,24,27,0.55)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#18181b",
              }}
            />
            Aplic Gráfica
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 860,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 78,
                lineHeight: 0.95,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              Impressão rápida com atendimento direto.
            </div>

            <div
              style={{
                display: "flex",
                maxWidth: 780,
                color: "rgba(24,24,27,0.62)",
                fontSize: 32,
                lineHeight: 1.35,
              }}
            >
              Cartões, panfletos, banners, adesivos e comunicação visual para Florianópolis e região.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 12,
                color: "rgba(24,24,27,0.48)",
                fontSize: 20,
              }}
            >
              <span>WhatsApp First</span>
              <span>Entrega ágil</span>
              <span>Florianópolis</span>
            </div>

            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(24,24,27,0.92)",
                color: "#E6FF50",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              {siteHost}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
