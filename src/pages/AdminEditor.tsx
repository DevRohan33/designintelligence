import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { Save, Eye, Upload, ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BlogPost } from "@/types/blog";
import { getBlogById, createBlog, updateBlog, uploadImage } from "@/lib/blogService";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";


// Define types for Quill toolbar
interface QuillToolbarOptions {
  container: (string | object)[][];
  handlers?: {
    [key: string]: (value: any) => void;
  };
}

interface QuillModules {
  toolbar: QuillToolbarOptions | string;
  clipboard?: {
    matchVisual: boolean;
  };
}

const fontOptions = [
  "Arial", "Courier New", "Georgia", 
  "Times New Roman", "Verdana", 
  "Comic Sans MS", "Impact", 
  "Lucida Console", "Tahoma", 
  "Trebuchet MS", "Palatino"
];

const AdminEditor = () => {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isNewPost = id === "new";
  const quillRef = useRef<ReactQuill | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editorContainerRef = useRef<HTMLDivElement>(null);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define custom toolbar component ID
  const toolbarId = "quill-toolbar";

  // Define modules with external toolbar
  const modules: QuillModules = {
    toolbar: `#${toolbarId}`,
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header", "font",
    "bold", "italic", "underline", "strike",
    "color", "background", "script",
    "align",
    "list", "bullet", "indent",
    "blockquote", "code-block",
    "link", "image", "video"
  ];

  useEffect(() => {
    if (!isNewPost && id) {
      const loadBlog = async () => {
        setIsLoading(true);
        try {
          const blog = await getBlogById(id);
          if (blog) {
            setTitle(blog.title);
            setContent(blog.content);
            setImage(blog.image);
          }
        } catch {
          toast({ title: "Error", description: "Failed to load blog post", variant: "destructive" });
        } finally {
          setIsLoading(false);
        }
      };
      loadBlog();
    }
  }, [id, isNewPost, toast]);

  useEffect(() => {
    // Setup the font dropdown after the component mounts
    setTimeout(() => {
      const fontList = document.querySelector(`#${toolbarId} .ql-font.ql-picker`) as HTMLSelectElement;
      if (fontList) {
        const fontPicker = fontList.querySelector('.ql-picker-options');
        if (fontPicker) {
          fontPicker.innerHTML = `
            <span class="ql-picker-item" data-value="sans-serif">Sans Serif</span>
            ${fontOptions.map(font => `<span class="ql-picker-item" data-value="${font}">${font}</span>`).join('')}
          `;
        }
      }
      
      // Setup the image button handler
      const imageButton = document.querySelector(`#${toolbarId} .ql-image`);
      if (imageButton) {
        imageButton.addEventListener('click', () => {
          if (fileInputRef.current) {
            fileInputRef.current.click();
          }
        });
      }
    }, 100);
  }, []);

  const handleContentImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      try {
        const imageUrl = await uploadImage(file);
        const quill = quillRef.current?.getEditor();
        if (quill) {
          // Get the current selection, or default to the end of the document
          const range = quill.getSelection() || { index: quill.getLength(), length: 0 };
          // Insert the image at the current selection point
          quill.insertEmbed(range.index, "image", imageUrl);
          // Move cursor after the image with timeout to ensure DOM is updated
          setTimeout(() => {
            quill.setSelection(range.index + 1, 0);
          }, 50);
        }
        toast({ title: "Success", description: "Image inserted." });
      } catch {
        toast({ title: "Error", description: "Image upload failed.", variant: "destructive" });
      } finally {
        setIsLoading(false);
        // Reset file input
        if (e.target) {
          e.target.value = "";
        }
      }
    }
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsLoading(true);
      try {
        const url = await uploadImage(file);
        setImage(url);
        toast({ title: "Success", description: "Cover image uploaded." });
      } catch {
        toast({ title: "Error", description: "Cover image upload failed.", variant: "destructive" });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleSubmit = async (isDraft: boolean) => {
    if (!title || !content) {
      toast({ 
        title: "Validation Error", 
        description: "Title and content are required", 
        variant: "destructive" 
      });
      return;
    }

    setIsLoading(true);
    const blogData: Omit<BlogPost, "id"> = {
      title,
      content,
      image,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      isDraft,
    };
    try {
      if (isNewPost) {
        await createBlog(blogData);
        toast({ title: "Success", description: isDraft ? "Draft saved." : "Post published." });
      } else if (id) {
        await updateBlog(id, blogData);
        toast({ title: "Success", description: isDraft ? "Draft updated." : "Post updated." });
      }
      navigate("/blog");
    } catch {
      toast({ title: "Error", description: "Save failed.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" onClick={() => navigate("/blog")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <h1 className="text-lg font-semibold">{isNewPost ? "Create New Post" : "Edit Post"}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => handleSubmit(true)}>
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="outline" onClick={() => setIsPreview(!isPreview)}>
            <Eye className="mr-2 h-4 w-4" />
            {isPreview ? "Edit" : "Preview"}
          </Button>
          <Button onClick={() => handleSubmit(false)}>
            <Upload className="mr-2 h-4 w-4" />
            Publish
          </Button>
        </div>
      </div>

      {!isPreview ? (
        <>
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded text-lg font-medium"
          />

          {/* Hidden input for content images */}
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleContentImageUpload}
            style={{ display: 'none' }}
          />

          <div className="editor-container" ref={editorContainerRef}>
            {/* Custom toolbar that will be fixed */}
            <div id={toolbarId} className="fixed-toolbar">
              <span className="ql-formats">
                <select className="ql-header">
                <option value="1">Heading 1</option>
                <option value="2">Heading 2</option>
                <option value="3">Heading 3</option>
                <option value="">Normal</option>
                </select>
                <select className="ql-font" defaultValue="sans-serif">
                  <option value="sans-serif" selected>Sans Serif</option>
                </select>
              </span>
              <span className="ql-formats">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-strike"></button>
              </span>
              <span className="ql-formats">
                <select className="ql-color"></select>
                <select className="ql-background"></select>
              </span>
              <span className="ql-formats">
                <button className="ql-script" value="sub"></button>
                <button className="ql-script" value="super"></button>
              </span>
              <span className="ql-formats">
                <select className="ql-align"></select>
              </span>
              <span className="ql-formats">
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-indent" value="-1"></button>
                <button className="ql-indent" value="+1"></button>
              </span>
              <span className="ql-formats">
                <button className="ql-blockquote"></button>
                <button className="ql-code-block"></button>
              </span>
              <span className="ql-formats">
                <button className="ql-link"></button>
                <button className="ql-image"></button>
                <button className="ql-video"></button>
              </span>
              <span className="ql-formats">
                <button className="ql-clean"></button>
              </span>
            </div>

            <ReactQuill
              ref={quillRef}
              value={content}
              onChange={setContent}
              modules={modules}
              formats={formats}
              theme="snow"
              placeholder="Write your blog content here..."
              className="custom-quill-editor"
            />
            
            <style>
              {`
                .editor-container {
                  position: relative;
                  height: 500px;
                  display: flex;
                  flex-direction: column;
                  margin-bottom: 20px;
                }
                
                .fixed-toolbar {
                  background: white;
                  border: 1px solid #ccc;
                  box-sizing: border-box;
                  padding: 8px;
                  position: sticky;
                  top: 0;
                  z-index: 10;
                  border-top-left-radius: 4px;
                  border-top-right-radius: 4px;
                }
                
                .custom-quill-editor {
                  flex-grow: 1;
                  overflow-y: auto;
                  border: 1px solid #ccc;
                  border-top: none;
                  border-bottom-left-radius: 4px;
                  border-bottom-right-radius: 4px;
                }
                
                .custom-quill-editor .ql-container {
                  border: none !important;
                  font-size: 16px;
                  height: 100%;
                }
                
                /* Hide the default toolbar since we're using our custom one */
                .custom-quill-editor .ql-toolbar {
                  display: none !important;
                }
              `}
            </style>
          </div>

          <div className="mt-4">
            <label className="block mb-1">Cover Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleCoverImageUpload} 
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            {image && (
              <div className="mt-4">
                <img 
                  src={image} 
                  alt="cover" 
                  className="mt-2 max-w-full h-auto max-h-64 object-contain rounded border" 
                />
                <Button 
                  variant="destructive" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => setImage("")}
                >
                  Remove Cover Image
                </Button>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold mb-6">{title}</h1>
          {image && <img src={image} alt="cover" className="w-full h-auto mb-6 rounded-lg" />}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
    </div>
  );
};

export default AdminEditor;