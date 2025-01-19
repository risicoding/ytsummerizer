import { firstPrompt, secondPrompt } from "./prompts";
import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export async function summarizeTranscript(
  transcript: string,
): Promise<{ firstSummary: string; secondSummary: string }> {
  try {
    const google = createGoogleGenerativeAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    // Generate the first summary
    const firstSummaryPrompt = `
${firstPrompt(transcript)}
Transcript:
${transcript}

Provide your response below:
`;
    const { text: firstSummary } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: firstSummaryPrompt,
    });

    // Generate the second, refined summary
    const secondSummaryPrompt = `
${secondPrompt()}
First Summary:
${firstSummary}

Refine the summary and provide your response below:
`;
    const { text: secondSummary } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: secondSummaryPrompt,
    });

    return { firstSummary, secondSummary };
  } catch (error) {
    console.error("Error summarizing transcript:", error);
    return {
      firstSummary: "Error generating first summary.",
      secondSummary: "Error generating second summary.",
    };
  }
}

