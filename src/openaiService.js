OPENAI_API_KEY = 'YOUR KEY HERE'

import OpenAI from "openai"

require("dotenv").config();

const openAIClient = new OpenAI({
    apiKey: process.env[OPENAI_API_KEY]
})

const chatCompletion = await openAIClient.chat.completions.create({
    model : "gpt-3.5-turbo",
    messages : [
        {
            role : "system",
            content : "You are a helpful assistant"
        },
        {
            role : "user",
            content : "What is the meaning of life?"
        }
    ]
})