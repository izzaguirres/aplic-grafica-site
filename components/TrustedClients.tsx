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
  return (
    <section className="py-10 md:py-14 bg-white border-y border-[#CDD2D7]/50">
      <div className="container">
        <p className="text-center text-xs font-bold text-[#28282D]/60 uppercase tracking-[0.2em] mb-8 md:mb-10">
          Empresas que imprimem com a Aplic
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14 lg:gap-x-16">
          {clients.map((client) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              title={client.name}
              className="h-10 md:h-12 w-auto max-w-[140px] object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-[filter,opacity] duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
