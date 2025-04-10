
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="py-32">
        <div className="container-blog">
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-9xl font-bold text-blog-accent mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
            <p className="text-blog-secondary mb-10">
              The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="blog-btn flex items-center" asChild>
                <Link to="/">
                  <Home className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
              <Button className="blog-btn-subtle flex items-center" asChild>
                <Link to="/blog">
                  <Search className="mr-2 h-4 w-4" />
                  Search Blog
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
