import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PenLine, Plus, LogOut, Pencil } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { loginAdmin, logoutAdmin, checkAuthState } from '@/lib/authService';
import { getBlogs } from '@/lib/blogService';
import { BlogPost } from '@/types/blog';
import { BlogCard } from '@/components/BlogCard';

const BlogPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check auth state
    const unsubscribe = checkAuthState((adminStatus) => {
      setIsAdmin(adminStatus);
    });

    // Fetch blogs
    const fetchBlogs = async () => {
      try {
        const blogData = await getBlogs(isAdmin);
        setBlogs(blogData);
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to load blogs",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    return () => unsubscribe();
  }, [isAdmin, toast]);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      setIsAdmin(false);
      toast({
        title: "Logged out successfully",
        description: "You have been logged out",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to logout",
        variant: "destructive",
      });
    }
  };

  const publishedBlogs = useMemo(() => {
    return blogs.filter(blog => !blog.isDraft);
  }, [blogs]);

  const displayedBlogs = isAdmin ? blogs : publishedBlogs;

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div>Loading blogs...</div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24">
        <section className="bg-secondary py-16">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold">  
              {isAdmin ? "Admin Dashboard" : "Our Blog"}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {isAdmin 
                ? "Manage your blog posts and drafts"
                : "Stay updated with insights, stories, and the latest trends."}
            </p>
          </div>
        </section>

        <div className="mt-12"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container-custom">
          {displayedBlogs.map((blog) => (
            <BlogCard 
              key={blog.id} 
              blog={blog} 
              isAdmin={isAdmin} 
            />
          ))}
          
          {isAdmin && (
            <Card className="overflow-hidden flex flex-col h-full items-center justify-center">
              <Link 
                to="/admin/editor/new" 
                className="flex flex-col items-center justify-center p-8 h-full w-full hover:bg-muted transition-colors"
              >
                <Plus className="h-12 w-12 mb-4 text-muted-foreground" />
                <span className="text-lg font-medium text-muted-foreground">Add New Blog</span>
              </Link>
            </Card>
          )}
        </div>
        <div className="mb-24"/>

        {isAdmin && (
          <div className="fixed bottom-6 right-6 z-50">
            <Button 
              size="icon" 
              variant="destructive" 
              className="rounded-full shadow-lg"
              onClick={handleLogout}
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        )}
      </main>
      
      {!isAdmin && (
        <button 
          onClick={() => setIsLoginOpen(true)}
          className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Admin login"
        >
          <PenLine className="w-6 h-6" />
        </button>
      )}
      
      {isLoginOpen && (
        <LoginModal 
          onClose={() => setIsLoginOpen(false)} 
          onLoginSuccess={() => setIsAdmin(true)} 
        />
      )}
      
      <Footer />
    </div>
  );
};

// Updated LoginModal with Firebase auth
const LoginModal = ({ onClose, onLoginSuccess }: { 
  onClose: () => void, 
  onLoginSuccess: () => void 
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const success = await loginAdmin(email, password);
      if (success) {
        toast({
          title: "Login successful",
          description: "Welcome back, admin!",
        });
        onLoginSuccess();
        onClose();
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred during login",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-background rounded-lg p-6 w-full max-w-md" onClick={e => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPage;