import { useMDXComponent } from "next-contentlayer/hooks";
import type { Blog } from "contentlayer/generated";
import { CodeBlock } from "./CodeBlock";

export function MDX({ blog }: { blog: Blog }) {
  const MDXContent = useMDXComponent(blog.body.code);

  return (
    <div className="flex flex-col items-center">
      <section
        className={`w-3/5 space-y-4 mb-20  prose-code:bg-zinc-800  prose-code:p-1 prose-code:rounded-sm
     prose-ul:list-disc prose-ul:p-4 prose-pre:bg-zinc-800 prose-pre:rounded-md prose-pre:p-4`}
      >
        <header>
          <h1 className="display-large text-center mb-5">{blog.title}</h1>
        </header>
        <MDXContent components={{ pre: CodeBlock }} />
      </section>
    </div>
  );
}
