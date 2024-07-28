const express = require('express');
const router = express.Router();
const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');

const genAI = new GoogleGenerativeAI('AIzaSyDqldRnqIMyLxIKsu2s7V_WwqfHl1p2jzA');

router.post('/generate', async (req, res) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent([
      'What is in this photo?',
      {
        inlineData: {
          data: Buffer.from(req.body.image).toString('base64'),
          mimeType: 'image/png',
        },
      },
    ]);
    const response = result.response;
    const text = response.text();
    res.json({ text });
  } catch (error) {
    console.log('Something Went Wrong');
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;