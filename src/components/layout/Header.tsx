
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="py-6 border-b border-blog-border bg-white">
      <div className="container-blog">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="h-8 w-8 bg-blog-accent rounded-md flex items-center justify-center text-white font-bold">W</div>
              <span className="text-xl font-bold">MinimaBlog</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link to="/" className="text-blog-primary hover:text-blog-accent transition-colors" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="text-blog-primary hover:text-blog-accent transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/categories" className="text-blog-primary hover:text-blog-accent transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/authors" className="text-blog-primary hover:text-blog-accent transition-colors">Authors</Link>
              </li>
              <li>
                <Link to="/about" className="text-blog-primary hover:text-blog-accent transition-colors">About</Link>
              </li>
            </ul>
          </nav>

          {/* Search & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Search" 
              className="text-blog-primary hover:text-blog-accent"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-blog-primary" 
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <Button className="hidden md:inline-flex blog-btn">Subscribe</Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link to="/" className="block py-2 text-blog-primary hover:text-blog-accent transition-colors" onClick={toggleMobileMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/blog" className="block py-2 text-blog-primary hover:text-blog-accent transition-colors" onClick={toggleMobileMenu}>Blog</Link>
                </li>
                <li>
                  <Link to="/categories" className="block py-2 text-blog-primary hover:text-blog-accent transition-colors" onClick={toggleMobileMenu}>Categories</Link>
                </li>
                <li>
                  <Link to="/authors" className="block py-2 text-blog-primary hover:text-blog-accent transition-colors" onClick={toggleMobileMenu}>Authors</Link>
                </li>
                <li>
                  <Link to="/about" className="block py-2 text-blog-primary hover:text-blog-accent transition-colors" onClick={toggleMobileMenu}>About</Link>
                </li>
                <li>
                  <Button className="w-full blog-btn">Subscribe</Button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
