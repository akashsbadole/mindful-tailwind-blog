
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blog-light pt-16 pb-8">
      <div className="container-blog">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 bg-blog-accent rounded-md flex items-center justify-center text-white font-bold">W</div>
              <span className="text-xl font-bold">MinimaBlog</span>
            </Link>
            <p className="text-blog-secondary">Minimalist blog theme for WordPress with a clean design and focus on readability.</p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" aria-label="Twitter" className="text-blog-secondary hover:text-blog-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" aria-label="Facebook" className="text-blog-secondary hover:text-blog-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-blog-secondary hover:text-blog-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-blog-secondary hover:text-blog-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-blog-secondary hover:text-blog-accent transition-colors">All Posts</Link></li>
              <li><Link to="/categories" className="text-blog-secondary hover:text-blog-accent transition-colors">Categories</Link></li>
              <li><Link to="/authors" className="text-blog-secondary hover:text-blog-accent transition-colors">Authors</Link></li>
              <li><Link to="/about" className="text-blog-secondary hover:text-blog-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-blog-secondary hover:text-blog-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-medium text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/design" className="text-blog-secondary hover:text-blog-accent transition-colors">Design</Link></li>
              <li><Link to="/category/technology" className="text-blog-secondary hover:text-blog-accent transition-colors">Technology</Link></li>
              <li><Link to="/category/business" className="text-blog-secondary hover:text-blog-accent transition-colors">Business</Link></li>
              <li><Link to="/category/photography" className="text-blog-secondary hover:text-blog-accent transition-colors">Photography</Link></li>
              <li><Link to="/category/lifestyle" className="text-blog-secondary hover:text-blog-accent transition-colors">Lifestyle</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-lg mb-4">Subscribe to Newsletter</h3>
            <p className="text-blog-secondary mb-4">Get the latest posts delivered straight to your inbox.</p>
            <form className="space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address"
                  className="rounded-l-md rounded-r-none border-r-0"
                  aria-label="Email address"
                />
                <Button type="submit" className="rounded-l-none rounded-r-md bg-blog-accent">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-blog-secondary">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-blog-border text-center sm:text-left flex flex-col sm:flex-row justify-between items-center text-sm">
          <p className="text-blog-secondary">© {currentYear} MinimaBlog Theme. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link to="/privacy" className="text-blog-secondary hover:text-blog-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-blog-secondary hover:text-blog-accent transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
