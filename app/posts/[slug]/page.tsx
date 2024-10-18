import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/app/lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const processedContent = await remark().use(gfm).use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg overflow-hidden">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.metadata.title}</h1>
      <p className="text-gray-600 mb-2">{post.metadata.snippet}</p>
      <p className="text-gray-500 text-sm mb-4">{post.metadata.publishDate}</p>
      <img
        className="w-full h-auto mb-6 rounded-md"
        src={post.metadata.image.src}
        alt={post.metadata.image.alt}
      />
      <div 
        className="prose max-w-full overflow-y-auto" 
        dangerouslySetInnerHTML={{ __html: contentHtml }} 
      />
    </div>
  );
}
