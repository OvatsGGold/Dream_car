import { GoogleGenAI, Type } from "@google/genai";
import { CarRecommendation } from "../types";

export const getCarRecommendation = async (userDescription: string): Promise<CarRecommendation> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Recommend a specific car model based on this user description: "${userDescription}". 
    Provide the make, model, year, category, a reason for the recommendation, key features, and estimated price range (in USD).`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          make: { type: Type.STRING },
          model: { type: Type.STRING },
          year: { type: Type.STRING },
          category: { type: Type.STRING },
          reason: { type: Type.STRING },
          keyFeatures: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          estimatedPriceRange: { type: Type.STRING }
        },
        required: ["make", "model", "category", "reason", "keyFeatures", "estimatedPriceRange"]
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error("No response from AI");
  }

  return JSON.parse(text) as CarRecommendation;
};