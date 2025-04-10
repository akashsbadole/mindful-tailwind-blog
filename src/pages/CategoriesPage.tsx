
import React from 'react';
import Layout from '@/components/layout/Layout';
import CategoryCard from '@/components/blog/CategoryCard';
import { categories } from '@/data/mockData';

const CategoriesPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-blog-light">
        <div className="container-blog text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Categories</h1>
          <p className="text-blog-secondary max-w-2xl mx-auto">
            Browse all the categories to find content that interests you.
            Our articles are organized by topic to help you easily find what you're looking for.
          </p>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16">
        <div className="container-blog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CategoriesPage;
