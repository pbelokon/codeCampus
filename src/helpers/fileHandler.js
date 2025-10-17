import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function getSectionList(section) {
  if (section == "") return "";

  const posts = [];

  const files = await rd(`content/${section}`);

  for (const file of files) {
    const rawContent = await rf(`content/${section}/${file}`);
    const { data: frontmatter } = matter(rawContent);

    posts.push({ slug: file.replace(".mdx", ""), ...frontmatter });
  }

  return posts;
}

export async function getContentList() {
  const folders = await rd(`content`);
  return folders;
}

export async function loadPost(section, slug) {
  const rawContent = await rf(`content/${section}/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

const rd = (dPath) => {
  return fs.readdir(path.join(process.cwd(), dPath));
};

const rf = (fPath) => {
  return fs.readFile(path.join(process.cwd(), fPath), "utf8");
};
