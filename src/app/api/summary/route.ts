import { fetchTranscript } from "@/server/features/summary/fetchTranscript";
import { generateSummary } from "@/server/features/summary/generateSummary";

export const dynamic = "force-dynamic";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { prompt: videoUrl } = (await req.json()) as { prompt: string };

    console.log(videoUrl);

    const transcript = await fetchTranscript(videoUrl);

    if (!transcript) {
      return Response.json(
        { error: "Transcript generation unsucessful" },
        { status: 400 },
      );
    }

    const summary = await generateSummary(transcript);
    return summary;
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error occurred:", error);
      return new Response(
        JSON.stringify({
          error: error.message || "An unexpected error occurred",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }
  }
}
