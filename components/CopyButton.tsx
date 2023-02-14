"use client";
import { Copy, Check } from "tabler-icons-react";
import { useState } from "react";

type PropTypes = {
  content: string;
};

export function CopyButton({ content }: PropTypes) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <button onClick={onClick} className="absolute text-zinc-500 top-2 right-5">
      {!copied ? <Copy className="text-zinc-500" /> : <Check className="text-emerald-500" />}
    </button>
  );
}
