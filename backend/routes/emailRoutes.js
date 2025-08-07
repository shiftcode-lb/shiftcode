const express = require("express");
const router = express.Router();
const {sendMail} = require('../utils/sendMail')

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  const subject = "Sent from Website!"
  try {
    await sendMail({ name, email, subject, message });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ message: "Failed to send email" });
  }
});

module.exports = router;
