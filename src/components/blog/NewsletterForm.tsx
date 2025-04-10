
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API request
    setTimeout(() => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-blog-light p-8 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
      <p className="text-blog-secondary mb-4">
        Get the latest posts delivered directly to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full"
            aria-label="Email address"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            className="w-full bg-blog-accent hover:bg-blog-accent/90" 
            disabled={isLoading}
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </div>
        <p className="text-xs text-blog-secondary">
          By subscribing, you agree to our privacy policy. No spam, unsubscribe any time.
        </p>
      </form>
    </div>
  );
};

export default NewsletterForm;
