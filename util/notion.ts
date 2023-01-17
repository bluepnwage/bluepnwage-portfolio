import { Client } from "@notionhq/client";
import type {
  MultiSelectPropertyItemObjectResponse,
  TextRichTextItemResponse,
  FilesPropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
  FileBlockObjectResponse
} from "@notionhq/client/build/src/api-endpoints";
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

export async function testNotion() {
  const pages = await notion.databases.query({ database_id, sorts: [{ direction: "ascending", property: "Order" }] });
  const pageIds = [];
  for (const result of pages.results) {
    pageIds.push(result.id);
  }
  const t = await Promise.all(pageIds.map((id) => notion.pages.retrieve({ page_id: id })));
  for (const te of t) {
    const page = te as any as NotionResponse;
    console.log(page);
    console.log(page.properties.Thumbnail.files[0]);
    console.log(page.properties.Name.title[0].text.content);
    console.log(page.properties.Tags.multi_select[0]);
  }
  return t as any as NotionResponse[];
}
