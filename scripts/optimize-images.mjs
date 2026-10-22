// Put originals in src-images/ then run: npm run images
// Output: public/images/*.webp  (hero*: <200KB, others: <150KB, max 1200px wide)
import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
const IN = "src-images", OUT = "public/images";
await mkdir(OUT, { recursive: true });
for (const f of await readdir(IN)) {
  if (!/\.(png|jpe?g|webp)$/i.test(f)) continue;
  const limit = (f.startsWith("hero") ? 200 : 150) * 1024;
  let q = 82, buf;
  do {
    buf = await sharp(`${IN}/${f}`).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: q }).toBuffer();
    q -= 6;
  } while (buf.length > limit && q > 30);
  await sharp(buf).toFile(`${OUT}/${f.replace(/\.\w+$/, ".webp")}`);
  console.log(f, "->", Math.round(buf.length / 1024) + "KB");
}
