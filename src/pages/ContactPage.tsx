
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - MinimaBlog</title>
        <meta name="description" content="Get in touch with the MinimaBlog team" />
      </Helmet>
      
      <div className="py-12 md:py-20 bg-white">
        <div className="container-blog">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Contact Us</h1>
          
          <div className="mx-auto max-w-3xl">
            <div className="bg-blog-light p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Get In Touch</h3>
                  <p className="text-blog-secondary">
                    Have questions about MinimaBlog? Want to collaborate? 
                    Drop us a message and we'll get back to you shortly.
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Email</p>
                    <p className="text-blog-secondary">hello@minimablog.com</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Social Media</p>
                    <div className="flex space-x-4">
                      <a href="#" className="text-blog-secondary hover:text-blog-accent">Twitter</a>
                      <a href="#" className="text-blog-secondary hover:text-blog-accent">Instagram</a>
                      <a href="#" className="text-blog-secondary hover:text-blog-accent">Facebook</a>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Your Name
                    </label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="John Doe" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Your Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      type="text" 
                      placeholder="How can we help?" 
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message here..." 
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="blog-btn w-full">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="border-t border-blog-border pt-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-2">Is MinimaBlog free to use?</h4>
                    <p className="text-blog-secondary">
                      Yes, MinimaBlog is completely free to use for personal blogs. For commercial use, 
                      please check our licensing terms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Do I need to credit MinimaBlog on my site?</h4>
                    <p className="text-blog-secondary">
                      While not required, we appreciate if you keep the footer credit link. It helps us 
                      grow and continue improving the theme.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Can I customize MinimaBlog?</h4>
                    <p className="text-blog-secondary">
                      Absolutely! MinimaBlog is highly customizable using WordPress customizer and 
                      additional CSS if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
