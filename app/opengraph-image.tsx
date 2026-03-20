import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Aplic Gráfica - Gráfica rápida em Florianópolis"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#28282D",
          color: "#ffffff",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 84% 18%, rgba(230,255,80,0.28), transparent 0 28%), radial-gradient(circle at 88% 84%, rgba(230,255,80,0.18), transparent 0 34%), linear-gradient(180deg, #2b2b31 0%, #18181b 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 54,
            left: 58,
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "rgba(255,255,255,0.72)",
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#E6FF50",
            }}
          />
          Aplic Gráfica
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "130px 58px 58px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 840,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 82,
                lineHeight: 0.94,
                fontWeight: 700,
                letterSpacing: "-0.06em",
              }}
            >
              Gráfica rápida em Florianópolis.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: 24,
                maxWidth: 780,
                color: "rgba(255,255,255,0.74)",
                fontSize: 31,
                lineHeight: 1.35,
              }}
            >
              Cartões de visita, panfletos, banners, adesivos e comunicação visual com atendimento ágil pelo WhatsApp.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
                color: "rgba(255,255,255,0.56)",
                fontSize: 20,
              }}
            >
              <span>Cartões</span>
              <span>Panfletos</span>
              <span>Banners</span>
              <span>Adesivos</span>
            </div>

            <div
              style={{
                display: "flex",
                padding: "14px 20px",
                borderRadius: 999,
                background: "#E6FF50",
                color: "#18181b",
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Atendimento rápido
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
