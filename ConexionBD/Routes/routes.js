const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("mensaje enviado desde otro archivo");
});

router.get("/servicios", (req, res) => {
  res.send("Otro mensaje enviado desde otro archivo");
});

module.exports = router;
