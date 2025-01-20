import "server-only";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText, streamText } from "ai";
import { firstPrompt, secondPrompt } from "./prompts";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export const generateSummary = async (transcript: string) => {
  const { text: firstSummary } = await generateText({
    model: google("gemini-1.5-flash"),
    prompt: firstPrompt(transcript)
  });

  const result = streamText({
    model: google("gemini-1.5-flash"),
    prompt: secondPrompt(firstSummary),
  });

  return result.toDataStream();
};
