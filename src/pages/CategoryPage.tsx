
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import PostCard from '@/components/blog/PostCard';
import Pagination from '@/components/blog/Pagination';
import { getCategoryBySlug, getPostsByCategory } from '@/data/mockData';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = React.useState(1);
  const postsPerPage = 9;
  
  const category = getCategoryBySlug(slug || '');
  
  if (!category) {
    // If category not found, redirect to blog page
    React.useEffect(() => {
      navigate('/blog', { replace: true });
    }, [navigate]);
    
    return null;
  }
  
  const categoryPosts = getPostsByCategory(category.slug);
  
  // Paginate posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = categoryPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(categoryPosts.length / postsPerPage);

  return (
    <Layout>
      {/* Category Header */}
      <section className="relative">
        <AspectRatio ratio={5/1} className="min-h-[200px] bg-blog-light">
          {category.featuredImage && (
            <img
              src={category.featuredImage}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex items-center">
            <div className="container-blog text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-white/90 max-w-2xl mx-auto">
                  {category.description}
                </p>
              )}
            </div>
          </div>
        </AspectRatio>
      </section>
      
      {/* Category Posts */}
      <section className="py-16">
        <div className="container-blog">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-medium">
              {categoryPosts.length} {categoryPosts.length === 1 ? 'Post' : 'Posts'} in {category.name}
            </h2>
          </div>
          
          {categoryPosts.length > 0 ? (
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
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CategoryPage;
