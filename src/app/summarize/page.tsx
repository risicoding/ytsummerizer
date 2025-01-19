"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { useSearchParams } from "next/navigation";
import { useCompletion } from "ai/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import Markdown from "react-markdown";

export default function VideoSummaryPage() {
  const searchParams = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const { complete, completion, isLoading } = useCompletion({
    api: "/api/summary",
    streamProtocol:'data'
  });

  useEffect(() => {
    const urlParam = searchParams.get("url");
    if (!urlParam) return;
    complete(urlParam);
  }, [searchParams, complete]);

  useEffect(()=>{console.log(completion)},[completion])
  return (
    <div className="container mx-auto p-4">
      <Card className="mx-auto w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Video Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {error ? (
            <Alert variant="destructive">
              <AlertTriangleIcon className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-4 w-4 animate-pulse rounded-full bg-boston-500"></div>
              <div className="h-4 w-4 animate-pulse rounded-full bg-boston-500 delay-75"></div>
              <div className="h-4 w-4 animate-pulse rounded-full bg-boston-500 delay-150"></div>
              <span className="text-boston-500">Generating summary...</span>
            </div>
          ) : completion ? (
            <div className="whitespace-pre-wrap">
              <Markdown>{completion}</Markdown>
            </div>
          ) : (
            <div className="text-center text-gray-500">
              Summary will appear here once generated...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
