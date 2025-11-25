import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aplic Gráfica Rápida",
    short_name: "Aplic Gráfica",
    description: "Sua gráfica rápida em Florianópolis. Cartões, banners e impressos com entrega expressa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#E6FF50",
    icons: [
      {
        src: "/images/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}