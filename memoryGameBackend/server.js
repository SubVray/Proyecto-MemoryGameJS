const cardsHandler = require("./api/cards");
const scoresHandler = require("./api/scores");

module.exports = (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost:3000");

  if (pathname.startsWith("/api/cards")) {
    return cardsHandler(req, res);
  }

  if (pathname.startsWith("/api/scores")) {
    return scoresHandler(req, res);
  }

  // Manejar otras rutas aquí si es necesario...

  // Si no se encuentra la ruta, devolver 404
  res.status(404).send("Not Found");
};
