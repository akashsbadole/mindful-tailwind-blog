
import React from 'react';
import Layout from '@/components/layout/Layout';
import AuthorCard from '@/components/blog/AuthorCard';
import { authors } from '@/data/mockData';

const AuthorsPage = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-blog-light">
        <div className="container-blog text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Authors</h1>
          <p className="text-blog-secondary max-w-2xl mx-auto">
            Meet the talented individuals who contribute their expertise and insights to our blog.
          </p>
        </div>
      </section>
      
      {/* Authors Grid */}
      <section className="py-16">
        <div className="container-blog">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <AuthorCard key={author.id} author={author} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthorsPage;
