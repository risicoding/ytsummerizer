// fetchTranscript.ts
import { YoutubeTranscript } from "youtube-transcript";

export async function fetchTranscript(
  videoUrl: string,
): Promise<string | null> {
  try {
    const transcriptParts = await YoutubeTranscript.fetchTranscript(videoUrl);
    return transcriptParts
      .map((part) => part.text)
      .join(" ")
      .trim();
  } catch (error) {
    console.error("Error fetching transcript:", error);
    return null;
  }
}
