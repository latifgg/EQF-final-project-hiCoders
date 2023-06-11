import Message from "../models/message.js"
import express from "express"
const router = express.Router();

  // Tüm mesajları getir
  router.get("/messages", async (req, res) => {
    try {
      const messages = await Message.findAll();
      res.send(messages);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  // Verilen id'ye sahip mesajı getir
router.get("/messages/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const message = await Message.findOne({ where: { id } });
    if (!message) {
      return res.status(404).json({ error: "Mesaj bulunamadı." });
    }
    res.json(message);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

  
  // Yeni mesaj oluştur
router.post("/messages", async (req, res) => {
  const { city, name, surname, phone, address, message } = req.body;
  try {
    const newMessage =  await Message.create({
      city,
      name, 
      surname, 
      phone, 
      address, 
      message
    });
    res.json(newMessage);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

  
  // Mevcut bir mesajı güncelle
  router.put("/messages/:id", async (req, res) => {
    const id = req.params.id;
    const { city, name, surname, phone, address, message } = req.body;
    try {
      await Message.update(
        { city, name, surname, phone, address, message },
        { where: { id } }
      );
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });
  
  // Bir mesajı sil
  router.delete("/messages/:id", async (req, res) => {
    const id = req.params.id;
    try {
      await Message.destroy({ where: { id } });
      res.sendStatus(200);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  });

  
  export default router;