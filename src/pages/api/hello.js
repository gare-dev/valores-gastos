// pages/api/valoresController.js
export default function handler(req, res) {
  res.status(200).json([
    {
      valor: 100,
      nome: "Maça",
      data: "23/02",
    },
    {
      valor: 150,
      nome: "Banana",
      data: "24/02",
    },
    {
      valor: 200,
      nome: "Laranja",
      data: "25/02",
    },
  ]);
}
