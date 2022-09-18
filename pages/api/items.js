// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      id: 0,
      title: "Royal Padel Toro",
      price: 44500,
      imgUrl: "http://localhost:3000/img/toro.webp",
      description: [
        "Material del núcleo: espuma.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de lágrima.",
        "Perfil de 38mm.",
        "Peso mínimo de 365g y máximo de 385g.",
        "Balance alto."
      ],
    },
    {
      id: 1,
      title: "Royal Padel Cross",
      price: 34990,
      imgUrl: "http://localhost:3000/img/cross.webp",
      description: [
        "Material del núcleo: Foam.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de redondo.",
        "Perfil de 38mm.",
        "Peso mínimo de 360g y máximo de 390g.",
        "Balance medio.",
        "Superficie rugosa"
      ],
    },
    {
      id: 2,
      title: "Royal Padel Tigra",
      price: 46499,
      imgUrl: "http://localhost:3000/img/tigra.webp",
      description: [
        "Material del núcleo: Foam.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de diamante.",
        "Perfil de 38mm.",
        "Peso mínimo de 360g y máximo de 380g.",
        "Balance alto."
      ],
    },
    {
      id: 3,
      title: "Royal Padel Evo",
      price: 34500,
      imgUrl: "http://localhost:3000/img/evo.webp",
      description: [
        "Material del núcleo: Foam.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de diamante.",
        "Perfil de 38mm.",
        "Peso mínimo de 360g y máximo de 380g.",
        "Balance alto."
      ],
    },
    {
      id: 4,
      title: "Royal Padel Aniversario",
      price: 37600,
      imgUrl: "http://localhost:3000/img/aniversario.webp",
      description: [
        "Material del núcleo: Foam.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de diamante.",
        "Perfil de 38mm.",
        "Peso mínimo de 360g y máximo de 380g.",
        "Balance alto."
      ],
    },
    {
      id: 5,
      title: "Royal Padel Whip",
      price: 38000,
      imgUrl: "http://localhost:3000/img/whip.webp",
      description: [
        "Material del núcleo: Foam.",
        "Material exterior: carbono y fibra de vidrio.",
        "Forma de diamante.",
        "Perfil de 38mm.",
        "Peso mínimo de 360g y máximo de 380g.",
        "Balance alto."
      ],
    },
  ]);
}
