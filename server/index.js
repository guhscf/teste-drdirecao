// server/index.js
import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Endpoint para buscar avaliações do Google
app.get("/reviews", async (req, res) => {
  try {
    const placeId = "ChIJ763r2Qbx3JQRcsR_vqJLWYk"; // seu place_id
    const apiKey = process.env.GOOGLE_API_KEY; // variável de ambiente
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    res.json(data);
  } catch (error) {
    console.error("Erro ao buscar avaliações:", error);
    res.status(500).json({ error: "Erro ao buscar avaliações" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
