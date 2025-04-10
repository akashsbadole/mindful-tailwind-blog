
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { posts } from '@/data/mockData';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Filter posts based on search term
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-blog-light">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-blog-secondary mb-8">
              Discover the latest articles, tutorials, and insights on design, technology, business, and more.
            </p>
            
            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-md mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full"
                  aria-label="Search posts"
                />
                <Button 
                  type="submit" 
                  variant="ghost" 
                  size="icon" 
                  className="absolute left-0 top-0 h-full px-3"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4 text-blog-secondary" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-blog">
          {filteredPosts.length > 0 ? (
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
              <h2 className="text-2xl font-semibold mb-2">No posts found</h2>
              <p className="text-blog-secondary mb-6">
                We couldn't find any posts matching your search criteria.
              </p>
              <Button onClick={() => setSearchTerm('')} className="blog-btn">
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
