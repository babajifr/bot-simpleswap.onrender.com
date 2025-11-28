const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// servir les fichiers statiques (index.html, css, js)
app.use(express.static(__dirname));
app.use(express.json()); // pour lire JSON body

// Endpoint utilisé par index.html
app.post("/api", (req, res) => {
  const message = (req.body && req.body.message) ? String(req.body.message).trim().toLowerCase() : "";

  // logique simple : si utilisateur écrit "payer", renvoyer le lien simpleswap
  if (message === "payer" || message === "pay") {
    const wallet = "0x1234567890ABCDEF1234567890ABCDEF12345678";
    const url = `https://simpleswap.io/exchange?from=eur-eur&to=eth-eth&rate=floating&amount=150&wallet=${wallet}`;
    return res.json({ reply: `Voici le lien de paiement : ${url}`, url });
  }

  // réponse par défaut
  return res.json({ reply: `Reçu: "${message}". Écris "payer" pour générer le lien.` });
});

// Page d'accueil (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log("Server running on port " + port);
});
