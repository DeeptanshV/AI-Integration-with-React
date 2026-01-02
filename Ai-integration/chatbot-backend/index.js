import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash-001:generateContent?key=${process.env.AI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: message }] }
          ]
        })
      }
    );

    const data = await response.json();
console.log("FULL GEMINI RESPONSE:", JSON.stringify(data, null, 2));

res.json({ data });


  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI FAILED" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
