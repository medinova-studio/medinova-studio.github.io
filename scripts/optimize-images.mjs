import { readdirSync, statSync } from "node:fs";
import { join, extname, dirname, basename } from "node:path";
import sharp from "sharp";

const ROOT = join(process.cwd(), "public", "images");
const QUALITY = 80;
const MAX_DIM = 1920;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const raws = walk(ROOT).filter((f) =>
  [".jpg", ".jpeg", ".png"].includes(extname(f).toLowerCase())
);

const results = [];
for (const file of raws) {
  const st = statSync(file);
  if (st.size < 150 * 1024) continue;
  const img = sharp(file);
  const meta = await img.metadata();
  const outPath = join(
    dirname(file),
    `${basename(file, extname(file))}.webp`
  );
  const pipeline = img
    .rotate()
    .webp({ quality: QUALITY, effort: 6 });

  if (meta.width > MAX_DIM || meta.height > MAX_DIM) {
    pipeline.resize({ width: MAX_DIM, height: MAX_DIM, fit: "inside" });
  }

  await pipeline.toFile(outPath);
  const outSt = statSync(outPath);
  results.push({
    src: file.replace(process.cwd(), ""),
    dst: outPath.replace(process.cwd(), ""),
    beforeKB: Math.round(st.size / 1024),
    afterKB: Math.round(outSt.size / 1024),
  });
}

console.table(results);
console.log(`Converted ${results.length} images.`);