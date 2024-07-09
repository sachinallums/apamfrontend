const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/api/chatbot-response', async (req, res) => {
    try {
        // Fetch data from GitHub repository
        const response = await axios.get('https://api.github.com/repos/liwilliam2021/apam_agents/contents/app.py');
        
        const content = Buffer.from(response.data.content, 'base64').toString('utf-8');
        
        // Assume content contains the response data
        // You might need to parse and extract the required response from the content
        res.json({ botResponse: content });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch response from GitHub' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
