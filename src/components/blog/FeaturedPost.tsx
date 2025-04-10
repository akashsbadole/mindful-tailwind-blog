
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface FeaturedPostProps {
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
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <section className="relative overflow-hidden group">
      <AspectRatio ratio={21/9} className="w-full bg-blog-light">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-end">
          <div className="container-blog py-8 md:py-16">
            <div className="max-w-3xl">
              <div className="mb-4">
                <Link to={`/category/${post.category.slug}`} className="inline-block px-3 py-1 bg-blog-accent text-white text-sm font-medium rounded-md hover:bg-blog-accent/90 transition-colors">
                  {post.category.name}
                </Link>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                <Link to={`/post/${post.slug}`} className="hover:text-blog-accent transition-colors">
                  {post.title}
                </Link>
              </h1>
              <p className="text-white/90 mb-6 max-w-2xl line-clamp-2 md:line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center text-white/80 space-x-6">
                <Link to={`/author/${post.author.slug}`} className="flex items-center space-x-2 group">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/30"
                  />
                  <span className="font-medium group-hover:text-white transition-colors">{post.author.name}</span>
                </Link>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.publishedAt}>{formattedDate}</time>
                </div>
                {post.readTime && (
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} min read</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </AspectRatio>
    </section>
  );
};

export default FeaturedPost;
