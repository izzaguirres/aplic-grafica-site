type Client = {
  name: string
  logo: string
}

const clients: Client[] = [
  { name: "Bill Sunset", logo: "/images/logos/SVG/Bill Sunset.svg" },
  { name: "Das Meninas", logo: "/images/logos/SVG/Das meninas.svg" },
  { name: "HANNA", logo: "/images/logos/SVG/HANNA.svg" },
  { name: "Ione", logo: "/images/logos/SVG/Ione.svg" },
  { name: "Magia", logo: "/images/logos/SVG/Magia.svg" },
  { name: "Tadeu", logo: "/images/logos/SVG/Tadeu .svg" },
  { name: "Terezas", logo: "/images/logos/SVG/Terezas.svg" },
  { name: "Tomats", logo: "/images/logos/SVG/Tomats.svg" },
  { name: "Top Turismo", logo: "/images/logos/SVG/Top Turismo.svg" },
  { name: "UZZE Modas", logo: "/images/logos/SVG/UZZE Modas.svg" },
]

export function TrustedClients() {
  const loop = [...clients, ...clients]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <p className="text-center text-[11px] font-medium text-[#28282D]/50 uppercase tracking-[0.22em] mb-6">
        Empresas que confiam em nós
      </p>
      <div className="ticker-mask overflow-hidden">
        <div className="ticker-track flex w-max items-center gap-12 md:gap-16">
          {loop.map((client, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={`${client.name}-${i}`}
              src={client.logo}
              alt={client.name}
              title={client.name}
              className="h-12 md:h-16 w-auto max-w-[180px] object-contain grayscale opacity-70 shrink-0"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
