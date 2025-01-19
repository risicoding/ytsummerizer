import { fetchTranscript } from "@/server/features/summary/fetchTranscript";
import { firstPrompt, secondPrompt } from "@/server/features/summary/prompts";
import { generateText, streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export async function POST(req: Request) {
  const { prompt: videoUrl }: { prompt: string } = await req.json();
  console.log(videoUrl);

  // Fetch the transcript using the video URL
  const transcript = await fetchTranscript(videoUrl);

  if (!transcript) {
    return new Response(
      JSON.stringify({ error: "Unable to fetch transcript" }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

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
  const result = streamText({
    model: google("gemini-1.5-pro"),
    prompt: secondSummaryPrompt,
  });

  return result.toDataStreamResponse();
}
