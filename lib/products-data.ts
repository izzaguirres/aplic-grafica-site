export interface PriceTableItem {
  quantidade: number
  valor: number
  label?: string
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
  priceTable: PriceTableItem[]
  category?: string
  isFeatured?: boolean
  badge?: string
  featuredOrder?: number
  /** Mostra o badge pequeno "Até 3 dias" no card quando true. */
  expressDelivery?: boolean
  /** Texto personalizado exibido no label do select. Default: "Quantidade". */
  selectorLabel?: string
  /** Unidade exibida após o número ("un.", "cm", "", etc). Default: "un." */
  itemUnit?: string
  /** Slug da landing page do produto (`/cartao-de-visita`, `/panfleto`, etc). */
  landingPage?: string
}

export const productsData: Product[] = [
  // ============ MAIS VENDIDOS — topo do catálogo ============
  {
    id: "banner-lona",
    name: "Banner em Lona",
    description: "Impressão digital em lona fosca, acabamento em madeira e corda. Vários tamanhos — do aviso ao inaugural.",
    image: "/images/produtos/Banner em Lona.png",
    category: "Sinalização",
    expressDelivery: true,
    selectorLabel: "Tamanho",
    itemUnit: "",
    priceTable: [
      { quantidade: 5050, valor: 90.00, label: "50x50cm" },
      { quantidade: 5070, valor: 120.00, label: "50x70cm" },
      { quantidade: 6090, valor: 145.00, label: "60x90cm" },
      { quantidade: 70100, valor: 210.00, label: "70x100cm" },
      { quantidade: 90120, valor: 230.00, label: "90x120cm" },
      { quantidade: 100150, valor: 240.00, label: "100x150cm" },
      { quantidade: 100180, valor: 270.00, label: "100x180cm" },
      { quantidade: 100200, valor: 290.00, label: "100x200cm" },
      { quantidade: 150200, valor: 335.00, label: "150x200cm" },
      { quantidade: 200200, valor: 410.00, label: "200x200cm" },
    ],
  },
  {
    id: "nao-perturbe",
    name: "Aviso de Porta (Não Perturbe)",
    description: "5x18cm com gancho. Couchê 300g com laminação brilho. Pra pousada, hotel e quarto de hóspede.",
    image: "/images/produtos/Nao Perturbe.png",
    category: "Hotelaria",
    expressDelivery: true,
    priceTable: [
      { quantidade: 100, valor: 475.00 },
      { quantidade: 250, valor: 545.00 },
      { quantidade: 500, valor: 795.00 },
      { quantidade: 1000, valor: 985.00 },
    ],
  },
  {
    id: "panfleto-a5",
    name: "Panfleto A5 15x21cm",
    description: "15x21cm · Couchê brilho 90g · Frente e verso.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 460.00 },
      { quantidade: 2500, valor: 695.00 },
      { quantidade: 5000, valor: 995.00 },
      { quantidade: 10000, valor: 1795.00 },
    ],
  },
  {
    id: "folder-2-dobras",
    name: "Folder 2 Dobras A4",
    description: "A4 aberto 28x20cm · Couchê 90g · Frente e verso, duas dobras. Pra apresentação institucional e cardápio.",
    image: "/images/produtos/Impressao Digital.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 940.00 },
      { quantidade: 2500, valor: 1445.00 },
      { quantidade: 5000, valor: 1990.00 },
    ],
  },
  {
    id: "cracha-empresarial",
    name: "Crachá Empresarial",
    description: "9x5cm · PVC couchê 300g colorido · Cordão preto incluso.",
    image: "/images/produtos/Cracha Empresarial.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 5, valor: 235.00 },
      { quantidade: 10, valor: 325.00 },
      { quantidade: 25, valor: 660.00 },
      { quantidade: 50, valor: 970.00 },
      { quantidade: 100, valor: 1435.00 },
    ],
  },

  // ============ FEATURED na home (com Decoy) ============
  {
    id: "cartao-fosco-localizado",
    name: "Cartão Fosco + Verniz Localizado",
    description: "9x5cm · Couchê 300g · Fundo fosco com verniz brilho localizado nas informações.",
    image: "/images/produtos/Cartao de Visita - Fosco.png",
    category: "Empresa",
    isFeatured: true,
    badge: "PREMIUM",
    featuredOrder: 1,
    priceTable: [
      { quantidade: 500, valor: 345.00 },
      { quantidade: 1000, valor: 385.00 },
    ],
  },
  {
    id: "cartao-brilho-frente",
    name: "Cartão de Visita Brilho Total",
    description: "9x5cm · Couchê 300g · Laminação verniz brilho total.",
    image: "/images/produtos/Cartao de Visita - Brilho Total.png",
    category: "Empresa",
    isFeatured: true,
    badge: "MAIS VENDIDO",
    featuredOrder: 2,
    expressDelivery: true,
    priceTable: [
      { quantidade: 100, valor: 185.00 },
      { quantidade: 500, valor: 245.00 },
      { quantidade: 1000, valor: 275.00 },
    ],
  },
  {
    id: "panfleto-a6",
    name: "Panfleto A6 10x14cm",
    description: "10x14cm · Couchê 90g · Frente e verso.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    isFeatured: true,
    badge: "MELHOR CUSTO",
    featuredOrder: 3,
    expressDelivery: true,
    priceTable: [
      { quantidade: 1000, valor: 385.00 },
      { quantidade: 2500, valor: 495.00 },
      { quantidade: 5000, valor: 710.00 },
      { quantidade: 10000, valor: 1290.00 },
    ],
  },
  {
    id: "etiqueta-adesiva",
    name: "Etiquetas Adesivas",
    description: "Vinil à prova d'água com corte personalizado. Pra rótulo de bolo, açaí, batida caipira e produto artesanal.",
    image: "/images/produtos/Etiqueta Adesiva.png",
    category: "Adesivos",
    isFeatured: true,
    badge: "IDEAL PRA RÓTULO",
    featuredOrder: 4,
    expressDelivery: true,
    priceTable: [
      { quantidade: 100, valor: 255.00 },
      { quantidade: 250, valor: 325.00 },
      { quantidade: 500, valor: 535.00 },
      { quantidade: 1000, valor: 745.00 },
    ],
  },

  // ============ Catálogo — meio ============
  {
    id: "pasta-bolso",
    name: "Pasta com Bolso",
    description: "A4 · Papel supremo 300g · Colorido na capa e contracapa. Pra contrato, proposta e apresentação corporativa.",
    image: "/images/produtos/Pasta com Bolso.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 5, valor: 365.00 },
      { quantidade: 25, valor: 545.00 },
      { quantidade: 50, valor: 870.00 },
    ],
  },
  {
    id: "tag-furo-9x5",
    name: "Tag com Furo 9x5cm",
    description: "Couchê 300g · Com furo pra cordão. Pra boutique, produto artesanal e embalagem.",
    image: "/images/produtos/Tag com Furo.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 250, valor: 255.00 },
      { quantidade: 500, valor: 295.00 },
      { quantidade: 1000, valor: 335.00 },
    ],
  },
  {
    id: "filipeta-10x20",
    name: "Filipeta 10x20cm",
    description: "10x20cm · Couchê 300g · Frente e verso, mais rígido. Pra cardápio e convite.",
    image: "/images/produtos/Impressao Digital.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 475.00 },
      { quantidade: 2500, valor: 695.00 },
      { quantidade: 5000, valor: 870.00 },
      { quantidade: 10000, valor: 1195.00 },
    ],
  },

  // ============ Catálogo — fim ============
  {
    id: "cavalete-madeira",
    name: "Cavalete de Madeira",
    description: "50x100cm · PVC adesivado nos 2 lados · Estrutura em madeira.",
    image: "/images/produtos/Cavalete de Madeira.png",
    category: "Sinalização",
    priceTable: [{ quantidade: 1, valor: 490.00 }],
  },
  {
    id: "cavalete-ferro",
    name: "Cavalete de Ferro",
    description: "50x100cm · PVC adesivado nos 2 lados · Estrutura em ferro de alta durabilidade.",
    image: "/images/produtos/Cavalete de Ferro.png",
    category: "Sinalização",
    priceTable: [{ quantidade: 1, valor: 635.00 }],
  },
  {
    id: "cartao-mini-brilho",
    name: "Mini Cartão de Visita",
    description: "4x5cm · Couchê 250g · Laminação brilho. Formato menor, mais estiloso.",
    image: "/images/produtos/Mini Cartao de Visita.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 500, valor: 245.00 },
      { quantidade: 1000, valor: 285.00 },
    ],
  },
  {
    id: "marca-pagina",
    name: "Marca Página 5x18cm",
    description: "5x18cm · Couchê 300g · Frente e verso.",
    image: "/images/produtos/Impressao Digital.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 50, valor: 255.00 },
      { quantidade: 100, valor: 325.00 },
      { quantidade: 500, valor: 475.00 },
      { quantidade: 1000, valor: 595.00 },
    ],
  },
]
