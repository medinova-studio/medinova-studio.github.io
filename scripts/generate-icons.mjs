import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const logoSvgPath = path.join(root, "public", "images", "logo.svg");
const svg = fs.readFileSync(logoSvgPath, "utf8");
const match = svg.match(/base64,([A-Za-z0-9+/=]+)/);
if (!match) {
  console.error("No embedded base64 image found in logo.svg");
  process.exit(1);
}
const logoPng = Buffer.from(match[1], "base64");

async function makeIcon(size, outFile) {
  const canvas = sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: "#F0F5FF",
    },
  });
  // Logo occupies ~78% of the square, centered.
  const inner = Math.round(size * 0.78);
  await canvas
    .composite([{ input: await sharp(logoPng).resize({ width: inner }).png().toBuffer(), gravity: "centre" }])
    .png()
    .toFile(path.join(root, "app", outFile));
  console.log("wrote app/" + outFile, size + "x" + size);
}

await makeIcon(512, "icon.png");
await makeIcon(180, "apple-icon.png");
