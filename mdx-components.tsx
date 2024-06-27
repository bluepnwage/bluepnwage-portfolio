import { CodeBlock } from "components/mdx-components/CodeBlock";
import { List } from "components/mdx-components/List";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: CodeBlock,
    ul: List
  };
}
