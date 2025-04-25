import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { PenLine, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { deleteBlog } from "@/lib/blogService"; // You need this delete function!

interface BlogCardProps {
  blog: {
    id: number | string;
    title: string;
    excerpt?: string;
    date: string;
    image: string;
    isDraft?: boolean;
    content?: string;
  };
  isAdmin: boolean;
}

export const BlogCard = ({ blog, isAdmin }: BlogCardProps) => {
  const { toast } = useToast();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      await deleteBlog(String(blog.id));

      toast({
        title: "Deleted!",
        description: "Blog post deleted successfully.",
      });
      window.location.reload(); // simple reload, you can later improve this without full reload
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="overflow-hidden flex flex-col h-full relative group">

      {/* DRAFT Watermark */}
      {blog.isDraft && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center text-3xl font-bold text-gray-500 pointer-events-none z-20">
          DRAFT
        </div>
      )}

      {/* Admin Buttons */}
      {isAdmin && (
        <div className="absolute top-2 right-2 flex gap-2 z-30">
          <Link 
            to={`/admin/editor/${blog.id}`}
            className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
            aria-label="Edit Blog"
          >
            <PenLine className="w-4 h-4" />
          </Link>
          <button 
            onClick={handleDelete}
            className="p-2 bg-background/80 rounded-full hover:bg-background transition-colors text-red-500"
            aria-label="Delete Blog"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      )}

      <div className="h-48 overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
          loading="lazy"
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
        <Link 
          to={`/blog/${blog.id}`} 
          className="text-primary hover:underline font-medium"
        >
          Read More →
        </Link>
      </CardFooter>

    </Card>
  );
};
