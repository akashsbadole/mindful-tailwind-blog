
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    slug: string;
    featuredImage: string;
    category: {
      name: string;
      slug: string;
    };
    author: {
      name: string;
      slug: string;
      avatar: string;
    };
    publishedAt: string;
    readTime?: string;
  };
  featured?: boolean;
}

const PostCard = ({ post, featured = false }: PostCardProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <div className="blog-card group">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-lg">
            <Link to={`/post/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="bg-blog-light overflow-hidden">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </AspectRatio>
            </Link>
          </div>
          <div className="flex flex-col justify-center p-4 md:p-0">
            <div className="space-y-4">
              <div>
                <Link to={`/category/${post.category.slug}`} className="blog-tag">
                  {post.category.name}
                </Link>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                <Link to={`/post/${post.slug}`} className="hover:text-blog-accent transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-blog-secondary line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center space-x-4">
                <Link to={`/author/${post.author.slug}`} className="flex items-center space-x-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="font-medium">{post.author.name}</span>
                </Link>
                <div className="flex items-center text-blog-secondary">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </div>
                {post.readTime && (
                  <span className="text-blog-secondary">{post.readTime} min read</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-card group h-full flex flex-col">
      <Link to={`/post/${post.slug}`} className="overflow-hidden">
        <AspectRatio ratio={16 / 9} className="bg-blog-light">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
        </AspectRatio>
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <Link to={`/category/${post.category.slug}`} className="blog-tag">
            {post.category.name}
          </Link>
        </div>
        <h3 className="text-xl font-semibold mb-3">
          <Link to={`/post/${post.slug}`} className="hover:text-blog-accent transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-blog-secondary mb-4 flex-grow line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-blog-border">
          <Link to={`/author/${post.author.slug}`} className="flex items-center space-x-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </Link>
          <div className="text-sm text-blog-secondary">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
