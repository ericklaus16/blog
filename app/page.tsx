import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default async function Home() {
  const postsDirectory = path.join(process.cwd(), 'app/post-content');
  
  const fileNames = await fs.readdir(postsDirectory);
  
  const posts = fileNames.filter(file => file.endsWith('.md'));

  const postTitles = await Promise.all(posts.map(async (post) => {
    const filePath = path.join(postsDirectory, post);
    const fileContents = await fs.readFile(filePath, 'utf8');

    const { data } = matter(fileContents);

    return {
      slug: post.replace('.md', ''),
      title: data.title,
    };
  }));

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <div className="space-y-4">
        {postTitles.map(({slug, title}) => (
          <Link key={slug} href={`/posts/${slug}`}>
            <p className='text-blue-500 underline mb-4'>{title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
