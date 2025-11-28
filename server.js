const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Permet de lire le JSON envoyé par le front
app.use(express.json());

// Pour servir les fichiers du dossier courant (index.html, script.js, etc.)
app.use(express.static(__dirname));

// ROUTE API OBLIGATOIRE POUR LE BOT
app.post("/api", (req, res) => {
    const userMessage = req.body.message || "";

    // Exemple de réponse simple
    if (userMessage.toLowerCase().includes("payer")) {
        return res.json({ reply: "Voici votre lien de paiement : https://simpleswap.io" });
    }

    res.json({ reply: "Je suis le bot SimpleSwap. Comment puis-je vous aider ?" });
});

// Route principale → renvoyer index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => console.log("Server running on port " + port));

