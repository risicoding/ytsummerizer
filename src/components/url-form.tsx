import React from "react";
import { Input } from "./ui/input";
import { Send } from "lucide-react";
import { Button } from "./ui/button";

const UrlForm = () => {
  return (
    <div className="mt-20 flex gap-2 w-full px-10 ">
      <Input className="bg-neutral-800/80 boder-3  border-neutral-600 h-12 placeholder:text-neutral-500" placeholder="Paste the Url or id" />
      <Button variant='gradient' className="h-12 px-8">
        <Send />
      </Button>
    </div>
  );
};

export default UrlForm;
