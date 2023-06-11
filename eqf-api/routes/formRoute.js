// const express = require('express');
// const router = express.Router();

import express from "express";
import Form from "../models/form.js";
const router = express.Router();

// Tüm mesajları getir
router.get("/forms", async (req, res) => {
  try {
    const forms = await Form.findAll();
    res.send(forms);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Yeni mesaj oluştur
router.post("/forms", async (req, res) => {
  const { city, name, surname, date, details } = req.body;
  try {
    const newForms = await Form.create({
      city,
      name,
      surname,
      date,
      details,
    });
    res.json(newForms);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Mevcut bir mesajı güncelle
router.put("/forms/:id", async (req, res) => {
  const id = req.params.id;
  const { city, name, surname, date, details } = req.body;
  try {
    await Form.update(
      { city, name, surname, date, details },
      { where: { id } }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// Bir mesajı sil
router.delete("/forms/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Form.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

// module.exports = router;
export default router;
