const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Pour servir les fichiers statiques (CSS, JS, images si tu en ajoutes)
app.use(express.static(__dirname));

// Page d'accueil → index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});

