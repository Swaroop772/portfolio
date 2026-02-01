import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the API with the key from environment variables
// Note: In a production environment, you should use a backend proxy to hide the API key.
// For this portfolio, we'll use the environment variable directly, assuming it's client-side safe for this demo.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

let genAI = null;
let model = null;

if (API_KEY) {
    console.log("Gemini API Key found in .env:", !!API_KEY);
    genAI = new GoogleGenerativeAI(API_KEY);
    // Updated to specific model version to avoid 404
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });
} else {
    console.error("Gemini API Key NOT found in .env");
}

const SYSTEM_PROMPT = `
You are a helpful and friendly portfolio assistant for Swaroop.
Your goal is to answer questions about Swaroop's skills, projects, and experience based on the following context.
Keep your answers concise (under 3 sentences if possible) and professional yet conversational.
If you don't know the answer, politely say you don't have that information and suggest contacting Swaroop directly.

Context:
- Name: Swaroop
- Role: AI/ML Enthusiast & Full Stack Developer
- Skills: React, Tailwind CSS, Node.js, Python, Machine Learning, AI Integration.
- Projects: 
  1. Portfolio Website (React, Tailwind, Gemini AI)
  2. Game Clones (various simple games)
  3. AI Applications (exploring LLMs and computer vision)
- Contact: swaroop@example.com
- Resume: Available for download on the website.

Do not make up information not provided in the context.
`;

export const getBotResponse = async (userMessage) => {
    if (!model) {
        return "I'm sorry, I haven't been fully configured yet (missing or invalid API key). Please contact Swaroop directly.";
    }

    try {
        const result = await model.generateContent(`${SYSTEM_PROMPT}\n\nUser: ${userMessage}\nAssistant:`);
        const response = await result.response;
        return response.text();
    } catch (error) {
        console.error("Error generating response:", error);
        return `I'm having trouble connecting to my brain right now. Error: ${error.message || error}`;
    }
};
