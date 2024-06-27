"use client";
import { createContext, useContext } from "react";

const CodeBlockContext = createContext("");

export function CodeBlockWrapper({ content, children }: { content: string; children: React.ReactNode }) {
  return <CodeBlockContext.Provider value={content}>{children}</CodeBlockContext.Provider>;
}

export function useCodeBlock() {
  return useContext(CodeBlockContext);
}
