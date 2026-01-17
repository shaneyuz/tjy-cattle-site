import fs from "fs";
import path from "path";
import matter from "gray-matter";

function getDir(dir) {
  return path.join(process.cwd(), dir);
}

export function getAllHorses() {
  const dir = getDir("content/horses");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(dir, filename);
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      return { slug, ...data, body: content };
    })
    .sort((a, b) => {
      const pa = Number(a.price || 0);
      const pb = Number(b.price || 0);
      return pb - pa;
    });
}

export function getAllGalleryItems() {
  const dir = getDir("content/gallery");
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));

  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(dir, filename);
    const raw = fs.readFileSync(filePath, "utf8");
    const { data } = matter(raw);
    return { slug, ...data };
  });
}
