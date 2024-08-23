// pages/api/valoresController.js
export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      valor: "R$ 100,00",
      nome: "Maçã",
      data: "23/02",
    },
    {
      id: 2,
      valor: "R$ 150,00",
      nome: "Banana",
      data: "24/02",
    },
    {
      id: 3,
      valor: "R$ 200,00",
      nome: "Laranja",
      data: "25/02",
    },
  ]);
}
