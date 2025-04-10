
import { toast } from "@/hooks/use-toast";
import prisma from "@/lib/prisma";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

// Function to store form data in SQLite database using Prisma
export const submitContactForm = async (formData: ContactFormData): Promise<boolean> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  try {
    // Store the submission in the database
    await prisma.contactSubmission.create({
      data: {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }
    });
    
    // Log the data that would be stored
    console.log('Form submission stored in database:', formData);
    
    // Simulate email notification
    console.log(`Email would be sent to admin with subject: "New contact form: ${formData.subject}"`);
    
    return true;
  } catch (error) {
    console.error("Error storing contact submission:", error);
    return false;
  }
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
