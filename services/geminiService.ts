import { GoogleGenAI, Type } from "@google/genai";
import { Option } from './types';

// This is a placeholder, and will be replaced by the build system.
const API_KEY = process.env.API_KEY as string;
const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getPersonalityAnalysis = async (choices: Option[]): Promise<{ title: string; analysis: string }> => {
    const prompt = `
    Based on the following series of choices a user made in a utilitarian ethics game, analyze their decision-making profile. The user is an Indian high school student (class 9-12).

    Here are their choices:
    ${choices.map((c, i) => `Dilemma ${i + 1}: They chose to "${c.text}" which had a hedonic score of ${c.hedonicScore}.`).join('\n')}

    Analyze their pattern. Do they tend to be risk-averse, altruistic, individualistic, pragmatic, or something else? Are they more of an Act Utilitarian or a Rule Utilitarian? Please be concise, encouraging, and write in the second person (e.g., "You tend to...").

    Return the analysis in a JSON object with this exact structure: { "title": "A short, catchy title for their profile (e.g., 'The Pragmatic Altruist')", "analysis": "A 2-3 sentence paragraph explaining their profile." }
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        title: { type: Type.STRING, description: "A short, catchy title for the user's decision-making profile." },
                        analysis: { type: Type.STRING, description: "A 2-3 sentence paragraph analyzing the user's choices." }
                    },
                    required: ['title', 'analysis']
                }
            }
        });

        const jsonStr = response.text.trim();
        return JSON.parse(jsonStr);

    } catch (error) {
        console.error("Gemini API call failed:", error);
        // Provide a graceful fallback
        return {
            title: "Thoughtful Analyst",
            analysis: "You've navigated a series of complex ethical dilemmas with care. Your choices suggest a thoughtful approach to balancing the needs of others with practical considerations, showing a strong foundation in ethical reasoning."
        };
    }
};