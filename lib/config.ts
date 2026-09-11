export interface InstallmentOption {
  times: string;
  value: string;
}

export interface PackageItem {
  id: string;
  name: string;
  duration?: string;
  features: string[];
  price: string;
  paymentMethod: string;
  paymentCondition?: string;
  isFeatured?: boolean;
  badge?: string;
  whatsAppText: string;
  installments: InstallmentOption[];
}

export const brandConfig = {
  name: "Modkovski Fotografia",
  subName: "Fotografia · Vídeo · Histórias reais",
  color: "#4E0000",
  instagram: {
    handle: "@modkovskifotografia",
    url: "https://www.instagram.com/modkovskifotografia/",
  },
  whatsApp: {
    number: "5569999718820",
    url: "https://wa.me/5569999718820",
  },
  client: {
    name: "Letícia Faustino",
    event: "Cerimônia de Casamento",
    date: "23 de janeiro de 2027",
    time: "20h",
    dateFormatted: "23 de janeiro de 2027 · 20h",
  },
  hero: {
    tagline: "Portfólio",
    title: "O seu momento. Para sempre.",
    quote: "Alguns momentos passam em poucos segundos. O registro certo faz com que eles permaneçam eternos.",
    ctaText: "Ver Proposta Comercial",
    image: "/images/capa.jpg",
    // Premium wedding editorial photography fallback
    imageFallback: "https://picsum.photos/seed/modkovski-hero/1920/1280",
  },
  about: {
    title: "Modkovski Fotografia",
    eyebrow: "Quem vai registrar esse momento?",
    paragraphs: [
      "Sou Alessandra Modkovski, fotógrafa, videomaker e produtora de conteúdo, atuando há mais de dois anos.",
      "Meu trabalho une um olhar atento aos detalhes, sensibilidade e direção cuidadosa para transformar momentos reais em registros que tenham significado.",
      "Mais do que simplesmente fotografar ou filmar, busco registrar a essência de cada história com naturalidade, profissionalismo e olhar artístico.",
      "Para que, ao rever essas imagens, você não apenas lembre do que aconteceu, mas sinta novamente como aquele momento foi vivido."
    ],
    image: "/images/fotografa.jpg",
    imageFallback: "https://picsum.photos/seed/modkovski-about/1200/1500",
  },
  portfolio: {
    eyebrow: "Um pouco do meu trabalho",
    title: "Histórias reais.",
    items: [
      { 
        id: "p1", 
        type: "image", 
        src: "/images/portfolio-01.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p1/1200/1500", 
        caption: "Fotografia", 
        description: "Registros naturais e atentos aos detalhes." 
      },
      { 
        id: "v1", 
        type: "video", 
        src: "/videos/video-01.mp4", 
        fallbackVideo: "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-holding-hands-42289-large.mp4", 
        fallbackPoster: "https://picsum.photos/seed/modkovski-v1-poster/1920/1080", 
        caption: "Em movimento", 
        description: "Vídeos para reviver cada instante." 
      },
      { 
        id: "p2", 
        type: "image", 
        src: "/images/portfolio-02.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p2/1200/1500", 
        caption: "Detalhes", 
        description: "Porque são eles que tornam cada história única." 
      },
      { 
        id: "p3", 
        type: "image", 
        src: "/images/portfolio-03.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p3/1200/1500", 
        caption: "Cumplicidade", 
        description: "A conexão capturada de forma pura." 
      },
      { 
        id: "p4", 
        type: "image", 
        src: "/images/portfolio-04.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p4/1200/1500", 
        caption: "Emoção", 
        description: "Sorrisos e lágrimas que contam a história." 
      },
      { 
        id: "v2", 
        type: "video", 
        src: "/videos/video-02.mp4", 
        fallbackVideo: "https://assets.mixkit.co/videos/preview/mixkit-putting-on-the-wedding-ring-40019-large.mp4", 
        fallbackPoster: "https://picsum.photos/seed/modkovski-v2-poster/1920/1080", 
        caption: "Essência", 
        description: "O ritmo e a atmosfera em formato de filme." 
      },
      { 
        id: "p5", 
        type: "image", 
        src: "/images/portfolio-05.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p5/1200/1500", 
        caption: "A Cerimônia", 
        description: "O ápice do compromisso e da promessa." 
      },
      { 
        id: "p6", 
        type: "image", 
        src: "/images/portfolio-06.jpg", 
        fallbackSrc: "https://picsum.photos/seed/modkovski-p6/1200/1500", 
        caption: "Para Sempre", 
        description: "O início de um novo capítulo registrado para sempre." 
      },
    ]
  },
  process: {
    eyebrow: "Depois da escolha",
    title: "Como funciona o processo?",
    steps: [
      { number: "01", title: "Escolha e Reserva", description: "Você escolhe a experiência e reserva a data mediante sinal de 30% do valor contratado, e o restante no dia do ensaio ou gravação, ou integral parcelado no cartão de crédito." },
      { number: "02", title: "Contrato", description: "A contratação é formalizada através de contrato e emissão de nota fiscal." },
      { number: "03", title: "Alinhamento", description: "Vamos marcar uma reunião para alinhar as expectativas, referências e passar algumas orientações." },
      { number: "04", title: "Captação", description: "Um dia antes da captação vamos reforçar algumas orientações, e vamos estar presentes no local e hora combinada." },
      { number: "05", title: "Seleção", description: "Após o pagamento do restante do valor e um pré-tratamento das fotos, vamos encaminhar um link para seleção na nossa plataforma. É possível adquirir fotos extras." },
      { number: "06", title: "Entrega", description: "Após o processo de seleção, tratamento e edição, todos os materiais são entregues de acordo com o prazo de cada pacote." },
    ]
  },
  testimonial: {
    eyebrow: "Experiências reais",
    title: "Quem já viveu essa experiência.",
    items: [
      {
        id: 1,
        occasion: "1 ANO DE CASADOS",
        quote: "“Eu queria muito eternizar esse momento e compartilhar a nossa alegria, sou muito grata. A gente começou com vergonha e depois fomos nos soltando, foi muito divertido. A equipe nos conduziu de forma leve e divertida.”",
        client: "ANDRESSA E DEIVISON",
      },
      {
        id: 2,
        occasion: "ENSAIO FOTOGRÁFICO E VÍDEOS",
        quote: "“Meninas, passando para agradecer por toda a experiência de hoje! Vocês foram maravilhosas do início ao fim. Amei a sessão de fotos, me deixaram super à vontade, foram muito acolhedoras, tiveram toda a paciência e ainda foram dando ideias e direcionamentos durante o ensaio, o que fez toda a diferença. Me senti muito tranquila e confiante. Dá para perceber o carinho e o profissionalismo de vocês em cada detalhe. Foi uma experiência leve e especial, e eu só tenho elogios. Com certeza vou indicar o trabalho de vocês para todo mundo que eu puder! Muito obrigada por tornarem esse momento tão incrível.”",
        client: "ANA LETÍCIA | ADVOGADA",
      },
      {
        id: 3,
        occasion: "ANIVERSÁRIO 1 ANO DA HELOÍSA",
        quote: "“A gente recebeu o serviço de fotografia e de filmagem, gostamos muito, elas foram bem atenciosas com todos os nossos convidados. A gente teve algumas intercorrências aqui na festa, elas aguardaram e fizeram um serviço maravilhoso. A gente ficou encantado, agradecemos muito.”",
        client: "POLIANE E JULIAN",
      },
      {
        id: 4,
        occasion: "FOTOGRAFIA E PRODUÇÃO DE VÍDEO MENSAL",
        quote: "“Nós tivemos muita dificuldade com equipes de mídia por questão de criatividade, compromisso e prazo, essa é uma dor de várias empresas. Elas fornecem o serviço pra gente um pouco mais de 1 ano, sempre entregam no prazo, com criatividade, ideias, roteiro pronto, tudo organizado com planejamento. Temos reuniões mensais e eu não me preocupo com nada. A gente vê que elas fazem o serviço com amor e com excelência.”",
        client: "LAURA DA MAMTUR VIAGENS",
      },
      {
        id: 5,
        occasion: "FOTOGRAFIA E PRODUÇÃO DE VÍDEO",
        quote: "“Contratar o trabalho delas foi fundamental no contexto profissional, as pessoas começaram a alcançar temas importantes a respeito da saúde mental, não só clientes, mas pessoas que assistem e passam a colocar em prática o que é falado. Esse serviço foi fundamental na minha profissão.”",
        client: "SÉRGIO | PSICÓLOGO",
      }
    ],
    // Mantido para compatibilidade
    occasion: "1 ano de casados",
    quote: "“Eu queria muito eternizar esse momento e compartilhar a nossa alegria, sou muito grata. A gente começou com vergonha e depois fomos nos soltando, foi muito divertido. A equipe nos conduziu de forma leve e divertida.”",
    client: "Andressa e Deivison",
  },
  finalCta: {
    title: "Vamos registrar esse momento?",
    description: "O seu momento vai acontecer uma única vez. Mas as lembranças podem permanecer por toda a vida.",
    buttonText: "QUERO RESERVAR MINHA DATA",
    whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e quero conversar sobre a cobertura da cerimônia."
  },
  packageSections: [
    {
      id: "sec-1",
      eyebrow: "A proposta",
      title: "Ensaio fotográfico",
      description: "Preparamos quatro possibilidades de ensaio para que você escolha o formato que mais combina com aquilo que deseja guardar. Desde um ensaio mais objetivo até uma experiência completa.",
      packages: [
        {
          id: "pkg-01",
          name: "Ensaio Essencial",
          duration: "Duração de até 01 hora",
          features: [
            "10 fotos selecionadas",
            "01 vídeo brinde Making Of",
            "Prazo de entrega de até 10 dias",
            "Foto extra R$ 25,00 (desconto a partir de 13 extras)"
          ],
          price: "R$ 250",
          paymentMethod: "Pix",
          paymentCondition: "Reserva via sinal de 30%",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do Ensaio Essencial. Gostaria de conversar sobre o ensaio fotográfico.",
          installments: [
            { times: "1x", value: "R$ 260,96" },
            { times: "2x", value: "R$ 133,11 (R$ 266,22)" },
            { times: "3x", value: "R$ 89,62 (R$ 268,85)" },
            { times: "4x", value: "R$ 67,87 (R$ 271,48)" },
            { times: "5x", value: "R$ 54,83 (R$ 274,13)" },
            { times: "6x", value: "R$ 46,13 (R$ 276,77)" },
            { times: "7x", value: "R$ 40,86 (R$ 286,01)" },
            { times: "8x", value: "R$ 36,09 (R$ 288,75)" },
            { times: "9x", value: "R$ 32,39 (R$ 291,55)" },
            { times: "10x", value: "R$ 29,43 (R$ 294,33)" },
            { times: "11x", value: "R$ 27,01 (R$ 297,16)" },
            { times: "12x", value: "R$ 25,00 (R$ 299,98)" },
          ]
        },
        {
          id: "pkg-02",
          name: "Ensaio Clássico",
          duration: "Duração de até 01 hora",
          features: [
            "15 fotos selecionadas",
            "01 vídeo brinde Making Of",
            "Prazo de entrega de até 15 dias",
            "Foto extra R$ 23,00 (desconto a partir de 13 extras)"
          ],
          price: "R$ 350",
          paymentMethod: "Pix",
          paymentCondition: "Reserva via sinal de 30%",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do Ensaio Clássico. Gostaria de conversar sobre o ensaio fotográfico.",
          installments: [
            { times: "1x", value: "R$ 365,34" },
            { times: "2x", value: "R$ 186,35 (R$ 372,70)" },
            { times: "3x", value: "R$ 125,47 (R$ 376,42)" },
            { times: "4x", value: "R$ 95,01 (R$ 380,05)" },
            { times: "5x", value: "R$ 76,76 (R$ 383,82)" },
            { times: "6x", value: "R$ 64,59 (R$ 387,55)" },
            { times: "7x", value: "R$ 57,21 (R$ 400,47)" },
            { times: "8x", value: "R$ 50,53 (R$ 404,24)" },
            { times: "9x", value: "R$ 45,35 (R$ 408,18)" },
            { times: "10x", value: "R$ 41,20 (R$ 412,04)" },
            { times: "11x", value: "R$ 37,82 (R$ 416,04)" },
            { times: "12x", value: "R$ 35,00 (R$ 420,00)" },
          ]
        },
        {
          id: "pkg-03",
          name: "Ensaio Especial",
          duration: "Duração de até 02 horas",
          features: [
            "20 fotos selecionadas",
            "01 vídeo brinde Making Of",
            "Prazo de entrega de até 15 dias",
            "Foto extra R$ 22,00 (desconto a partir de 13 extras)"
          ],
          price: "R$ 450",
          paymentMethod: "Pix",
          paymentCondition: "Reserva via sinal de 30%",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do Ensaio Especial. Gostaria de conversar sobre o ensaio fotográfico.",
          installments: [
            { times: "1x", value: "R$ 469,73" },
            { times: "2x", value: "R$ 239,59 (R$ 479,19)" },
            { times: "3x", value: "R$ 161,31 (R$ 483,93)" },
            { times: "4x", value: "R$ 122,17 (R$ 488,66)" },
            { times: "5x", value: "R$ 98,69 (R$ 493,43)" },
            { times: "6x", value: "R$ 83,03 (R$ 498,18)" },
            { times: "7x", value: "R$ 73,55 (R$ 514,82)" },
            { times: "8x", value: "R$ 64,97 (R$ 519,75)" },
            { times: "9x", value: "R$ 58,31 (R$ 524,79)" },
            { times: "10x", value: "R$ 52,98 (R$ 529,79)" },
            { times: "11x", value: "R$ 48,63 (R$ 534,89)" },
            { times: "12x", value: "R$ 45,00 (R$ 539,96)" },
          ]
        },
        {
          id: "pkg-04",
          name: "Ensaio Completo",
          duration: "Duração de até 02 horas",
          isFeatured: true,
          badge: "EXPERIÊNCIA COMPLETA",
          features: [
            "30 fotos selecionadas",
            "01 vídeo brinde Making Of",
            "Prazo de entrega de até 20 dias",
            "Foto extra R$ 19,00 (desconto a partir de 13 extras)"
          ],
          price: "R$ 550",
          paymentMethod: "Pix",
          paymentCondition: "Reserva via sinal de 30%",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do Ensaio Completo. Gostaria de conversar sobre o ensaio fotográfico.",
          installments: [
            { times: "1x", value: "R$ 574,12" },
            { times: "2x", value: "R$ 292,83 (R$ 585,67)" },
            { times: "3x", value: "R$ 197,16 (R$ 591,47)" },
            { times: "4x", value: "R$ 149,31 (R$ 597,25)" },
            { times: "5x", value: "R$ 120,61 (R$ 603,07)" },
            { times: "6x", value: "R$ 101,48 (R$ 608,88)" },
            { times: "7x", value: "R$ 89,89 (R$ 629,22)" },
            { times: "8x", value: "R$ 79,41 (R$ 635,25)" },
            { times: "9x", value: "R$ 71,27 (R$ 641,40)" },
            { times: "10x", value: "R$ 64,75 (R$ 647,52)" },
            { times: "11x", value: "R$ 59,43 (R$ 653,75)" },
            { times: "12x", value: "R$ 55,00 (R$ 659,95)" },
          ]
        }
      ]
    },
    {
      id: "sec-2",
      eyebrow: "A proposta",
      title: "Produção de vídeo",
      description: "Preparamos quatro formatos de produção de vídeo para atender à sua estratégia, do modelo prático ao nível autoridade. Caso sua estratégia necessite de uma quantidade específica de vídeos, nos informe para ajustarmos.",
      packages: [
        {
          id: "pkg-dup-01",
          name: "Prático",
          features: [
            "04 vídeos até 1:30seg",
            "02 vídeos até 20seg",
            "06 capas para vídeos",
            "02 cards/carrossel",
            "Acompanhamento, roteirização, direção e posicionamento",
            "Edição dinâmica, cortes essenciais, legenda e trilha sonora",
            "Entrega mensal, postagem 2x na semana"
          ],
          price: "R$ 600",
          paymentMethod: "Pix",
          paymentCondition: "Pagamento integral para utilizar",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do pacote Prático de vídeo. Gostaria de conversar.",
          installments: [
            { times: "1x", value: "R$ 626,31" },
            { times: "2x", value: "R$ 319,46 (R$ 638,92)" },
            { times: "3x", value: "R$ 215,08 (R$ 645,24)" },
            { times: "4x", value: "R$ 162,88 (R$ 651,51)" },
            { times: "5x", value: "R$ 131,58 (R$ 657,91)" },
            { times: "6x", value: "R$ 110,71 (R$ 664,28)" },
            { times: "7x", value: "R$ 98,07 (R$ 686,47)" },
            { times: "8x", value: "R$ 86,61 (R$ 692,92)" },
            { times: "9x", value: "R$ 77,74 (R$ 699,69)" },
            { times: "10x", value: "R$ 70,63 (R$ 706,34)" },
            { times: "11x", value: "R$ 64,83 (R$ 713,18)" },
            { times: "12x", value: "R$ 60,00 (R$ 720,00)" },
          ]
        },
        {
          id: "pkg-dup-02",
          name: "Essencial",
          features: [
            "04 vídeos até 1:30seg",
            "02 vídeos até 20seg",
            "06 capas para vídeos",
            "02 cards/carrossel",
            "Gerenciamento de postagens e área de Destaques do Instagram, análise dos melhores dias e horários de postagens",
            "Acompanhamento, roteirização, direção e posicionamento",
            "Edição dinâmica, cortes essenciais, legenda e trilha sonora",
            "Entrega mensal, postagem 2x na semana",
            "*Bônus: 05 capas para Destaques do Instagram.\nCard ou vídeo curto extra em caso de faltar."
          ],
          price: "R$ 700",
          paymentMethod: "Pix",
          paymentCondition: "Pagamento integral para utilizar",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do pacote Essencial de vídeo. Gostaria de conversar.",
          installments: [
            { times: "1x", value: "R$ 730,70" },
            { times: "2x", value: "R$ 372,70 (R$ 745,41)" },
            { times: "3x", value: "R$ 250,93 (R$ 752,78)" },
            { times: "4x", value: "R$ 190,03 (R$ 760,10)" },
            { times: "5x", value: "R$ 153,51 (R$ 767,56)" },
            { times: "6x", value: "R$ 129,17 (R$ 775,00)" },
            { times: "7x", value: "R$ 114,41 (R$ 800,88)" },
            { times: "8x", value: "R$ 101,05 (R$ 808,40)" },
            { times: "9x", value: "R$ 90,70 (R$ 816,30)" },
            { times: "10x", value: "R$ 82,41 (R$ 824,06)" },
            { times: "11x", value: "R$ 75,64 (R$ 832,04)" },
            { times: "12x", value: "R$ 70,00 (R$ 840,00)" },
          ]
        },
        {
          id: "pkg-dup-03",
          name: "Presença",
          features: [
            "08 vídeos até 1:30seg (Feed)",
            "02 vídeos até 20seg (Feed)",
            "10 capas pra vídeo (Feed)",
            "02 cards/carrossel (Feed)",
            "08 cards ou vídeos até 20seg (Story)",
            "Gerenciamento de postagens e área de Destaques do Instagram, análise dos melhores dias e horários de postagens",
            "Acompanhamento, roteirização, direção e posicionamento",
            "Edição dinâmica, cortes essenciais, legenda e trilha sonora",
            "Entrega mensal, postagem 3x na semana feed e 2x na semana story",
            "*Bônus: 05 capas para Destaques do Instagram.\nCard ou vídeo curto extra em caso de faltar."
          ],
          price: "R$ 1.150",
          paymentMethod: "Pix",
          paymentCondition: "Pagamento integral para utilizar",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do pacote Presença de vídeo. Gostaria de conversar.",
          installments: [
            { times: "1x", value: "R$ 1.200,43" },
            { times: "2x", value: "R$ 612,30 (R$ 1.224,60)" },
            { times: "3x", value: "R$ 412,24 (R$ 1.236,71)" },
            { times: "4x", value: "R$ 312,18 (R$ 1.248,73)" },
            { times: "5x", value: "R$ 252,20 (R$ 1.261,00)" },
            { times: "6x", value: "R$ 212,20 (R$ 1.273,20)" },
            { times: "7x", value: "R$ 187,96 (R$ 1.315,73)" },
            { times: "8x", value: "R$ 166,01 (R$ 1.328,10)" },
            { times: "9x", value: "R$ 149,01 (R$ 1.341,07)" },
            { times: "10x", value: "R$ 135,38 (R$ 1.353,82)" },
            { times: "11x", value: "R$ 124,27 (R$ 1.366,93)" },
            { times: "12x", value: "R$ 115,00 (R$ 1.380,00)" },
          ]
        },
        {
          id: "pkg-dup-04",
          name: "Autoridade",
          isFeatured: true,
          badge: "EXPERIÊNCIA COMPLETA",
          features: [
            "12 vídeos até 1:30seg (Feed)",
            "02 vídeos até 20seg (Feed)",
            "14 capas pra vídeo (Feed)",
            "02 cards/carrossel (Feed)",
            "12 cards ou vídeos até 20seg (Story)",
            "Gerenciamento de postagens e área de Destaques do Instagram, análise dos melhores dias e horários de postagens",
            "Acompanhamento, roteirização, direção e posicionamento",
            "Edição dinâmica, cortes essenciais, legenda e trilha sonora",
            "Entrega mensal, postagem 4x na semana feed e 3x na semana story",
            "*Bônus: 05 capas para Destaques do Instagram.\nCard ou vídeo curto extra em caso de faltar."
          ],
          price: "R$ 1.400",
          paymentMethod: "Pix",
          paymentCondition: "Pagamento integral para utilizar",
          whatsAppText: "Olá! Vi minha proposta da Modkovski Fotografia e gostei do pacote Autoridade de vídeo. Gostaria de conversar.",
          installments: [
            { times: "1x", value: "R$ 1.461,39" },
            { times: "2x", value: "R$ 745,41 (R$ 1.490,81)" },
            { times: "3x", value: "R$ 501,85 (R$ 1.505,56)" },
            { times: "4x", value: "R$ 380,05 (R$ 1.520,19)" },
            { times: "5x", value: "R$ 307,02 (R$ 1.535,12)" },
            { times: "6x", value: "R$ 258,33 (R$ 1.549,99)" },
            { times: "7x", value: "R$ 228,82 (R$ 1.601,76)" },
            { times: "8x", value: "R$ 202,10 (R$ 1.616,81)" },
            { times: "9x", value: "R$ 181,40 (R$ 1.632,61)" },
            { times: "10x", value: "R$ 164,81 (R$ 1.648,13)" },
            { times: "11x", value: "R$ 151,28 (R$ 1.664,09)" },
            { times: "12x", value: "R$ 140,00 (R$ 1.680,00)" },
          ]
        }
      ]
    }
  ]
};
