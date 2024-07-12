import fs from "fs/promises";
import path from "path";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";
import { CopyButton } from "components/CopyButton";

type PropTypes = {
  children: React.ReactNode;
  filePath: string[];
  lang: string;
};

const marked = new Marked(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    }
  })
);

export async function CodeBlock({ filePath, lang = "javascript" }: PropTypes) {
  const file = await fs.readFile(path.join(process.cwd(), ...filePath), "utf-8");
  const markdown = await marked.parse(`
  \`\`\`${lang}
  ${file}
  \`\`\`
  `);
  return (
    <>
      <div className="relative border border-outline rounded p-4 border-neutral-600 bg-neutral-800 my-10">
        <div dangerouslySetInnerHTML={{ __html: markdown }} />
        <CopyButton content={file} />
      </div>
    </>
  );
}
