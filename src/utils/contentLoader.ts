
import siteContent from '../data/siteContent.json';

type ContentPath = string | string[];

export const getContent = (path: ContentPath): any => {
  let content = { ...siteContent };
  
  if (typeof path === 'string') {
    path = path.split('.');
  }
  
  try {
    for (const segment of path) {
      if (content[segment] === undefined) {
        console.warn(`Content not found at path: ${path.join('.')}`);
        return null;
      }
      content = content[segment];
    }
    return content;
  } catch (error) {
    console.error(`Error retrieving content at path: ${path.join('.')}`);
    return null;
  }
};

// Function to update content (for editor role in real app)
export const updateContent = (path: ContentPath, newValue: any): boolean => {
  try {
    // In a real app, this would update the JSON file or database
    // For now, just log that we would update it
    console.log(`Content would be updated at path: ${path}`, newValue);
    return true;
  } catch (error) {
    console.error(`Failed to update content at: ${path}`, error);
    return false;
  }
};
