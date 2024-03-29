import { useMDXComponent } from "next-contentlayer/hooks";
import type { Blog } from "contentlayer/generated";
import { CodeBlock } from "./CodeBlock";
import styles from "./mdx.module.css";
import { formatter } from "util/formatDate";

export function MDX({ content }: { content: Blog }) {
  const MDXContent = useMDXComponent(content.body.code);
  return (
    <div className="flex flex-col items-center mt-16 lg:mt-36">
      <section
        className={`w-4/5 lg:w-3/5  space-y-4 mb-20 prose-pre:overflow-x-scroll lg:prose-pre:overflow-x-auto 
      ${styles.blog}  prose-code:p-1 prose-code:rounded-sm
      prose-ul:list-disc prose-ul:p-4 prose-pre:rounded-md prose-pre:p-4`}
      >
        <header>
          <h1 className=" text-4xl lg:text-6xl text-center mb-10">{content.title}</h1>
          <p className="text-zinc-600  dark:text-zinc-400">Last updated: {formatter(content.updated)}</p>
        </header>
        <MDXContent components={{ pre: CodeBlock }} />
      </section>
    </div>
  );
}
