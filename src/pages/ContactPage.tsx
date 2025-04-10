
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Layout from '@/components/layout/Layout';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getContent } from '@/utils/contentLoader';
import { handleContactSubmission, ContactFormData } from '@/api/mockContactApi';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// Define the form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactPage = () => {
  const { toast } = useToast();
  const content = getContent('contact');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  // Initialize react-hook-form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Ensure we pass all required fields from the contact form data
      const contactData: ContactFormData = {
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      };
      
      const success = await handleContactSubmission(contactData);
      if (success) {
        form.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact Us - MinimaBlog</title>
        <meta name="description" content="Get in touch with the MinimaBlog team" />
      </Helmet>
      
      <div className="py-12 md:py-20 bg-white">
        <div className="container-blog">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">{content?.title || 'Contact Us'}</h1>
          
          <div className="mx-auto max-w-3xl">
            <div className="bg-blog-light p-8 rounded-lg mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Get In Touch</h3>
                  <p className="text-blog-secondary">
                    {content?.intro || 'Have questions? Drop us a message and we\'ll get back to you shortly.'}
                  </p>
                  <div className="space-y-2">
                    <p className="font-medium">Email</p>
                    <p className="text-blog-secondary">{content?.email || 'hello@minimablog.com'}</p>
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
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="blog-btn w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </Form>
              </div>
              
              <div className="border-t border-blog-border pt-8">
                <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {content?.faq ? (
                    content.faq.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium mb-2">{item.question}</h4>
                        <p className="text-blog-secondary">{item.answer}</p>
                      </div>
                    ))
                  ) : (
                    <>
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
                    </>
                  )}
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
