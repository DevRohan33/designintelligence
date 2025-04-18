import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Save, Eye, Upload, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";


const SAMPLE_BLOGS = [
  {
    id: 1,
    title: "Understanding Modern Software Architecture",
    content: `<p>Software architecture has evolved significantly over the past decade, shifting from monolithic structures to more distributed, microservice-oriented designs.</p><p>This evolution has been driven by the need for greater scalability, resilience, and flexibility in modern applications.</p>`,
    date: "April 15, 2025",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "The Future of Frontend Development",
    content: `<p>Frontend development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging constantly.</p><p>Understanding these trends is crucial for developers looking to stay current in this dynamic field.</p>`,
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Building Scalable APIs with Modern Tools",
    content: `<p>APIs are the backbone of modern application ecosystems, enabling seamless communication between services, applications, and devices.</p><p>Building scalable APIs requires careful planning and the right tools.</p>`,
    date: "April 5, 2025",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
  },
];

const AdminEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNewPost = id === "new";
  const { toast } = useToast();
  
  const existingBlog = isNewPost 
    ? null 
    : SAMPLE_BLOGS.find(blog => blog.id === Number(id));
  
  const [title, setTitle] = useState(existingBlog?.title || "");
  const [content, setContent] = useState(existingBlog?.content || "");
  const [image, setImage] = useState(existingBlog?.image || "");
  const [isPreview, setIsPreview] = useState(false);
  
  const createBlogPost = (isDraft = false) => {
    const newBlog = {
      id: isNewPost ? SAMPLE_BLOGS.length + 1 : Number(id),
      title,
      excerpt: content.substring(0, 150) + "...",
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      image,
      content,
      isDraft,
    };

    if (isNewPost) {
      SAMPLE_BLOGS.push(newBlog);
    } else {
      const index = SAMPLE_BLOGS.findIndex(blog => blog.id === Number(id));
      if (index !== -1) {
        SAMPLE_BLOGS[index] = newBlog;
      }
    }

    return newBlog;
  };

  const handlePublish = () => {
    createBlogPost(false);
    toast({
      title: "Success",
      description: isNewPost ? "Blog post published!" : "Blog post updated!",
    });
    navigate("/blog");
  };
  
  const handleSaveDraft = () => {
    createBlogPost(true);
    toast({
      title: "Draft saved",
      description: "Your blog post has been saved as a draft",
    });
    navigate("/blog");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-background shadow py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              onClick={() => navigate("/blog")}
              className="mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back
            </Button>
            <h1 className="text-xl font-semibold">
              {isNewPost ? "Create New Post" : "Edit Post"}
            </h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={handleSaveDraft}>
              <Save className="h-4 w-4 mr-2" /> Save Draft
            </Button>
            <Button variant="outline" onClick={() => setIsPreview(!isPreview)}>
              <Eye className="h-4 w-4 mr-2" /> {isPreview ? "Edit" : "Preview"}
            </Button>
            <Button onClick={handlePublish}>
              <Upload className="h-4 w-4 mr-2" /> Publish
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        {!isPreview ? (
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium mb-1">Title</label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded-md"
                placeholder="Enter blog title"
              />
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium mb-1">Cover Image</label>
              <div className="flex items-center space-x-4">
                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="flex-1"
                />
                {image && (
                  <div className="h-20 w-20 relative">
                    <img src={image} alt="Cover" className="h-full w-full object-cover rounded" />
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-1">Content</label>
              <div className="border rounded-md p-2">
                <div className="border-b pb-2 mb-2 flex flex-wrap gap-1">
                  <Button variant="outline" size="sm" onClick={() => alert("Bold")}>B</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("Italic")}>I</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("Underline")}>U</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("H1")}>H1</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("H2")}>H2</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("List")}>• List</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("Image")}>Image</Button>
                  <Button variant="outline" size="sm" onClick={() => alert("Link")}>Link</Button>
                </div>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full min-h-[400px] p-2 focus:outline-none"
                  placeholder="Write your blog content here..."
                />
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                You can use HTML tags for formatting. In a real app, a WYSIWYG editor would be used.
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto">
            {image && (
              <div className="mb-6">
                <img src={image} alt={title} className="w-full max-h-[400px] object-cover rounded-lg" />
              </div>
            )}
            <h1 className="text-3xl font-bold mb-4">{title || "Untitled Post"}</h1>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminEditor;
