import { MDXRemote } from "next-mdx-remote/rsc";
import CodeSnippet from "@/components/codeSnippet/codeSnippet";

import { loadPost } from "@/helpers/fileHandler";

export default async function Posts({ params }) {
  const { frontmatter, content } = await loadPost(
    params.section,
    params.postSlug
  );
  return (
    <article>
      <MDXRemote source={content} components={{ pre: CodeSnippet }} />
    </article>
  );
}
