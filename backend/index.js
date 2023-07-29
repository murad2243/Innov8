const express = require("express");
const axios = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/interviewChat", async (req, res) => {
  try{
  const response = await axios.post("https://api.openai.com/v1/chat/completions", {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: req.body.msg }],
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    }
  });

  console.log(response.data);
  res.send("dd");
    // const data = await response.json();
    // resultText.innerText = data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    res.send("sdfsd")
    // resultText.innerText = "Error occurred while generating.";
  }
});

app.post("/generalChat", async (req, res) => {
  try {
    const msg = req.body.msg;

    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: msg,
        max_tokens: 100,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      }
    );

    const botReply = response.data.choices[0].text;
    console.log(botReply)
    res.json({ reply: botReply });
  } catch (error) {
    console.error("Error processing the message:", error);
    res.status(500).json({ error: "Something went wrong." });
  }
});

app.listen(8000, async () => {
  console.log("connected to server");
});
