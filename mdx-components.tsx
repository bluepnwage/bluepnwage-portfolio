import { List } from "components/mdx-components/List";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ul: List
  };
}
