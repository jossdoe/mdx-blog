import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const IndexPage = ({ posts }) => (
  <ul>
    {posts.map((post, idx) => (
      <li key={idx}>
        <Link href={`/posts/${post.slug}`}>
          <a>{post.title}</a>
        </Link>{' '}
        ({post.date})
      </li>
    ))}
  </ul>
);

export async function getStaticProps() {
  const slugs = await fs.promises.readdir(
    path.join(process.cwd(), 'pages/posts')
  );

  const posts = slugs.map((slug) => ({
    ...require(`./posts/${slug}/index.mdx`).metadata,
    slug,
  }));

  return {
    props: {
      posts,
    },
  };
}

export default IndexPage;
