
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getTripReliveSummary(tripName: string, stats: any) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional travel storyteller. Write a short, nostalgic, and exciting summary for a trip called "${tripName}". 
      Stats for context: ${JSON.stringify(stats)}. 
      Format: A short paragraph (max 3 sentences) that sounds like it's from a premium travel journal.`,
    });
    return response.text || "Every mile brought a new story, from the vibrant streets to the quiet moments in between. A journey to remember forever.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "A wonderful journey filled with discovery, exploration, and unforgettable moments across the heart of the city.";
  }
}

export async function askAiAssistant(query: string, context: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `User Context: ${context}. User Question: ${query}. 
      Act as a smart travel assistant. Be concise, helpful, and friendly.`,
    });
    return response.text || "I'm here to help with your travel plans!";
  } catch (error) {
    return "I'm sorry, I'm having trouble connecting to my brain right now. Please try again.";
  }
}
