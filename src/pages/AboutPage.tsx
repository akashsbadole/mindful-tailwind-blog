
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, Award, Check, Heart, Users } from 'lucide-react';

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
          
          {/* WordPress-like content area with sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content area */}
            <div className="lg:col-span-2">
              <Card className="p-0 overflow-hidden">
                <div className="h-64 bg-blog-accent/10">
                  <img 
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="MinimaBlog Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="pt-6">
                  <div className="prose max-w-none">
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
                    
                    <div className="my-12 p-6 bg-blog-light rounded-lg border border-blog-border">
                      <blockquote className="italic border-l-4 border-blog-accent pl-4 py-2">
                        "Simplicity is the ultimate sophistication. Good design is as little design as possible."
                        <footer className="text-blog-secondary mt-2">— Dieter Rams</footer>
                      </blockquote>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-10 mb-4">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">Clean, minimalist design focused on readability</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">Responsive layout that works on all devices</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">Optimized for speed and performance</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">Accessible design for all users</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">SEO-friendly structure</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="m-0">Easy customization options</p>
                      </div>
                    </div>
                    
                    <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
                    <p>
                      MinimaBlog is maintained by a small team of designers and developers who are passionate about web design, 
                      typography, and creating beautiful digital spaces. We're constantly working to improve the theme and add 
                      thoughtful features that enhance the blogging experience without compromising our core design principles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* WordPress-style sidebar */}
            <div className="lg:col-span-1">
              {/* About widget */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">About MinimaBlog</h3>
                  <p className="text-blog-secondary mb-4">
                    A clean, minimal WordPress theme designed for bloggers who appreciate simplicity and readability.
                  </p>
                  <div className="flex space-x-4">
                    <div className="flex items-center space-x-1 text-blog-secondary text-sm">
                      <Users className="h-4 w-4" />
                      <span>1,000+ users</span>
                    </div>
                    <div className="flex items-center space-x-1 text-blog-secondary text-sm">
                      <Award className="h-4 w-4" />
                      <span>4.8/5 rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact widget */}
              <Card className="mb-8">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                  <p className="text-blog-secondary mb-4">
                    Have questions or feedback about MinimaBlog? We'd love to hear from you!
                  </p>
                  <a href="mailto:hello@minimablog.com" className="blog-link">hello@minimablog.com</a>
                </CardContent>
              </Card>
              
              {/* Notice widget */}
              <Card className="mb-8 bg-blog-light border-0">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="h-5 w-5 text-blog-accent mt-1" />
                    <div>
                      <h3 className="text-lg font-medium mb-2">WordPress 6.5 Compatible</h3>
                      <p className="text-blog-secondary text-sm">
                        MinimaBlog has been tested with the latest version of WordPress and is fully compatible.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Support widget */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center flex-col text-center">
                    <Heart className="h-8 w-8 text-red-500 mb-3" />
                    <h3 className="text-lg font-medium mb-2">Support MinimaBlog</h3>
                    <p className="text-blog-secondary text-sm mb-4">
                      If you enjoy using MinimaBlog, consider supporting our development.
                    </p>
                    <a href="#" className="blog-btn w-full">Donate</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
