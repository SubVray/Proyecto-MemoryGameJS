const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/score", (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });

  newUser
    .save()
    .then((savedUser) => {
      res.status(201).json(savedUser);
    })
    .catch((err) => {
      res.status(500).json({ error: "Error al guardar el usuario" });
    });
});

module.exports = router;
