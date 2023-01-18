import { Client } from "@notionhq/client";
import type {
  MultiSelectPropertyItemObjectResponse,
  TextRichTextItemResponse,
  FilesPropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
  ParagraphBlockObjectResponse,
  ListBlockChildrenResponse
} from "@notionhq/client/build/src/api-endpoints";
import { TechStack, TechType } from "interfaces";
import { createStack } from "./techStack";

const notion = new Client({ auth: process.env.NOTION_KEY });
const database_id = process.env.NOTION_DATABASE_ID!;

type PersonalProjects = {
  Thumbnail: FilesPropertyItemObjectResponse;
  Name: { title: TextRichTextItemResponse[] };
  URL: UrlPropertyItemObjectResponse;
  Tags: MultiSelectPropertyItemObjectResponse;
};

export type NotionResponse = {
  properties: PersonalProjects;
};

export type NotionContent = {
  title: string;
  description: string;
  image: string;
  tags: TechStack[];
  url: string;
};

export async function getContent() {
  const pages = await notion.databases.query({ database_id, sorts: [{ direction: "ascending", property: "Order" }] });
  const pageIds = [];
  for (const result of pages.results) {
    pageIds.push(result.id);
  }
  const pageBlocks = await Promise.all(pageIds.map((id) => notion.pages.retrieve({ page_id: id })));
  const content: NotionContent[] = [];
  for (const p of pageBlocks) {
    const page = p as any as NotionResponse;
    const description = await notion.blocks.children.list({ block_id: p.id });
    const image = page.properties.Thumbnail.files[0];
    content.push({
      title: page.properties.Name.title[0].plain_text,
      description: createDescription(description),
      image: image.type === "file" ? image.file.url : image.type === "external" ? image.external.url : "",
      tags: createTags(page.properties.Tags),
      url: page.properties.URL.url || ""
    });
  }
  return content;
}

function createTags(tags: PersonalProjects["Tags"]) {
  const stack = createStack(false, ...tags.multi_select.map(({ name }) => name as TechType));
  return stack;
}

function createDescription(block: ListBlockChildrenResponse) {
  let description = "";
  for (const children of block.results) {
    const text = children as any as ParagraphBlockObjectResponse;
    for (const content of text.paragraph.rich_text) {
      let textToAdd: string = "";
      if (content.type === "text") {
        if (content.text.link) {
          textToAdd = `<a class="dark:text-indigo-400 text-indigo-600 hover:underline" target="_blank" href="${content.text.link.url}">${content.text.content}</a>`;
        } else {
          textToAdd = content.text.content;
        }
      }

      description += textToAdd;
    }
  }
  return description;
}
