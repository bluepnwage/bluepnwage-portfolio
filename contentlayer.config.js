import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import { getCreationDate, getUpdateDate } from "./file-date";

export const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",

  fields: {
    title: { type: "string", required: true },
    published: { type: "boolean", required: true }
  },
  computedFields: {
    slug: {
      resolve: blog => `${blog._raw.flattenedPath}`,
      type: "string"
    },
    date: {
      resolve: async blog => await getCreationDate(blog._raw.sourceFileName),
      type: "date"
    },
    updated: {
      resolve: async blog => await getUpdateDate(blog._raw.sourceFileName),
      type: "date"
    }
  }
}));

export const Project = defineDocumentType(() => ({
  name: "Project",
  contentType: "mdx",
  filePathPattern: "**/*.mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    image: {
      type: "string",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    order: {
      type: "number"
    }
  }
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog, Project],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "one-dark-pro",
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ["word--highlighted"];
          }
        }
      ]
    ]
  }
});
