export interface PriceTableItem {
  quantidade: number
  valor: number
}

export interface Product {
  id: string
  name: string
  description: string
  image: string
  priceTable: PriceTableItem[]
  category?: string
  isFeatured?: boolean
}

export const productsData: Product[] = [
  {
    id: "panfleto-a5-frente",
    name: "Panfleto A5 15x21cm (Frente)",
    description: "Papel Couchê Brilho 90g, Impressão Frente. Ideal para divulgação rápida.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 435.00 },
      { quantidade: 2500, valor: 585.00 },
      { quantidade: 5000, valor: 825.00 },
      { quantidade: 10000, valor: 1395.00 }
    ]
  },
  {
    id: "panfleto-a5-frente-verso",
    name: "Panfleto A5 15x21cm (F/V)",
    description: "Papel Couchê Brilho 90g, Impressão Frente e Verso. Mais espaço para sua mensagem.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 460.00 },
      { quantidade: 2500, valor: 695.00 },
      { quantidade: 5000, valor: 995.00 },
      { quantidade: 10000, valor: 1795.00 }
    ]
  },
  {
    id: "panfleto-a6-frente",
    name: "Panfleto A6 10x14cm (Frente)",
    description: "Papel Couchê Brilho 90g, Impressão Frente. Compacto e econômico.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 345.00 },
      { quantidade: 2500, valor: 450.00 },
      { quantidade: 5000, valor: 620.00 },
      { quantidade: 10000, valor: 890.00 }
    ]
  },
  {
    id: "panfleto-a6-frente-verso",
    name: "Panfleto A6 10x14cm (F/V)",
    description: "Papel Couchê Brilho 90g, Frente e Verso. O formato clássico de divulgação.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    isFeatured: true,
    priceTable: [
      { quantidade: 1000, valor: 385.00 },
      { quantidade: 2500, valor: 495.00 },
      { quantidade: 5000, valor: 710.00 },
      { quantidade: 10000, valor: 1290.00 }
    ]
  },
  {
    id: "filipeta-10x20",
    name: "Filipeta 10x20cm",
    description: "Papel Couchê 300g, Frente e Verso. Mais rígido, ideal para cardápios e convites.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 475.00 },
      { quantidade: 2500, valor: 695.00 },
      { quantidade: 5000, valor: 870.00 },
      { quantidade: 10000, valor: 1195.00 }
    ]
  },
  {
    id: "folder-2-dobras",
    name: "Folder 2 Dobras A4",
    description: "Papel Couchê 90g, Frente e Verso. 28x20cm aberto. Perfeito para apresentações completas.",
    image: "/images/produtos/Panfleto 10x14.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 1000, valor: 940.00 },
      { quantidade: 2500, valor: 1445.00 },
      { quantidade: 5000, valor: 1990.00 }
    ]
  },
  {
    id: "cavalete-madeira",
    name: "Cavalete de Madeira",
    description: "50x100cm. PVC Adesivado 2 Lados. Estrutura robusta em madeira.",
    image: "/images/produtos/Cavalete de Madeira.png",
    category: "Sinalização",
    priceTable: [
      { quantidade: 1, valor: 490.00 }
    ]
  },
  {
    id: "cavalete-ferro",
    name: "Cavalete de Ferro",
    description: "50x100cm. PVC Adesivado 2 Lados. Estrutura metálica de alta durabilidade.",
    image: "/images/produtos/Cavalete de Ferro.png",
    category: "Sinalização",
    priceTable: [
      { quantidade: 1, valor: 635.00 }
    ]
  },
  {
    id: "cracha-empresarial",
    name: "Crachá Empresarial",
    description: "9x5cm. Couchê 300g, Colorido. Identificação profissional para sua equipe.",
    image: "/images/produtos/Cracha Empresarial.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 5, valor: 235.00 },
      { quantidade: 10, valor: 325.00 },
      { quantidade: 25, valor: 660.00 },
      { quantidade: 50, valor: 970.00 },
      { quantidade: 100, valor: 1435.00 }
    ]
  },
  {
    id: "nao-perturbe",
    name: "Aviso de Porta (Não Perturbe)",
    description: "5x18cm com gancho. Couchê 300g, Laminação Brilho. Ideal para hotéis e pousadas.",
    image: "/images/produtos/Nao Perturbe.png",
    category: "Hotelaria",
    priceTable: [
      { quantidade: 100, valor: 475.00 },
      { quantidade: 250, valor: 545.00 },
      { quantidade: 500, valor: 795.00 },
      { quantidade: 1000, valor: 985.00 }
    ]
  },
  {
    id: "banner-50x70",
    name: "Banner em Lona 50x70cm",
    description: "Impressão Digital. Acabamento em Madeira e Corda. Tamanho ideal para avisos.",
    image: "/images/produtos/Banner em Lona.png",
    category: "Sinalização",
    priceTable: [
      { quantidade: 1, valor: 120.00 }
    ]
  },
  {
    id: "banner-100x100",
    name: "Banner em Lona 100x100cm",
    description: "Impressão Digital. Acabamento em Madeira e Corda. Grande visibilidade.",
    image: "/images/produtos/Banner em Lona.png",
    category: "Sinalização",
    priceTable: [
      { quantidade: 1, valor: 210.00 }
    ]
  },
  {
    id: "tag-furo-9x5",
    name: "Tag com Furo 9x5cm",
    description: "Papel Couchê 300g. Valorize seus produtos com tags personalizadas.",
    image: "/images/produtos/Tag com Furo.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 250, valor: 255.00 },
      { quantidade: 500, valor: 295.00 },
      { quantidade: 1000, valor: 335.00 }
    ]
  },
  {
    id: "cartao-mini-brilho",
    name: "Mini Cartão de Visita",
    description: "4x5cm. Couchê 250g, Laminação Brilho. Pequeno e moderno.",
    image: "/images/produtos/Mini Cartao de Visita.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 500, valor: 245.00 },
      { quantidade: 1000, valor: 285.00 }
    ]
  },
  {
    id: "cartao-brilho-frente",
    name: "Cartão de Visita Brilho Total",
    description: "9x5cm. Couchê 300g. O clássico campeão de vendas.",
    image: "/images/produtos/Cartao de Visita - Brilho Total.png",
    category: "Empresa",
    isFeatured: true,
    priceTable: [
      { quantidade: 100, valor: 185.00 },
      { quantidade: 500, valor: 245.00 },
      { quantidade: 1000, valor: 275.00 }
    ]
  },
  {
    id: "marca-pagina",
    name: "Marca Página 5x18cm",
    description: "Papel Couchê 300g, Frente e Verso. Excelente brinde corporativo.",
    image: "/images/produtos/Impressao Digital.png",
    category: "Promocional",
    priceTable: [
      { quantidade: 50, valor: 255.00 },
      { quantidade: 100, valor: 325.00 },
      { quantidade: 500, valor: 475.00 },
      { quantidade: 1000, valor: 595.00 }
    ]
  },
  {
    id: "etiqueta-adesiva",
    name: "Etiquetas Adesivas",
    description: "Até 5x5cm. Vinil à Prova de Água. Corte especial incluso.",
    image: "/images/produtos/Etiqueta Adesiva.png",
    category: "Adesivos",
    isFeatured: true,
    priceTable: [
      { quantidade: 100, valor: 255.00 },
      { quantidade: 250, valor: 325.00 },
      { quantidade: 500, valor: 535.00 },
      { quantidade: 1000, valor: 745.00 }
    ]
  },
  {
    id: "pasta-bolso",
    name: "Pasta com Bolso",
    description: "A4. Supremo 300g. Apresentação impecável para seus documentos.",
    image: "/images/produtos/Pasta com Bolso.png",
    category: "Empresa",
    priceTable: [
      { quantidade: 5, valor: 365.00 },
      { quantidade: 25, valor: 545.00 },
      { quantidade: 50, valor: 870.00 }
    ]
  },
  {
    id: "cartao-fosco-localizado",
    name: "Cartão Fosco + Verniz Local",
    description: "9x5cm. Couchê 300g. Sofisticação com toque aveludado e brilho nos detalhes.",
    image: "/images/produtos/Cartao de Visita - Fosco.png",
    category: "Empresa",
    isFeatured: true,
    priceTable: [
      { quantidade: 500, valor: 345.00 },
      { quantidade: 1000, valor: 385.00 }
    ]
  }
]
