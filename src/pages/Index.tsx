import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronRight, Building, Code, Users } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import ThreeDPlaceholder from '@/components/ThreeDPlaceholder';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-custom">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex flex-col justify-center px-4 overflow-hidden">
          <div className="grid-pattern absolute inset-0 z-0" />
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Left */}
              <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
                  <span className="bg-gradient-to-r from-ais-coral to-red-500 bg-clip-text text-transparent">Engineering</span>{" "}
                  Meets <br />
                  <span className="text-ais-dark">Digital Intelligence</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 text-muted-foreground">
                  We build custom 3D web applications that solve real-world problems in architecture, engineering, and construction.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-ais-coral hover:bg-red-500 text-white px-8">
                    Book a Free Consultation
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-ais-dark text-ais-dark hover:bg-ais-dark hover:text-white"
                    onClick={() => navigate("/work")}
                  >
                    View Our Work
                  </Button>
                </div>

                <div className="mt-16 grid grid-cols-3 gap-4">
                  {[
                    { icon: Building, label: "Structural Expertise" },
                    { icon: Code, label: "Modern Web Tech" },
                    { icon: Users, label: "User-Centered" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-ais-coral/10 mb-3">
                        <Icon className="h-5 w-5 text-ais-coral" />
                      </div>
                      <h3 className="text-sm font-semibold text-center">{label}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="relative z-10 h-[500px] hidden md:block">
                <ThreeDPlaceholder />
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className="absolute bottom-0 w-full flex justify-center pb-8 z-10">
            <div className="animate-bounce">
              <ChevronRight className="w-6 h-6 rotate-90 text-gray-400" />
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
              <div>
                <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
                <p className="text-muted-foreground">Our innovative solutions in action</p>
              </div>
              <Link to="/work" className="mt-4 md:mt-0 flex items-center text-primary hover:underline">
                View all projects <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Automatic BOM Generator",
                  desc: "2D visualization and structural strength evaluation tool",
                  image: "/images/bom-automation2.jpg",
                },
                {
                  title: "Gutter Tool",
                  desc: "Filters essential data from large sources to ensure perfect planning",
                  image: "/images/gutter.png",
                },
                {
                  title: "Three Viewer Lattice",
                  desc: "3D comprehensive tool for Tower Construction planning",
                  image: "/images/three_view.jpg",
                },
              ].map((project, i) => (
                <Card key={i} className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow">
                  <div className="h-56 bg-white flex items-center justify-center">
                    <img src={project.image} alt={project.title} className="object-contain h-full w-full" />
                  </div>
                  <CardContent className="pt-5">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.desc}</p>
                    <Link to="/work" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                      View case study <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground">
                Exploring the intersection of civil engineering and cutting-edge technology
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Report CTA */}
              <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="inline-block p-3 rounded-full bg-primary mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">2024 Tech Trends in Civil Engineering</h3>
                    <p className="text-gray-600 mb-6">Download our comprehensive report on emerging technologies.</p>
                    <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      Get the Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Posts */}
              <div className="space-y-6">
                {[
                  {
                    date: "April 2, 2025",
                    title: "The Future of Smart Infrastructure",
                    desc: "IoT sensors and real-time monitoring revolutionizing infrastructure safety.",
                  },
                  {
                    date: "March 15, 2025",
                    title: "Sustainable Design Through Technology",
                    desc: "How advanced software tools enable more environmentally responsible projects.",
                  },
                ].map((post, i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{post.title}</h3>
                    <p className="mb-4">{post.desc}</p>
                    <Link to="#" className="inline-flex items-center text-primary hover:underline">
                      Read more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto text-center max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg">
              We bridge the gap between complex civil engineering challenges and modern technology,
              creating intuitive software solutions that simplify workflows and improve outcomes.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Services", desc: "Discover our specialized solutions.", link: "/services" },
              { title: "Solutions", desc: "See how we solve common problems.", link: "/solutions" },
              { title: "Portfolio", desc: "Browse our successful projects.", link: "/work" },
            ].map(({ title, desc, link }, i) => (
              <div key={i} className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="mb-6">{desc}</p>
                <Link to={link} className="inline-flex items-center text-primary font-medium hover:underline">
                  {title === "Portfolio" ? "See our work" : `Explore ${title.toLowerCase()}`} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your engineering workflow?</h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Let's discuss how our technology solutions can address your specific challenges.
            </p>
            <Link
              to="/contact"
              className="px-8 py-3 bg-white text-primary hover:bg-secondary hover:text-primary transition-colors font-medium rounded-md inline-block"
            >
              Contact Us Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
