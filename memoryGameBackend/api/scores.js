const { faces } = require("./themes");

function scoresHandler(req, res) {
  res.json(faces);
}

module.exports = scoresHandler;
