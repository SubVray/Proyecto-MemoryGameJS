const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/score", (req, res) => {
  const { username, clicks, time, score } = req.body;

  const newUserScore = new User({ username, clicks, time, score });

  newUserScore
    .save()
    .then((savedUser) => {
      res.status(201).json(savedUser);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error al guardar el usuario" });
    });
});
router.get("/get_scores", (req, res) => {
  User.find({})
    .then((users) => {
      const scores = users.map((user) => ({
        username: user.username,
        clicks: user.clicks,
        time: user.time,
        score: user.score,
      }));
      res.status(200).json(scores);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error al obtener los puntajes" });
    });
});

module.exports = router;
