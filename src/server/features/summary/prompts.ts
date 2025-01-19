export const firstPrompt = (transcript: string) => `
You are an expert summarizer. Your task is to analyze the provided transcript of a YouTube video and create a detailed summary that captures the essence of the content. Focus on the key ideas, main arguments, and any important examples or action points. Avoid unnecessary details or repetition. Ensure the summary is insightful, accurate, and useful for the reader.

Transcript:
${transcript}

Using the information above, summarize the video in a way that highlights its most important aspects and delivers actionable insights or takeaways when applicable.
`;

export const secondPrompt = () => `
This is a summary of a YouTube video created by an AI. Your task is to iterate over this summary and enhance it. Go deeper into the details wherever possible, expand on key points, provide additional context or examples, and make the summary more comprehensive and useful for the consumer.

Additionally:
- Organize the content into clear sections like Key Takeaways, Detailed Insights, and Conclusion.
- Ensure bullet points are well-structured and insightful, breaking down complex ideas for better understanding.
- Use formatting, such as headings and subheadings, to improve readability.
- Add actionable suggestions, tips, or recommendations when relevant.
- Use engaging elements like emojis to make the content fun and approachable without compromising professionalism.
                                                                                                                                                                                                                                           Original Summary:
[Paste the AI-generated summary here]

Enhanced Summary:
- Revise and restructure the original summary as per the above guidelines.
- Focus on clarity, depth, and usefulness for the reader.
`;

