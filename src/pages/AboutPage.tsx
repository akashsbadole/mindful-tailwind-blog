
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - MinimaBlog</title>
        <meta name="description" content="Learn more about MinimaBlog and our mission" />
      </Helmet>
      
      <div className="py-12 md:py-20 bg-white">
        <div className="container-blog">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">About MinimaBlog</h1>
          
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg mx-auto">
              <p className="lead text-xl text-blog-secondary mb-6">
                MinimaBlog is a simple, clean WordPress theme designed for bloggers who appreciate minimalism and readability.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Story</h2>
              <p>
                Founded in 2023, MinimaBlog was created with a singular mission: to provide bloggers with a clean, 
                distraction-free platform that puts content first. We believe that good design gets out of the way, 
                allowing your words and images to capture your reader's attention.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Philosophy</h2>
              <p>
                In today's world of cluttered websites and intrusive advertisements, we wanted to create something different. 
                MinimaBlog embodies our belief that simplicity leads to better reading experiences and stronger connections 
                between authors and their audiences.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Features</h2>
              <ul>
                <li>Clean, minimalist design focused on readability</li>
                <li>Responsive layout that works beautifully on all devices</li>
                <li>Optimized for speed and performance</li>
                <li>Accessible design for all users</li>
                <li>SEO-friendly structure</li>
                <li>Easy customization options</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
              <p>
                MinimaBlog is maintained by a small team of designers and developers who are passionate about web design, 
                typography, and creating beautiful digital spaces. We're constantly working to improve the theme and add 
                thoughtful features that enhance the blogging experience without compromising our core design principles.
              </p>
              
              <div className="mt-12 border-t border-blog-border pt-8">
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p>
                  Have questions or feedback about MinimaBlog? We'd love to hear from you! 
                  Reach out to us at <a href="mailto:hello@minimablog.com" className="blog-link">hello@minimablog.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
