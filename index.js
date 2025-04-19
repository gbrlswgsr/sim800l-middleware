const express = require("express");
const axios = require("axios");
const app = express();

// Gunakan JSON parser untuk menerima data JSON
app.use(express.json());

// Ganti dengan URL Google Apps Script kamu
const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbw1w29pQeKqbO2xsp7y88Y2tH7m1bj283vQsri5lop_gtaIXKSgoaICb1d5RRoLyHSC/exec";

// Endpoint untuk menerima data dari SIM800L
app.post("/data", async (req, res) => {
  try {
    // Mengirim data ke Google Apps Script via POST
    await axios.post(googleAppsScriptURL, req.body);

    // Memberikan respons sukses
    res.send("Data berhasil terkirim ke Google Sheets!");
  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).send("Gagal mengirim data ke Google Sheets");
  }
});

// Set port aplikasi (Railway otomatis menggunakan port 3000)
app.listen(process.env.PORT || 3000, () => {
  console.log("Middleware berjalan di port 3000");
});

