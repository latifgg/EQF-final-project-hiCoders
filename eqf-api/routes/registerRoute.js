import Register from "../models/register.js";
import express from "express"
const router = express.Router();
  // Tüm mesajları getir
  router.get("/api/register", async (req, res) => {
    try {
      const messages = await Register.findAll();
      res.send(messages);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  
  // Yeni mesaj oluştur
router.post("/api/register", async (req, res) => {
  const { firstName,lastName, email, password } = req.body;
  try {
    const newMessage =  await Register.create({
      firstName,
      lastName,
      email,
      password,
    });
    res.json(newMessage);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

  
  // Mevcut bir mesajı güncelle
  router.put("/api/register/:id", async (req, res) => {
    const id = req.params.id;
    const { firstName,lastName, email, password } = req.body;
    try {
      await Register.update(
        { firstName,lastName, email, password  },
        { where: { id } }
      );
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  
  // Bir mesajı sil
  router.delete("/api/register/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await Register.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  
  export default router;