
import { GoogleGenAI, Type } from "@google/genai";

// Initialize the Google GenAI client using process.env.API_KEY exactly as instructed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates news items for the school home page.
 */
export const generateNewsItems = async () => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 3 recent news or notices for New Holy Cross E.B.S School in Kathmandu. One must mention that Admissions for the 2083 - 2084 session are open.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              title: { type: Type.STRING },
              date: { type: Type.STRING },
              excerpt: { type: Type.STRING },
              category: { type: Type.STRING }
            },
            required: ["id", "title", "date", "excerpt", "category"]
          }
        }
      }
    });
    // Directly accessing .text property of GenerateContentResponse as per guidelines.
    const text = response.text;
    return text ? JSON.parse(text) : [];
  } catch (error) {
    console.error("News Generation Error:", error);
    return [
      { id: '1', title: 'Admissions Open for Session 2083 - 2084', date: '2024-03-20', excerpt: 'We are pleased to announce that registrations for the new academic session 2083 - 2084 are now open for all grades.', category: 'Notice' },
      { id: '2', title: 'Silver Jubilee Achievements', date: '2024-04-02', excerpt: 'Celebrating our legacy since 2055 BS with top positions in regional mathematics and sports competitions.', category: 'Achievement' },
      { id: '3', title: 'Annual Cultural Festival', date: '2024-04-20', excerpt: 'Join us for a day of performances celebrating our school spirit and the theme "Light shines in darkness".', category: 'Event' }
    ];
  }
};

/**
 * Provides conversational AI responses for the school assistant chatbot.
 * Trained with school-specific metadata to assist parents and students.
 */
export const getSchoolAssistantResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "You are the friendly and professional AI assistant for New Holy Cross E.B.S School, Kathmandu. " +
          "Your mission is to provide accurate information to parents and students. " +
          "School Info: " +
          "- Location: Kandaghari-9, Kathmandu. " +
          "- Established: 2055 BS. " +
          "- Slogan: 'Light shines in darkness'. " +
          "- Principal: Dinesh Kumar Karki. " +
          "- Admissions: Currently open for 2083 - 2084 session. " +
          "- Contact: 01-4990131. " +
          "Keep responses concise, welcoming, and informative.",
      },
    });
    // Directly accessing .text property of GenerateContentResponse as per guidelines.
    return response.text || "I'm sorry, I'm having trouble finding that information. Please contact the school office.";
  } catch (error) {
    console.error("Chatbot Service Error:", error);
    return "I apologize, but I'm having difficulty responding right now. Please call our office at 01-4990131.";
  }
};
