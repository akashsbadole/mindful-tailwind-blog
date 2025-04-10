
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import FeaturedPost from '@/components/blog/FeaturedPost';
import PostCard from '@/components/blog/PostCard';
import CategoryCard from '@/components/blog/CategoryCard';
import NewsletterForm from '@/components/blog/NewsletterForm';
import { getFeaturedPosts, getRecentPosts, getPopularCategories } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const featuredPost = getFeaturedPosts(1)[0];
  const recentPosts = getRecentPosts(6); // Get 6 recent posts
  const popularCategories = getPopularCategories(4); // Get 4 popular categories

  return (
    <Layout>
      {/* Featured Post Hero Section */}
      <FeaturedPost post={featuredPost} />

      {/* Recent Posts Section */}
      <section className="py-16">
        <div className="container-blog">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Recent Posts</h2>
            <Link to="/blog" className="blog-link inline-flex items-center">
              View all posts
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.slice(0, 3).map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-10">
            {/* Featured Post Row */}
            <div className="mb-12">
              <PostCard post={recentPosts[3]} featured />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {recentPosts.slice(4, 6).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-blog-light">
        <div className="container-blog">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold">Browse by Category</h2>
            <Link to="/categories" className="blog-link inline-flex items-center">
              All categories
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Stay Updated</h2>
            <p className="text-blog-secondary mb-8">
              Join our newsletter to get the latest posts delivered straight to your inbox.
              We promise not to spam you.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blog-accent text-white">
        <div className="container-blog">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to start your own blog?</h2>
            <p className="mb-8">
              MinimaBlog WordPress theme provides everything you need to create a beautiful, 
              professional-looking blog that follows accessibility best practices.
            </p>
            <Button size="lg" className="bg-white text-blog-accent hover:bg-white/90">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
