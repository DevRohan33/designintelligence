import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PenLine, Plus, LogOut ,Pencil} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Sample blog data with draft status
const INITIAL_BLOGS = [
  {
    id: 1,
    title: "Understanding Modern Software Architecture",
    excerpt: "An in-depth look at how software architecture has evolved and best practices for today's applications.",
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
    isDraft: false,
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
    isDraft: false,
  },
  {
    id: 3,
    title: "Building Scalable APIs with Modern Tools",
    excerpt: "How to design and implement APIs that can handle growth and changing requirements.",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    isDraft: false,
  },
  {
    id: 4,
    title: "Building Scalable APIs with Modern Tools By Rohan",
    excerpt: "How to design and implement APIs that can handle growth and changing requirements.",
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    isDraft: false,
  },
];

// Separate storage for draft blogs
const DRAFT_BLOGS = [];

const BlogPage = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [blogs, setBlogs] = useState(INITIAL_BLOGS);
  const { toast } = useToast();

  // Filter only published blogs for the main page
  const publishedBlogs = useMemo(() => {
    return blogs.filter(blog => !blog.isDraft);
  }, [blogs]);
  
// Logout 
  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    setIsAdmin(false);
    toast({
      title: "Logged out successfully",
      description: "You have been logged out",
    });
  };
  

  // Show all blogs (including drafts) for admin, only published for others
  const displayedBlogs = isAdmin ? blogs : publishedBlogs;

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
                  : "Stay updated with insights, stories, and the latest trends at the intersection of engineering and technology."}
              </p>
          </div>
          </section>
          <div className="mt-12"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} onLoginSuccess={() => setIsAdmin(true)} />}
      
      <Footer />
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ blog, isAdmin }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full relative">
      {isAdmin && (
        <Link 
          to={`/admin/editor/${blog.id}`}
          className="absolute top-2 right-2 p-2 bg-background/80 rounded-full hover:bg-background transition-colors z-10"
        >
          <PenLine className="w-4 h-4" />
        </Link>
      )}
      <div className="h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader>
        <div className="text-sm text-muted-foreground mb-2">{blog.date}</div>
        <h3 className="text-xl font-semibold line-clamp-2">{blog.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{blog.excerpt}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto">
          <Link to={`/blog/${blog.id}`}>Read More →</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Login Modal Component
const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    
  if (email === "admin@example.com" && password === "1") {
    localStorage.setItem("isAdminLoggedIn", "true");

    toast({
      title: "Login successful",
      description: "Welcome back, admin!",
    });

    onLoginSuccess?.();
    onClose?.();
  } else {
    toast({
      title: "Login failed",
      description: "Invalid email or password",
      variant: "destructive",
    });
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
            />
          </div>
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogPage;
