import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Twitter, Linkedin, Share2 } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';
import { BlogPost } from '@/types/blog';

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          throw new Error('No blog ID provided');
        }

        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          throw new Error('Blog not found');
        }

        const blogData = docSnap.data() as BlogPost;
        setBlog({
          id: docSnap.id,
          ...blogData
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleShare = (platform: string) => {
    const blogUrl = window.location.href;
    const blogTitle = blog?.title || 'Blog post';
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(blogTitle)}&url=${encodeURIComponent(blogUrl)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${blogTitle} - ${blogUrl}`)}`, '_blank');
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: blogTitle,
            url: blogUrl
          }).catch(err => console.error('Error sharing:', err));
        }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20 container mx-auto px-4 py-12 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4 mb-12"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Error</h1>
            <p className="mb-6">{error || 'Blog not found'}</p>
            <Button onClick={() => navigate('/blog')}>
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
      <Navbar />
      
      {/* Blog header section positioned properly after navbar */}

      <header className="bg-gray-100 py-10 mt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          <div className="text-gray-600 text-lg">{blog.date}</div>
        </div>
      </header>

      <main className="flex-1">
        {/* Blog content with proper formatting and increased width */}
        <div className="container mx-auto px-4 py-12">
          <article className="max-w-4xl mx-auto">
            {/* Apply proper styling for blog content with specific rules for lists, paragraphs, etc. */}
            <div 
              className="blog-content prose prose-lg lg:prose-xl prose-headings:font-bold prose-headings:text-gray-900 
                prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                prose-ul:list-disc prose-ol:list-decimal prose-li:my-1"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Social media sharing section */}
          <div className="max-w-4xl mx-auto mt-12 border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Share this post</h3>
            <div className="flex flex-wrap gap-3">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('twitter')}
                className="flex items-center"
              >
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('linkedin')}
                className="flex items-center"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleShare('whatsapp')}
                className="flex items-center"
              >
                <Share2 className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </div>

          {/* Navigation button */}
          <div className="max-w-4xl mx-auto mt-8">
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

// Add this CSS to your global styles or component styles
const GlobalStyles = `
  .blog-content ul {
    list-style-type: disc;
    padding-left: 1.5rem;
  }
  
  .blog-content ol {
    list-style-type: decimal;
    padding-left: 1.5rem;
  }
  
  .blog-content li {
    margin: 0.5rem 0;
  }
  
  .blog-content p {
    margin-bottom: 1rem;
  }
  
  .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  
  .blog-content blockquote {
    border-left: 4px solid #e5e7eb;
    padding-left: 1rem;
    font-style: italic;
    margin: 1.5rem 0;
  }
  
  .blog-content pre {
    background: #f1f5f9;
    padding: 1rem;
    border-radius: 0.375rem;
    overflow-x: auto;
  }
  
  .blog-content img {
    max-width: 100%;
    height: auto;
    margin: 1.5rem 0;
  }
`;

export default BlogDetail;