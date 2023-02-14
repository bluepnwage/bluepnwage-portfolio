import readline from "readline";
import { createReadStream } from "fs";
import fs from "fs/promises";
import path from "path";

const input = createReadStream(path.join(process.cwd(), "styles", "tokens.css"));
const line = readline.createInterface({ input });

const obj = {};

line.on("line", data => {
  const { key, value, prop } = format(data);
  if (prop) {
    obj[prop] = { ...obj[prop], [key]: value };
  }
});

line.on("close", async () => {
  await fs.writeFile("theme.json", JSON.stringify(obj, null, 2));
});

const baseSys = `--md-sys-`;
const baseRef = `--md-ref-`;
/**
 *
 * @param {string} input
 */

function format(input) {
  let [key, value] = input.split(":");
  let newKey = "";
  let newValue = value ? value.replace(";", "").trim() : value;
  let prop = "";
  if (key.includes("palette")) {
    const regex = /[0-9]/gi;
    const numbers = key.match(regex);
    newKey = key
      .replace(`${baseRef}palette-`, "")
      .trim()
      .replace(regex, "")
      .concat(`-${numbers.join("")}`);
    prop = "palette";
  } else if (key.includes("color")) {
    newKey = key.replace(`${baseSys}color-`, "").trim().replace("-light", "");
    prop = "color";
  }
  return { key: newKey, value: newValue, prop };
}
