import fs from "fs/promises";
import path from "path";

export async function getCreationDate(file: string) {
  const stats = await fs.stat(path.join(process.cwd(), "content", file));
  return stats.birthtime;
}

export async function getUpdateDate(file: string) {
  const stats = await fs.stat(path.join(process.cwd(), "content", file));
  return stats.mtime;
}
