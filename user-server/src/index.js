const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config(); // .env dosyasını yükler

const app = express();

// Middleware
app.use(express.json());

// MongoDB bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB bağlantısı başarılı!");
  } catch (error) {
    console.error("MongoDB bağlantı hatası:", error.message);
    process.exit(1); // Hata durumunda uygulamayı kapatır
  }
};

// API endpoint
app.get("/", (req, res) => {
  res.send("API çalışıyor!");
});

// Sunucuyu başlat
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB(); // MongoDB bağlantısını kurar
  app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
  });
};

startServer();
