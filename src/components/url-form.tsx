"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Send } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { z } from "zod";

const urlSchema = z.string().url();

const UrlForm = () => {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedUrl = urlSchema.safeParse(url);

    if (!parsedUrl.success) {
      setError("Invalid url");
      return;
    }

    router.push(`/summarize?url=${url}`);
  };

  return (
    <div className="mt-20 flex w-full gap-2 px-10">
      <form onSubmit={handleSubmit} className="flex w-full gap-2">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border-3 h-12 border-neutral-600 bg-neutral-800/80 placeholder:text-neutral-500"
          placeholder="Paste the URL or ID"
        />
        <Button variant="gradient" className="h-12 px-8" type="submit">
          <Send />
        </Button>
      </form>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
};

export default UrlForm;
