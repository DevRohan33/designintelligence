// tHIS IS BLOG PAGE 
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'How Tech is Revolutionizing Civil Engineering',
    excerpt: 'Discover how AI, BIM, and automation are transforming traditional engineering practices.',
    date: 'March 10, 2025',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'Top 5 Software Tools for Modern Engineers',
    excerpt: 'Explore essential software that every civil engineer should know in 2025.',
    date: 'March 20, 2025',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'Lessons from Our First International Project',
    excerpt: 'From Bangladesh to Germany – insights we gained while working on a global scale.',
    date: 'April 5, 2025',
    image: '/images/blog3.jpg',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Stay updated with insights, stories, and the latest trends at the intersection of engineering and technology.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-custom grid md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-3">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-primary font-semibold hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'How Tech is Revolutionizing Civil Engineering',
    excerpt: 'Discover how AI, BIM, and automation are transforming traditional engineering practices.',
    date: 'March 10, 2025',
    image: '/images/blog1.jpg',
  },
  {
    id: 2,
    title: 'Top 5 Software Tools for Modern Engineers',
    excerpt: 'Explore essential software that every civil engineer should know in 2025.',
    date: 'March 20, 2025',
    image: '/images/blog2.jpg',
  },
  {
    id: 3,
    title: 'Lessons from Our First International Project',
    excerpt: 'From Bangladesh to Germany – insights we gained while working on a global scale.',
    date: 'April 5, 2025',
    image: '/images/blog3.jpg',
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
              Stay updated with insights, stories, and the latest trends at the intersection of engineering and technology.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container-custom grid md:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-3">
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <h2 className="text-xl font-bold">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                  <a href={`/blog/${post.id}`} className="text-primary font-semibold hover:underline">
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
