
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

interface AuthorCardProps {
  author: {
    name: string;
    slug: string;
    avatar: string;
    bio: string;
    postCount?: number;
    social?: {
      twitter?: string;
      website?: string;
    };
  };
  isCompact?: boolean;
}

const AuthorCard = ({ author, isCompact = false }: AuthorCardProps) => {
  if (isCompact) {
    return (
      <div className="flex items-center p-4 border rounded-lg border-blog-border bg-white">
        <Link to={`/author/${author.slug}`} className="mr-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
        </Link>
        <div>
          <h4 className="font-medium">
            <Link to={`/author/${author.slug}`} className="hover:text-blog-accent transition-colors">
              {author.name}
            </Link>
          </h4>
          <p className="text-sm text-blog-secondary line-clamp-1">{author.bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center p-6 border rounded-lg border-blog-border bg-white">
      <Link to={`/author/${author.slug}`}>
        <img
          src={author.avatar}
          alt={author.name}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
      </Link>
      <h3 className="text-xl font-semibold mb-2">
        <Link to={`/author/${author.slug}`} className="hover:text-blog-accent transition-colors">
          {author.name}
        </Link>
      </h3>
      <p className="text-blog-secondary mb-4 line-clamp-3">{author.bio}</p>
      
      {author.postCount !== undefined && (
        <span className="text-sm text-blog-secondary mb-4">
          {author.postCount} {author.postCount === 1 ? 'post' : 'posts'}
        </span>
      )}
      
      {author.social && (
        <div className="flex space-x-3">
          {author.social.twitter && (
            <a
              href={author.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blog-secondary hover:text-blog-accent transition-colors"
              aria-label={`${author.name}'s Twitter`}
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          )}
          {author.social.website && (
            <a
              href={author.social.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blog-secondary hover:text-blog-accent transition-colors"
              aria-label={`${author.name}'s Website`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthorCard;
