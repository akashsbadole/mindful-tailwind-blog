
// This file provides mock data for our theme
// In a real WordPress site, this would come from the WordPress REST API

// Helper function to generate a slug from a string
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

// Mock categories
export const categories = [
  {
    id: '1',
    name: 'Design',
    slug: 'design',
    description: 'Articles about design principles, UI/UX, and design systems.',
    postCount: 8,
    featuredImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
  },
  {
    id: '2',
    name: 'Technology',
    slug: 'technology',
    description: 'The latest in tech, programming, and development.',
    postCount: 12,
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '3',
    name: 'Business',
    slug: 'business',
    description: 'Strategies, insights and tips for businesses of all sizes.',
    postCount: 6,
    featuredImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
  },
  {
    id: '4',
    name: 'Photography',
    slug: 'photography',
    description: 'Photography tips, techniques, gear reviews and inspiration.',
    postCount: 9,
    featuredImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
  },
  {
    id: '5',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Articles about living well, health, wellness, and personal growth.',
    postCount: 7,
    featuredImage: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659',
  },
];

// Mock authors
export const authors = [
  {
    id: '1',
    name: 'Alex Johnson',
    slug: 'alex-johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    bio: 'Alex is a design enthusiast with over 10 years of experience in UI/UX design and product development.',
    postCount: 8,
    social: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: '2',
    name: 'Sophia Williams',
    slug: 'sophia-williams',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    bio: 'Sophia is a tech journalist covering the latest trends in software development and technology.',
    postCount: 12,
    social: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: '3',
    name: 'Michael Chen',
    slug: 'michael-chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    bio: 'Michael is a business strategist and consultant helping startups scale efficiently.',
    postCount: 6,
    social: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    slug: 'emily-rodriguez',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    bio: 'Emily is an award-winning photographer specializing in portrait and lifestyle photography.',
    postCount: 9,
    social: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
  {
    id: '5',
    name: 'David Kim',
    slug: 'david-kim',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    bio: 'David writes about lifestyle, wellness, and personal development.',
    postCount: 7,
    social: {
      twitter: 'https://twitter.com',
      website: 'https://example.com',
    },
  },
];

// Mock posts
export const posts = [
  {
    id: '1',
    title: 'The Future of Interface Design: Trends to Watch in 2025',
    slug: 'future-of-interface-design',
    excerpt: 'Explore the emerging trends in UI/UX design that will shape digital experiences in the coming years, from voice interfaces to immersive 3D environments.',
    content: `
      <p>The landscape of user interface design is constantly evolving, driven by technological advancements and changing user expectations. As we look ahead to 2025, several key trends are emerging that will likely define the next generation of digital experiences.</p>
      
      <h2>1. Voice and Conversational Interfaces</h2>
      <p>Voice interfaces continue to mature, becoming more contextually aware and capable of handling complex interactions. The challenge for designers lies in creating intuitive voice experiences that seamlessly integrate with visual elements when necessary.</p>
      
      <h2>2. Spatial Computing</h2>
      <p>With AR and VR technologies becoming more mainstream, interfaces are expanding beyond the flat screen into three-dimensional spaces. This shift requires a fundamental rethinking of interaction patterns and spatial awareness in design.</p>
      
      <h2>3. Adaptive Interfaces</h2>
      <p>Machine learning is enabling interfaces that adapt to individual users' behaviors and preferences. These systems observe how users interact with an application and dynamically modify layouts, content, and functionality to better serve each person's unique needs.</p>
      
      <h2>4. Ethical and Inclusive Design</h2>
      <p>As digital products become more integrated into our daily lives, there's growing emphasis on designing interfaces that are accessible to everyone and respect user privacy and wellbeing. This includes considerations for diverse abilities, cultural contexts, and digital wellness.</p>
      
      <h2>5. Micro-interactions and Animation</h2>
      <p>Subtle animations and micro-interactions continue to play a crucial role in providing feedback and delight to users. However, the trend is moving toward more meaningful, contextual animations that serve a purpose beyond decoration.</p>
      
      <p>Designers who stay ahead of these trends will be well-positioned to create interfaces that feel both innovative and intuitive. The key will be balancing technological possibilities with genuine user needs to create experiences that are not just cutting-edge, but truly beneficial and accessible to all users.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc',
    category: {
      id: '1',
      name: 'Design',
      slug: 'design',
    },
    author: authors[0],
    publishedAt: '2023-03-15T09:00:00.000Z',
    readTime: '8',
    tags: ['UI/UX', 'Design Trends', 'Technology'],
    relatedPosts: ['2', '5', '8'],
  },
  {
    id: '2',
    title: 'How to Build an Accessible Website: A Comprehensive Guide',
    slug: 'build-accessible-website-guide',
    excerpt: 'Learn the essential principles and practical techniques for creating websites that are accessible to all users, including those with disabilities.',
    content: `
      <p>Web accessibility is not just a legal requirement in many countries—it's a fundamental aspect of good design that ensures everyone can use your website, regardless of their abilities or disabilities. This guide will walk you through the key considerations for building truly accessible web experiences.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Accessibility means designing your website so that people with disabilities can perceive, understand, navigate, and interact with it effectively. This includes accommodating visual, auditory, physical, speech, cognitive, and neurological disabilities.</p>
      
      <h2>Key Principles of Web Accessibility</h2>
      <ol>
        <li><strong>Perceivable</strong>: Information must be presentable to users in ways they can perceive. This means providing text alternatives for non-text content and creating content that can be presented in different ways.</li>
        <li><strong>Operable</strong>: User interface components and navigation must be operable. This means making all functionality available from a keyboard and giving users enough time to read and use content.</li>
        <li><strong>Understandable</strong>: Information and the operation of the user interface must be understandable. This means making text readable and predictable, and helping users avoid and correct mistakes.</li>
        <li><strong>Robust</strong>: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
      </ol>
      
      <h2>Practical Implementation Tips</h2>
      <p>Here are some concrete steps you can take to improve your website's accessibility:</p>
      
      <h3>Semantic HTML</h3>
      <p>Use HTML elements according to their intended purpose. For example, use heading elements (&lt;h1&gt; through &lt;h6&gt;) to create a clear document structure, and use &lt;button&gt; elements for interactive controls rather than styled &lt;div&gt; elements.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Ensure all functionality is accessible via keyboard alone. Test your website by navigating without a mouse, using Tab, Shift+Tab, Enter, and Arrow keys.</p>
      
      <h3>Alt Text for Images</h3>
      <p>Provide descriptive alt text for images that convey information. For decorative images, use empty alt attributes (alt="") so screen readers will skip them.</p>
      
      <h3>Color and Contrast</h3>
      <p>Ensure there is sufficient color contrast between text and its background. Don't rely on color alone to convey information—use additional indicators like text labels or patterns.</p>
      
      <h3>Form Labels and Instructions</h3>
      <p>Label all form controls clearly, and provide instructions for complex inputs. Ensure error messages are clear and helpful.</p>
      
      <p>Building accessible websites is an ongoing process that requires attention at every stage of design and development. By following these guidelines and regularly testing with various assistive technologies, you'll create experiences that work better for everyone—not just users with disabilities.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
    category: {
      id: '1',
      name: 'Design',
      slug: 'design',
    },
    author: authors[1],
    publishedAt: '2023-04-02T10:30:00.000Z',
    readTime: '12',
    tags: ['Accessibility', 'Web Development', 'Inclusive Design'],
    relatedPosts: ['1', '7', '9'],
  },
  {
    id: '3',
    title: 'The Rise of No-Code Development Platforms',
    slug: 'rise-of-no-code-development',
    excerpt: 'Discover how no-code platforms are democratizing software development and enabling non-technical users to build powerful applications.',
    content: `
      <p>No-code development platforms are transforming how software gets built by empowering people without traditional programming skills to create applications through visual interfaces and pre-built components. This shift represents one of the most significant democratizations of technology creation in recent years.</p>
      
      <h2>What Are No-Code Platforms?</h2>
      <p>No-code platforms provide visual development environments where users can drag and drop components, configure workflows, and define business logic without writing traditional code. These platforms abstract away the underlying technical complexity, allowing users to focus on solving business problems rather than wrestling with syntax and programming concepts.</p>
      
      <h2>The Growing Ecosystem</h2>
      <p>The no-code landscape has expanded dramatically in recent years, with platforms specializing in different types of applications:</p>
      <ul>
        <li>Web and mobile app builders (Bubble, Adalo, Glide)</li>
        <li>Automation tools (Zapier, Make, Airtable)</li>
        <li>Website builders (Webflow, Editor X, Framer)</li>
        <li>Internal tool builders (Retool, Appsmith)</li>
        <li>Database and backend solutions (Xano, Supabase)</li>
      </ul>
      
      <h2>Benefits for Organizations</h2>
      <p>Organizations are embracing no-code development for several compelling reasons:</p>
      
      <h3>Reduced Development Time</h3>
      <p>No-code platforms can dramatically accelerate development cycles, reducing time-to-market from months to weeks or even days for certain applications.</p>
      
      <h3>Lower Costs</h3>
      <p>By enabling non-technical staff to build applications, organizations can reduce their reliance on expensive development resources and external consultants.</p>
      
      <h3>Agility and Experimentation</h3>
      <p>No-code enables rapid prototyping and iteration, allowing organizations to quickly test new ideas and respond to changing market conditions.</p>
      
      <h2>Limitations and Challenges</h2>
      <p>While powerful, no-code platforms do have limitations:</p>
      <ul>
        <li>Customization constraints for highly specialized requirements</li>
        <li>Potential performance issues with very complex applications</li>
        <li>Vendor lock-in concerns</li>
        <li>Integration challenges with legacy systems</li>
      </ul>
      
      <h2>The Future of No-Code</h2>
      <p>As no-code platforms continue to mature, we're likely to see:</p>
      <ul>
        <li>Greater enterprise adoption and integration with existing development practices</li>
        <li>More sophisticated capabilities bridging the gap with traditional development</li>
        <li>Emergence of "hybrid" approaches combining no-code with custom code extensions</li>
      </ul>
      
      <p>Far from replacing professional developers, no-code platforms are creating a complementary ecosystem that allows different types of builders to create software. This democratization has the potential to address the global shortage of development talent while enabling a new wave of innovation from previously non-technical creators.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1610986602538-431d65df4385',
    category: {
      id: '2',
      name: 'Technology',
      slug: 'technology',
    },
    author: authors[1],
    publishedAt: '2023-05-10T11:15:00.000Z',
    readTime: '10',
    tags: ['No-Code', 'Software Development', 'Digital Transformation'],
    relatedPosts: ['8', '10', '12'],
  },
  {
    id: '4',
    title: 'Sustainable Business Practices That Actually Work',
    slug: 'sustainable-business-practices',
    excerpt: 'Explore practical sustainability strategies that benefit both the environment and your bottom line, backed by real-world success stories.',
    content: `
      <p>Sustainability in business is no longer just a marketing strategy or a corporate social responsibility checkbox—it's becoming a core business imperative. Forward-thinking companies are discovering that environmentally responsible practices often lead to increased efficiency, reduced costs, and stronger customer loyalty.</p>
      
      <h2>The Business Case for Sustainability</h2>
      <p>Sustainable practices aren't just good for the planet—they're often good for profitability too. Here's why:</p>
      <ul>
        <li>Reduced operational costs through energy and resource efficiency</li>
        <li>Improved brand reputation and customer loyalty</li>
        <li>Increased employee engagement and talent attraction</li>
        <li>Risk mitigation against future resource scarcity and regulatory changes</li>
        <li>Access to new markets and customer segments</li>
      </ul>
      
      <h2>Practical Strategies That Deliver Results</h2>
      
      <h3>1. Energy Efficiency Upgrades</h3>
      <p>Simple changes like LED lighting, smart thermostats, and energy-efficient equipment can significantly reduce energy consumption. For example, Walmart saved over $200 million in energy costs after implementing LED lighting across its stores.</p>
      
      <h3>2. Waste Reduction and Circular Systems</h3>
      <p>Companies are finding innovative ways to reduce waste and create circular systems where one process's output becomes another's input. Patagonia's Worn Wear program repairs and resells used clothing, creating a new revenue stream while reducing environmental impact.</p>
      
      <h3>3. Sustainable Supply Chain Management</h3>
      <p>By working with suppliers on sustainability initiatives, companies can reduce their overall environmental footprint and often discover cost efficiencies. Unilever's Sustainable Living Plan has helped them achieve zero waste to landfill across their global factory network while saving millions in operational costs.</p>
      
      <h3>4. Remote and Flexible Work Policies</h3>
      <p>Allowing employees to work remotely reduces commuting emissions and office space requirements. Many companies have found that flexible work arrangements also increase productivity and employee satisfaction.</p>
      
      <h3>5. Water Conservation</h3>
      <p>Water-saving technologies and processes can dramatically reduce consumption, especially in manufacturing settings. Coca-Cola has improved its water efficiency by 31% since 2004, saving billions of liters annually.</p>
      
      <h2>Implementation Framework</h2>
      <p>To successfully implement sustainable practices in your business:</p>
      <ol>
        <li>Start with an environmental audit to identify your biggest impact areas</li>
        <li>Set specific, measurable sustainability goals with clear timelines</li>
        <li>Engage employees at all levels of the organization</li>
        <li>Track and report on progress transparently</li>
        <li>Celebrate wins and continuously improve your sustainability initiatives</li>
      </ol>
      
      <p>The most successful sustainability initiatives aren't siloed green projects—they're integrated into core business strategy and operations. By approaching sustainability as a business opportunity rather than just a compliance requirement, companies can create lasting environmental benefits while strengthening their competitive position.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8',
    category: {
      id: '3',
      name: 'Business',
      slug: 'business',
    },
    author: authors[2],
    publishedAt: '2023-06-20T14:00:00.000Z',
    readTime: '11',
    tags: ['Sustainability', 'Business Strategy', 'Corporate Responsibility'],
    relatedPosts: ['6', '11', '14'],
  },
  {
    id: '5',
    title: 'Mastering Portrait Photography: Lighting Techniques for Every Situation',
    slug: 'portrait-photography-lighting-techniques',
    excerpt: 'Learn essential lighting setups and techniques to capture stunning portrait photographs in any environment, from studio to natural light.',
    content: `
      <p>Lighting is arguably the most critical element in portrait photography. The way light interacts with your subject can dramatically alter mood, dimension, and overall impact of your images. This guide explores versatile lighting techniques that work across different environments and create compelling portraits.</p>
      
      <h2>Understanding Light Qualities</h2>
      <p>Before diving into specific setups, it's important to understand the basic qualities of light:</p>
      <ul>
        <li><strong>Hard light</strong>: Creates strong shadows and high contrast, revealing texture and adding drama</li>
        <li><strong>Soft light</strong>: Produces gentle shadows and lower contrast, flattering for most subjects</li>
        <li><strong>Direction</strong>: Where light comes from relative to your subject shapes facial features differently</li>
        <li><strong>Color temperature</strong>: Affects the mood and emotional tone of your portrait</li>
      </ul>
      
      <h2>Natural Light Techniques</h2>
      
      <h3>Window Light</h3>
      <p>Window light is one of the most beautiful and accessible natural light sources. Position your subject at a 45-degree angle to a large window for directional light that creates gentle shadows and dimension. For softer light, use a window with sheer curtains or on the shadow side of a building.</p>
      
      <h3>Golden Hour</h3>
      <p>The hour after sunrise or before sunset provides warm, directional light that's flattering for portraits. Position your subject so the light comes from behind (backlight) for a glowing effect, or from the side (side light) to create dimension.</p>
      
      <h3>Open Shade</h3>
      <p>On bright, sunny days, find open shade under a tree or alongside a building. This creates soft, even light that's flattering to all skin tones and minimizes your subject squinting.</p>
      
      <h2>Studio Lighting Setups</h2>
      
      <h3>Loop Lighting</h3>
      <p>Position your main light slightly above and to the side of your subject's face, creating a small shadow from the nose that extends downward at an angle. This versatile lighting pattern works for most face shapes.</p>
      
      <h3>Rembrandt Lighting</h3>
      <p>Named after the painter's distinctive style, this creates a triangle of light on the cheek opposite your light source. Position your light higher and more to the side than with loop lighting, creating dramatic shadows that define facial structure.</p>
      
      <h3>Butterfly (Paramount) Lighting</h3>
      <p>Position your light directly in front of and above your subject, creating a butterfly-shaped shadow under the nose. This glamour lighting style emphasizes cheekbones and is particularly flattering for angular faces.</p>
      
      <h2>Working with Modifiers</h2>
      <p>Light modifiers allow you to shape and control light for desired effects:</p>
      <ul>
        <li><strong>Reflectors</strong>: Bounce light back into shadow areas to reduce contrast</li>
        <li><strong>Diffusers</strong>: Soften direct light by spreading it across a larger area</li>
        <li><strong>Flags</strong>: Block light from specific areas to create intentional shadows</li>
        <li><strong>Grids</strong>: Control light spread and prevent spillage onto backgrounds</li>
      </ul>
      
      <h2>Mixed Lighting Scenarios</h2>
      <p>Some of the most interesting portraits combine different light sources. For example, using a warm continuous light as a key light with cooler window light as fill creates dimension and mood. When mixing light sources, pay attention to white balance and use color temperature to creative advantage.</p>
      
      <p>The key to mastering portrait lighting is practice and observation. Study how light falls on faces in different scenarios, and don't be afraid to experiment with unconventional approaches. Remember that "perfect" lighting is whatever serves your creative vision and flatters your specific subject.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    category: {
      id: '4',
      name: 'Photography',
      slug: 'photography',
    },
    author: authors[3],
    publishedAt: '2023-07-05T16:45:00.000Z',
    readTime: '9',
    tags: ['Photography', 'Portrait', 'Lighting', 'Creative'],
    relatedPosts: ['9', '13', '15'],
  },
  {
    id: '6',
    title: 'Mindful Productivity: Getting More Done with Less Stress',
    slug: 'mindful-productivity',
    excerpt: 'Discover how integrating mindfulness principles into your workflow can help you achieve better results while maintaining your wellbeing.',
    featuredImage: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773',
    category: {
      id: '5',
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
    author: authors[4],
    publishedAt: '2023-07-22T08:30:00.000Z',
    readTime: '7',
    tags: ['Productivity', 'Mindfulness', 'Wellbeing'],
    relatedPosts: ['4', '10', '14'],
  },
  {
    id: '7',
    title: 'Color Theory in Digital Design: A Practical Guide',
    slug: 'color-theory-digital-design',
    excerpt: 'Learn how to use color effectively in your digital designs, including psychological impacts, accessibility considerations, and practical applications.',
    featuredImage: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3',
    category: {
      id: '1',
      name: 'Design',
      slug: 'design',
    },
    author: authors[0],
    publishedAt: '2023-08-10T13:20:00.000Z',
    readTime: '10',
    tags: ['Design', 'Color Theory', 'UI/UX'],
    relatedPosts: ['1', '2', '9'],
  },
  {
    id: '8',
    title: 'The State of Artificial Intelligence in 2023',
    slug: 'state-of-ai-2023',
    excerpt: 'An overview of the latest developments in AI technology, from generative models to practical business applications and ethical considerations.',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    category: {
      id: '2',
      name: 'Technology',
      slug: 'technology',
    },
    author: authors[1],
    publishedAt: '2023-08-28T09:15:00.000Z',
    readTime: '14',
    tags: ['AI', 'Machine Learning', 'Technology Trends'],
    relatedPosts: ['3', '10', '12'],
  },
  {
    id: '9',
    title: 'Mobile Photography Tips for Stunning Smartphone Images',
    slug: 'mobile-photography-tips',
    excerpt: 'Transform your smartphone photography with professional techniques for composition, lighting, editing, and creative expression.',
    featuredImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: {
      id: '4',
      name: 'Photography',
      slug: 'photography',
    },
    author: authors[3],
    publishedAt: '2023-09-14T15:45:00.000Z',
    readTime: '8',
    tags: ['Photography', 'Mobile', 'Creative'],
    relatedPosts: ['2', '5', '7'],
  },
  {
    id: '10',
    title: 'Remote Work Culture: Building Connection in Distributed Teams',
    slug: 'remote-work-culture',
    excerpt: 'Strategies for fostering strong team culture, effective communication, and employee engagement in remote and hybrid work environments.',
    featuredImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
    category: {
      id: '3',
      name: 'Business',
      slug: 'business',
    },
    author: authors[2],
    publishedAt: '2023-10-03T10:30:00.000Z',
    readTime: '9',
    tags: ['Remote Work', 'Company Culture', 'Management'],
    relatedPosts: ['3', '6', '8'],
  },
  {
    id: '11',
    title: 'Sustainable Fashion: Beyond the Marketing Hype',
    slug: 'sustainable-fashion',
    excerpt: 'A critical look at what makes fashion truly sustainable, how to identify greenwashing, and practical steps for more ethical wardrobe choices.',
    featuredImage: 'https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f',
    category: {
      id: '5',
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
    author: authors[4],
    publishedAt: '2023-10-25T14:10:00.000Z',
    readTime: '11',
    tags: ['Fashion', 'Sustainability', 'Ethical Consumption'],
    relatedPosts: ['4', '6', '15'],
  },
  {
    id: '12',
    title: 'Blockchain Beyond Cryptocurrency: Practical Applications',
    slug: 'blockchain-practical-applications',
    excerpt: 'Explore how blockchain technology is being implemented across industries like supply chain, healthcare, and creative rights management.',
    featuredImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a',
    category: {
      id: '2',
      name: 'Technology',
      slug: 'technology',
    },
    author: authors[1],
    publishedAt: '2023-11-12T11:20:00.000Z',
    readTime: '12',
    tags: ['Blockchain', 'Technology', 'Innovation'],
    relatedPosts: ['3', '8', '10'],
  },
  {
    id: '13',
    title: 'Architectural Photography: Capturing Space and Light',
    slug: 'architectural-photography',
    excerpt: 'Learn techniques for photographing buildings and interiors, from composition and equipment to post-processing for stunning architectural images.',
    featuredImage: 'https://images.unsplash.com/photo-1434434319959-1f886517e1fe',
    category: {
      id: '4',
      name: 'Photography',
      slug: 'photography',
    },
    author: authors[3],
    publishedAt: '2023-12-01T09:00:00.000Z',
    readTime: '10',
    tags: ['Photography', 'Architecture', 'Composition'],
    relatedPosts: ['5', '9', '15'],
  },
  {
    id: '14',
    title: 'Minimalist Living: Finding Freedom with Less',
    slug: 'minimalist-living',
    excerpt: 'How embracing minimalism can reduce stress, increase focus, and help you create a more intentional life centered around what truly matters.',
    featuredImage: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85',
    category: {
      id: '5',
      name: 'Lifestyle',
      slug: 'lifestyle',
    },
    author: authors[4],
    publishedAt: '2023-12-18T10:15:00.000Z',
    readTime: '7',
    tags: ['Minimalism', 'Lifestyle', 'Wellbeing'],
    relatedPosts: ['4', '6', '11'],
  },
  {
    id: '15',
    title: 'User Research Methods That Drive Design Decisions',
    slug: 'user-research-methods',
    excerpt: 'A comprehensive guide to qualitative and quantitative user research techniques that provide actionable insights for product design.',
    featuredImage: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    category: {
      id: '1',
      name: 'Design',
      slug: 'design',
    },
    author: authors[0],
    publishedAt: '2024-01-05T14:30:00.000Z',
    readTime: '13',
    tags: ['UX Research', 'Design Process', 'User Testing'],
    relatedPosts: ['1', '2', '7'],
  },
];

// Helper functions
export const getRecentPosts = (count = 3) => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
};

export const getFeaturedPosts = (count = 1) => {
  // For simplicity, just using the most recent posts as featured
  return getRecentPosts(count);
};

export const getPopularCategories = (count = 5) => {
  return [...categories]
    .sort((a, b) => b.postCount - a.postCount)
    .slice(0, count);
};

export const getPostsByCategory = (categorySlug: string) => {
  return posts.filter(post => post.category.slug === categorySlug);
};

export const getPostsByAuthor = (authorSlug: string) => {
  return posts.filter(post => post.author.slug === authorSlug);
};

export const getPostBySlug = (slug: string) => {
  return posts.find(post => post.slug === slug);
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find(category => category.slug === slug);
};

export const getAuthorBySlug = (slug: string) => {
  return authors.find(author => author.slug === slug);
};

export const getRelatedPosts = (postId: string, count = 3) => {
  const post = posts.find(p => p.id === postId);
  if (!post || !post.relatedPosts) return getRecentPosts(count);
  
  return post.relatedPosts
    .map(id => posts.find(p => p.id === id))
    .filter(Boolean)
    .slice(0, count);
};
