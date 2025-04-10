
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
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
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-blog-light p-6 rounded-lg text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blog-accent/10">
                  <Mail className="h-6 w-6 text-blog-accent" />
                </div>
                <h3 className="font-medium text-lg mb-2">Email Us</h3>
                <p className="text-blog-secondary mb-2">Our friendly team is here to help.</p>
                <a href="mailto:hello@minimablog.com" className="blog-link">hello@minimablog.com</a>
              </div>
              
              <div className="bg-blog-light p-6 rounded-lg text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blog-accent/10">
                  <MapPin className="h-6 w-6 text-blog-accent" />
                </div>
                <h3 className="font-medium text-lg mb-2">Office</h3>
                <p className="text-blog-secondary mb-2">Come say hello at our office.</p>
                <p className="text-blog-primary">123 Sample St, San Francisco, CA 94105</p>
              </div>
              
              <div className="bg-blog-light p-6 rounded-lg text-center">
                <div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-blog-accent/10">
                  <Phone className="h-6 w-6 text-blog-accent" />
                </div>
                <h3 className="font-medium text-lg mb-2">Phone</h3>
                <p className="text-blog-secondary mb-2">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+15555555555" className="blog-link">+1 (555) 555-5555</a>
              </div>
            </div>
            
            <div className="bg-white border border-blog-border rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-blog-primary">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      aria-describedby="name-required"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-blog-primary">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      aria-describedby="email-required"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-blog-primary">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-blog-primary">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="blog-btn px-8 py-2.5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
