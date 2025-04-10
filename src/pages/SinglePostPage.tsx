
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import AuthorCard from '@/components/blog/AuthorCard';
import PostCard from '@/components/blog/PostCard';
import NewsletterForm from '@/components/blog/NewsletterForm';
import { getPostBySlug, getRelatedPosts } from '@/data/mockData';
import { Calendar, Clock, ArrowLeft, Share2, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SinglePostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const post = getPostBySlug(slug || '');
  
  if (!post) {
    // If post not found, redirect to blog page
    React.useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    
    return null;
  }
  
  const relatedPosts = getRelatedPosts(post.id, 3);
  
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleShareClick = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${post.title}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${post.title}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url)
          .then(() => {
            toast({
              title: "Link copied!",
              description: "The article link has been copied to your clipboard.",
            });
          })
          .catch(() => {
            toast({
              title: "Copy failed",
              description: "Couldn't copy the link. Please try again.",
              variant: "destructive",
            });
          });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <Layout>
      <article>
        {/* Header */}
        <header className="pt-8 pb-16 bg-blog-light">
          <div className="container-blog">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumbs */}
              <div className="flex items-center text-sm mb-6">
                <Link to="/" className="text-blog-secondary hover:text-blog-accent transition-colors">Home</Link>
                <span className="mx-2 text-blog-secondary">/</span>
                <Link to="/blog" className="text-blog-secondary hover:text-blog-accent transition-colors">Blog</Link>
                <span className="mx-2 text-blog-secondary">/</span>
                <Link 
                  to={`/category/${post.category.slug}`} 
                  className="text-blog-secondary hover:text-blog-accent transition-colors"
                >
                  {post.category.name}
                </Link>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
              
              {/* Meta */}
              <div className="flex flex-wrap items-center text-blog-secondary space-x-6 mb-8">
                <Link to={`/author/${post.author.slug}`} className="flex items-center space-x-2 group">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                  <span className="font-medium group-hover:text-blog-accent transition-colors">{post.author.name}</span>
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
              
              {/* Featured Image */}
              <div className="rounded-lg overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </header>
        
        {/* Content */}
        <section className="py-12">
          <div className="container-blog">
            <div className="max-w-3xl mx-auto">
              {/* Share buttons on the side for desktop */}
              <div className="hidden md:flex fixed left-4 top-1/3 flex-col space-y-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShareClick('facebook')}
                  aria-label="Share on Facebook"
                  className="rounded-full bg-white shadow-sm hover:bg-blog-accent hover:text-white transition-colors"
                >
                  <FacebookIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShareClick('twitter')}
                  aria-label="Share on Twitter"
                  className="rounded-full bg-white shadow-sm hover:bg-blog-accent hover:text-white transition-colors"
                >
                  <TwitterIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShareClick('linkedin')}
                  aria-label="Share on LinkedIn"
                  className="rounded-full bg-white shadow-sm hover:bg-blog-accent hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShareClick('copy')}
                  aria-label="Copy link"
                  className="rounded-full bg-white shadow-sm hover:bg-blog-accent hover:text-white transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              
              {/* Article content */}
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }}
              />
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-6 border-t border-blog-border">
                  <h2 className="text-lg font-semibold mb-4">Tags</h2>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                        className="blog-tag"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Share (Mobile) */}
              <div className="md:hidden mt-12 pt-6 border-t border-blog-border">
                <h2 className="text-lg font-semibold mb-4">Share this post</h2>
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShareClick('facebook')}
                    aria-label="Share on Facebook"
                    className="rounded-full bg-blog-light hover:bg-blog-accent hover:text-white transition-colors"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShareClick('twitter')}
                    aria-label="Share on Twitter"
                    className="rounded-full bg-blog-light hover:bg-blog-accent hover:text-white transition-colors"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShareClick('linkedin')}
                    aria-label="Share on LinkedIn"
                    className="rounded-full bg-blog-light hover:bg-blog-accent hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleShareClick('copy')}
                    aria-label="Copy link"
                    className="rounded-full bg-blog-light hover:bg-blog-accent hover:text-white transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              
              {/* Author */}
              <div className="mt-12 pt-6 border-t border-blog-border">
                <h2 className="sr-only">Post author</h2>
                <AuthorCard author={post.author} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Previous/Next Posts */}
        <div className="bg-blog-light py-6">
          <div className="container-blog">
            <div className="flex flex-col sm:flex-row justify-between">
              <Button
                variant="ghost"
                className="mb-4 sm:mb-0 justify-start hover:bg-white hover:text-blog-accent"
                onClick={() => navigate('/blog')}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all posts
              </Button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16">
            <div className="container-blog">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <section className="py-16 bg-blog-light">
          <div className="container-blog">
            <div className="max-w-xl mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default SinglePostPage;
