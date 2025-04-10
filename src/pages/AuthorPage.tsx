
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { getAuthorBySlug, getPostsByAuthor } from '@/data/mockData';
import { Facebook, Twitter, Globe, MapPin, Calendar } from 'lucide-react';

const AuthorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 6;
  
  const author = getAuthorBySlug(slug || '');
  
  if (!author) {
    // If author not found, redirect to homepage
    React.useEffect(() => {
      navigate('/', { replace: true });
    }, [navigate]);
    
    return null;
  }
  
  const authorPosts = getPostsByAuthor(author.slug);
  
  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = authorPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(authorPosts.length / postsPerPage);

  return (
    <Layout>
      {/* Author Header */}
      <section className="py-16 bg-blog-light">
        <div className="container-blog">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">
              {/* Author Image */}
              <div className="flex-shrink-0">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              
              {/* Author Info */}
              <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{author.name}</h1>
                
                <p className="text-blog-secondary mb-4 max-w-2xl">
                  {author.bio}
                </p>
                
                {/* Author Meta */}
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-blog-secondary">
                  {/* Example meta - would come from real data */}
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Joined January 2023</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
                
                {/* Social Links */}
                {author.social && (
                  <div className="flex justify-center md:justify-start mt-6 space-x-4">
                    {author.social.twitter && (
                      <a
                        href={author.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blog-secondary hover:text-blog-accent transition-colors"
                        aria-label={`${author.name}'s Twitter`}
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {/* Placeholder for Facebook - not in our mock data */}
                    <a
                      href="#"
                      className="text-blog-secondary hover:text-blog-accent transition-colors"
                      aria-label={`${author.name}'s Facebook`}
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    {author.social.website && (
                      <a
                        href={author.social.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blog-secondary hover:text-blog-accent transition-colors"
                        aria-label={`${author.name}'s Website`}
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Author Posts */}
      <section className="py-16">
        <div className="container-blog">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Posts by {author.name}
            <span className="text-blog-secondary text-xl font-normal ml-2">
              ({authorPosts.length})
            </span>
          </h2>
          
          {authorPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-blog-secondary">
                {author.name} has not published any posts yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AuthorPage;
