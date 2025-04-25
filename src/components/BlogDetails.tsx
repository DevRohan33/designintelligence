import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar/>
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          Loading...
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar/>
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
      <Navbar/>
      <main className="flex-1">
        <div className="w-full h-[300px] md:h-[400px] relative">
          <div className="absolute inset-0 bg-black/30" />
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-full object-cover" 
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{blog.title}</h1>
              <div className="text-white/80 text-lg">{blog.date}</div>
            </div>
          </div>
        </div>
        
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