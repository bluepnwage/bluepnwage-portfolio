"use client";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useCodeBlock } from "./mdx-components/CodeBlockWrapper";
import { AnimatePresence, motion } from "framer-motion";

export function CopyButton() {
  const content = useCodeBlock();
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1.5 * 1000);
  };
  return (
    <button
      onClick={onClick}
      className="absolute text-gray-400 top-4 right-4 hover:bg-neutral-600 flex items-center justify-center p-2 rounded transition-all duration-200 ease"
    >
      <AnimatePresence
        initial={false}
        mode="wait"
      >
        <motion.span
          key={`${copied}`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3, type: "spring", bounce: 0 }}
        >
          {!copied ? <Copy size={20} /> : <Check size={20} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
