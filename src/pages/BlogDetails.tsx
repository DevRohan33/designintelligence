
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SAMPLE_BLOGS = [
  {
    id: 1,
    title: "Understanding Modern Software Architecture",
    content: `
      <p>Software architecture has evolved significantly over the past decade, shifting from monolithic structures to more distributed, microservice-oriented designs. This evolution has been driven by the need for greater scalability, resilience, and flexibility in modern applications.</p>
      
      <h2>The Rise of Microservices</h2>
      <p>Microservices architecture has become increasingly popular due to its ability to break down complex applications into smaller, more manageable services. Each service functions independently, allowing teams to develop, deploy, and scale components separately.</p>
      
      <p>Key benefits of microservices include:</p>
      <ul>
        <li>Independent deployment of services</li>
        <li>Technology diversity across the stack</li>
        <li>Better fault isolation</li>
        <li>Easier scaling of specific components</li>
      </ul>
      
      <h2>Event-Driven Architecture</h2>
      <p>Another important trend is the rise of event-driven architectures, where components communicate through events rather than direct API calls. This approach enhances decoupling and can improve system responsiveness.</p>
      
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Circuit board representing system architecture" />
      
      <h2>Best Practices for Modern Architecture</h2>
      <p>When designing modern software systems, consider these best practices:</p>
      <ol>
        <li>Design for failure - every component may fail at some point</li>
        <li>Implement proper observability through logging, metrics, and tracing</li>
        <li>Use containerization for consistency across environments</li>
        <li>Apply infrastructure as code principles</li>
        <li>Implement CI/CD pipelines for reliable delivery</li>
      </ol>
      
      <p>As we move forward, the integration of AI and machine learning capabilities into architectural decisions will likely become more prominent, creating new patterns and practices for systems that can learn and adapt.</p>
    `,
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    content: `
      <p>Frontend development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging constantly. Understanding these trends is crucial for developers looking to stay current in this dynamic field.</p>
      
      <h2>Component-Based Architecture</h2>
      <p>Modern frontend development has fully embraced component-based architecture. Frameworks like React, Vue, and Angular all promote building UIs as collections of reusable components, improving maintainability and enabling more efficient development processes.</p>
      
      <h2>The Rise of Meta-Frameworks</h2>
      <p>Meta-frameworks like Next.js, Nuxt, and SvelteKit are becoming increasingly popular as they solve common challenges related to rendering, routing, and data fetching. These tools provide opinionated structures that help developers build full-featured applications more quickly.</p>
      
      <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="Code on a laptop screen" />
      
      <h2>Web Performance and Core Web Vitals</h2>
      <p>Performance has become a central concern in frontend development, especially with Google's emphasis on Core Web Vitals. Techniques such as:</p>
      <ul>
        <li>Code splitting</li>
        <li>Tree shaking</li>
        <li>Image optimization</li>
        <li>Responsive loading strategies</li>
      </ul>
      
      <p>All these approaches help create faster, more responsive user experiences that perform well on various devices and network conditions.</p>
      
      <h2>Looking Forward</h2>
      <p>As we look to the future, we can expect to see continued innovation in areas such as:</p>
      <ol>
        <li>Edge computing for frontend applications</li>
        <li>AI-assisted development and code generation</li>
        <li>More sophisticated type systems for JavaScript</li>
        <li>Enhanced accessibility tools and standards</li>
        <li>WebAssembly becoming mainstream for performance-critical code</li>
      </ol>
    `,
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Modern Tools",
    content: `
      <p>APIs are the backbone of modern application ecosystems, enabling seamless communication between services, applications, and devices. Building scalable APIs requires careful planning and the right tools.</p>
      
      <h2>API Design Principles</h2>
      <p>Effective API design begins with clear principles:</p>
      <ul>
        <li>Consistency in naming and response formats</li>
        <li>Clear versioning strategy</li>
        <li>Appropriate error handling</li>
        <li>Thoughtful resource modeling</li>
      </ul>
      
      <h2>GraphQL vs REST</h2>
      <p>While REST has been the dominant paradigm for API development, GraphQL offers compelling advantages for certain use cases, particularly when clients need flexible data retrieval options or when minimizing network requests is crucial.</p>
      
      <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="API code on a monitor" />
      
      <h2>API Management and Monitoring</h2>
      <p>As APIs scale, proper management becomes essential. Key aspects include:</p>
      <ol>
        <li>Authentication and authorization</li>
        <li>Rate limiting and quotas</li>
        <li>Comprehensive monitoring and analytics</li>
        <li>Documentation and developer experience</li>
        <li>Performance optimization</li>
      </ol>
      
      <h2>Serverless APIs</h2>
      <p>Serverless architectures are changing how we deploy and scale APIs. With platforms like AWS Lambda, Google Cloud Functions, and Azure Functions, developers can build APIs that automatically scale based on demand without managing the underlying infrastructure.</p>
      
      <p>Looking ahead, we'll likely see more integration of AI capabilities directly into API platforms, enabling smarter caching, automatic optimization, and even predictive scaling based on usage patterns.</p>
    `,
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 4,
    title: "Understanding Modern Software Architecture",
    content: `
      <p>Software architecture has evolved significantly over the past decade, shifting from monolithic structures to more distributed, microservice-oriented designs. This evolution has been driven by the need for greater scalability, resilience, and flexibility in modern applications.</p>
      
      <h2>The Rise of Microservices</h2>
      <p>Microservices architecture has become increasingly popular due to its ability to break down complex applications into smaller, more manageable services. Each service functions independently, allowing teams to develop, deploy, and scale components separately.</p>
      
      <p>Key benefits of microservices include:</p>
      <ul>
        <li>Independent deployment of services</li>
        <li>Technology diversity across the stack</li>
        <li>Better fault isolation</li>
        <li>Easier scaling of specific components</li>
      </ul>
      
      <h2>Event-Driven Architecture</h2>
      <p>Another important trend is the rise of event-driven architectures, where components communicate through events rather than direct API calls. This approach enhances decoupling and can improve system responsiveness.</p>
      
      <img src="https://images.unsplash.com/photo-1518770660439-4636190af475" alt="Circuit board representing system architecture" />
      
      <h2>Best Practices for Modern Architecture</h2>
      <p>When designing modern software systems, consider these best practices:</p>
      <ol>
        <li>Design for failure - every component may fail at some point</li>
        <li>Implement proper observability through logging, metrics, and tracing</li>
        <li>Use containerization for consistency across environments</li>
        <li>Apply infrastructure as code principles</li>
        <li>Implement CI/CD pipelines for reliable delivery</li>
      </ol>
      
      <p>As we move forward, the integration of AI and machine learning capabilities into architectural decisions will likely become more prominent, creating new patterns and practices for systems that can learn and adapt.</p>
    `,
    date: "April 25, 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the blog post with the matching id
  const blog = SAMPLE_BLOGS.find(blog => blog.id === Number(id));
  
  // If blog post not found, show a not found message
  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <main className="flex-1">
        <div className="w-full h-[300px] md:h-[400px] relative">
          <div className="absolute inset-0 bg-black/30" />
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{blog.title}</h1>
              <div className="text-white/80 text-lg">{blog.date}</div>
            </div>
          </div>
        </div>
        
        {/* Blog content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto prose lg:prose-lg">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>
          
          <div className="max-w-3xl mx-auto mt-12">
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blogs
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
