const express = require("express");
const router = express.Router();
const User = require("../models/user.js");

router.post("/post_score", async (req, res) => {
  const { username, clicks, time, score, difficulty } = req.body;
  const lowercaseUsername = username.toLowerCase();
  try {
    let existingUser = await User.findOne({
      username: { $regex: new RegExp("^" + lowercaseUsername, "i") },
    });
    if (existingUser) {
      // Usuario existente, actualiza la puntuación
      existingUser.clicks = clicks;
      existingUser.time = time;
      existingUser.score = score;
      existingUser.difficulty = difficulty;
      await existingUser.save();
      res.status(200).json(existingUser);
    } else {
      // Crea un nuevo usuario
      const newUserScore = new User({
        username,
        clicks,
        time,
        score,
        difficulty,
      });

      const savedUser = await newUserScore.save();
      res.status(201).json(savedUser);
    }
  } catch (err) {
    res.status(500).json({ error: "Error al guardar/actualizar el usuario" });
  }
});

router.get("/get_scores", (req, res) => {
  const page = parseInt(req.query.page) || 1; // Obtener el número de página de los parámetros de consulta
  const perPage = parseInt(req.query.perPage) || 10; // Cantidad de elementos por página

  User.find({})
    .sort({ score: -1 })
    .skip((page - 1) * perPage) // Salta los elementos necesarios según la página
    .limit(perPage) // Limita la cantidad de elementos por página
    .then((users) => {
      const scores = users.map((user) => ({
        username: user.username,
        clicks: user.clicks,
        time: user.time,
        score: user.score,
        difficulty: user.difficulty,
      }));

      res.status(200).json(scores);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Error al obtener los puntajes" });
    });
});

module.exports = router;
