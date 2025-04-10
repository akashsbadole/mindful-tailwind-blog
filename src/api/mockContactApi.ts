
// This is a mock API handler
// In a real app, this would be replaced by a server endpoint that connects to a database

import { toast } from "@/hooks/use-toast";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Mock function to simulate API call to store data
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Log the data that would be stored in the database
  console.log('Form submission that would be stored in database:', formData);
  
  // Simulate email notification
  console.log(`Email would be sent to admin with subject: "New contact form: ${formData.subject}"`);
  
  // In a real app with Supabase integration, we would:
  // 1. Insert the data into a Supabase table
  // 2. Trigger a Supabase Edge Function to send an email notification
  
  // Return success (in a real app, we'd check the actual database response)
  return true;
};

// Function to use in the contact form component
export const handleContactSubmission = async (formData: ContactFormData) => {
  try {
    const success = await submitContactForm(formData);
    
    if (success) {
      toast({
        title: "Message received!",
        description: "Thanks for reaching out. We'll get back to you soon.",
      });
      return true;
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    toast({
      title: "Something went wrong",
      description: "Unable to submit your message. Please try again later.",
      variant: "destructive",
    });
    return false;
  }
};
