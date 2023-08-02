const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/", (req, res) => {
  const { name, email, age } = req.body;
  const newUser = new User({ name, email, age });

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
