import fs from "fs";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const yaml = require("F:/Hexoblog/Blog-qianyi/hexoblog/node_modules/js-yaml");

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const weeklyRoot = path.resolve(scriptDir, "..");
const hexoRoot = path.resolve(weeklyRoot, "../hexoblog");
const sourcePostsDir = path.join(hexoRoot, "source", "_posts");
const targetPostsDir = path.join(weeklyRoot, "src", "pages", "posts");
const targetImagesDir = path.join(weeklyRoot, "public", "images");
const backupRoot = path.join(weeklyRoot, ".migration-backup");
const templateZhBackupDir = path.join(backupRoot, "template-posts-zh");
const templateEnBackupDir = path.join(backupRoot, "template-posts-en");
const defaultImage = "/images/Happy.png";

const normalizeDate = (value) => {
  if (!value) return "2026/04/08";
  const parsed = new Date(String(value).replace(/\//g, "-"));
  if (Number.isNaN(parsed.getTime())) {
    return String(value).replace(/-/g, "/").slice(0, 10);
  }
  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}/${month}/${day}`;
};

const stripMarkdown = (input) =>
  input
    .replace(/<!--more-->/g, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\(([^)]+)\)/g, " ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/<img[^>]*>/gi, " ")
    .replace(/<video[\s\S]*?<\/video>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/^>\s?/gm, "")
    .replace(/^#+\s?/gm, "")
    .replace(/\r/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const escapeDoubleQuotes = (value) => String(value).replace(/"/g, '\\"');

const findFirstImage = (input) => {
  const markdownMatch = input.match(/!\[[^\]]*]\(([^)]+)\)/);
  if (markdownMatch?.[1]) return markdownMatch[1];
  const htmlMatch = input.match(/<img[^>]+src=["']([^"']+)["']/i);
  return htmlMatch?.[1];
};

const needsPrependedCover = (cover, body) => {
  if (!cover) return false;
  const firstImage = findFirstImage(body);
  return !firstImage || firstImage !== cover;
};

const getExcerpt = (body) => {
  const [beforeMore] = body.split("<!--more-->");
  const excerpt = stripMarkdown(beforeMore || body);
  return excerpt.slice(0, 140);
};

const readFrontmatter = (fileContent) => {
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) {
    return { data: {}, body: fileContent };
  }
  return {
    data: yaml.load(match[1]) ?? {},
    body: fileContent.slice(match[0].length),
  };
};

const ensureDir = (dir) => {
  fs.mkdirSync(dir, { recursive: true });
};

const moveTemplatePosts = (fromDir, backupDir) => {
  ensureDir(backupDir);
  for (const file of fs.readdirSync(fromDir)) {
    if (!file.endsWith(".md")) continue;
    fs.renameSync(path.join(fromDir, file), path.join(backupDir, file));
  }
};

const copyImages = () => {
  const sourceImagesDir = path.join(hexoRoot, "source", "images");
  ensureDir(targetImagesDir);
  for (const file of fs.readdirSync(sourceImagesDir)) {
    const source = path.join(sourceImagesDir, file);
    const target = path.join(targetImagesDir, file);
    if (fs.statSync(source).isFile()) {
      fs.copyFileSync(source, target);
    }
  }
};

const collectMarkdownFiles = (dir) => {
  const results = [];
  const walk = (currentDir) => {
    for (const entry of fs.readdirSync(currentDir, { withFileTypes: true })) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && entry.name.endsWith(".md")) {
        results.push(fullPath);
      }
    }
  };
  walk(dir);
  return results;
};

const formatArray = (items) => {
  if (!Array.isArray(items) || items.length === 0) return "";
  return items.map((item) => `  - "${escapeDoubleQuotes(item)}"`).join("\n");
};

const buildMarkdownFile = ({ index, title, date, description, image, tags, categories, body }) => {
  const frontmatter = [
    "---",
    `date: ${date}`,
    `issueTitle: "${escapeDoubleQuotes(title)}"`,
    `description: "${escapeDoubleQuotes(description)}"`,
    `image: "${escapeDoubleQuotes(image)}"`,
    `heroImage: "${escapeDoubleQuotes(image)}"`,
    ...(Array.isArray(tags) && tags.length ? ["tags:", formatArray(tags)] : []),
    ...(Array.isArray(categories) && categories.length ? ["categories:", formatArray(categories)] : []),
    "---",
    "",
  ].join("\n");

  return `${frontmatter}${body.trim()}\n`;
};

const main = () => {
  ensureDir(backupRoot);
  moveTemplatePosts(targetPostsDir, templateZhBackupDir);
  moveTemplatePosts(path.join(weeklyRoot, "src", "pages", "en", "posts"), templateEnBackupDir);
  copyImages();

  const files = collectMarkdownFiles(sourcePostsDir)
    .map((filePath) => {
      const raw = fs.readFileSync(filePath, "utf8");
      const { data, body } = readFrontmatter(raw);
      const title = data.title || path.basename(filePath, ".md");
      const cover = data.cover || findFirstImage(body) || defaultImage;
      const cleanBody = body.replace(/<!--more-->/g, "").trim();
      const content = needsPrependedCover(cover, cleanBody)
        ? `<img src="${cover}" width="800" />\n\n${cleanBody}`
        : cleanBody;

      return {
        filePath,
        title: String(title).trim(),
        date: normalizeDate(data.date),
        description: getExcerpt(body),
        image: String(cover).trim(),
        tags: Array.isArray(data.tags) ? data.tags : data.tags ? [data.tags] : [],
        categories: Array.isArray(data.categories) ? data.categories : data.categories ? [data.categories] : [],
        body: content,
      };
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  for (const file of fs.readdirSync(targetPostsDir)) {
    if (file.endsWith(".md")) {
      fs.unlinkSync(path.join(targetPostsDir, file));
    }
  }

  files.forEach((post, zeroBasedIndex) => {
    const index = String(zeroBasedIndex + 1);
    const content = buildMarkdownFile({
      index,
      title: post.title,
      date: post.date,
      description: post.description,
      image: post.image || defaultImage,
      tags: post.tags,
      categories: post.categories,
      body: post.body,
    });
    fs.writeFileSync(path.join(targetPostsDir, `${index}.md`), content, "utf8");
  });

  console.log(`Migrated ${files.length} posts into ${targetPostsDir}`);
};

main();
