import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  // TEMP response (no AI yet)
  res.json({
    reply: `You said: ${message}`
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
