import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import ModelViewer from '@/components/ModelViewer';
import React, { useState } from 'react';

// const Model = () => {
//   const { scene } = useGLTF('/model.glb');
//   return <primitive object={scene} scale={1.5} />;
// };
const Index = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const triggerAnimation = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 z-20 relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Civil Engineering <br />
                  Meets Technology
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Welcome to Design Intelligence LLP, where we bridge the gap between civil engineering challenges and innovative technology solutions. We specialize in creating software that simplifies complex engineering processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/services" className="px-6 py-3 btn-primary rounded-md text-center">
                    Our Expertise
                  </Link>
                  <Link to="/contact" className="px-6 py-3 border border-primary rounded-md text-center hover:bg-secondary transition-colors">
                    Get in Touch
                  </Link>
                  <button
                    onClick={triggerAnimation}
                    className=" px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Animate Model
                  </button>

                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-full max-w-[1000px] z-0 pointer-events-none">
          <ModelViewer 
            modelPath="/model.glb"
            className="w-full h-[500px]"
            isAnimating={isAnimating}
          />

          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
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
              {/* Project 1 */}
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-56  bg-white flex items-center justify-center">
                <img
                  src="/images/bom-automation2.jpg"
                  alt="Automatic BOM Generator"
                  className="object-contain h-full w-full"
                />
                </div>
                <CardContent className="pt-5">
                  <h3 className="text-xl font-bold mb-2">Automatic BOM Generator</h3>
                  <p className="text-muted-foreground mb-4">2D visualization and structural strength evaluation tool</p>
                  <Link to="/work" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Project 2 */}
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="h-56 bg-white flex items-center justify-center">
                <img
                  src="/images/gutter.png"
                  alt="Gutter Tool"
                  className="object-contain h-full w-full"
                />
                </div>
                <CardContent className="pt-5">
                  <h3 className="text-xl font-bold mb-2">Gutter Tool</h3>
                  <p className="text-muted-foreground mb-4">Filters essential data from large sources to ensure perfect planning</p>
                  <Link to="/work" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Project 3 */}
              <Card className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300 md:block hidden lg:block">
                <div className="h-56 bg-white flex items-center justify-center">
                <img
                  src="/images/three_view.jpg"
                  alt="Three Viewer Lattice"
                  className="object-contain h-full w-full"
                />
                </div>
                <CardContent className="pt-5">
                  <h3 className="text-xl font-bold mb-2">Three Viewer Lattice</h3>
                  <p className="text-muted-foreground mb-4">A 3D comprehensive tool for plan and manage Tower Construction projects</p>
                  <Link to="/work" className="inline-flex items-center text-sm font-medium text-primary hover:underline">
                    View case study <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Latest Insights Section */}
        <section className="py-20 bg-secondary/50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground">
                Exploring the intersection of civil engineering and cutting-edge technology
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-full bg-gradient-to-br from-secondary to-secondary/30 flex items-center justify-center">
                  <div className="p-8 text-center">
                    <div className="inline-block p-3 rounded-full bg-primary mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                        <polyline points="14 2 14 8 20 8"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">2024 Tech Trends in Civil Engineering</h3>
                    <p className="text-gray-600 mb-6">
                      Download our comprehensive report on emerging technologies transforming the civil engineering landscape
                    </p>
                    <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                      Get the Report
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <span className="text-sm text-muted-foreground">April 2, 2025</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">The Future of Smart Infrastructure</h3>
                  <p className="mb-4">
                    Exploring how IoT sensors and real-time monitoring are revolutionizing infrastructure maintenance and safety.
                  </p>
                  <Link to="#" className="inline-flex items-center text-primary hover:underline">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
                  <span className="text-sm text-muted-foreground">March 15, 2025</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">Sustainable Design Through Technology</h3>
                  <p className="mb-4">
                    How advanced software tools are enabling more environmentally responsible civil engineering projects.
                  </p>
                  <Link to="#" className="inline-flex items-center text-primary hover:underline">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg">
                We bridge the gap between complex civil engineering challenges and modern technology, 
                creating intuitive software solutions that simplify workflows and improve outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Services</h3>
                <p className="mb-6">
                  Discover our specialized technology solutions for civil engineering challenges.
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Explore services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Solutions</h3>
                <p className="mb-6">
                  See how we solve common engineering problems with innovative technology.
                </p>
                <Link 
                  to="/solutions" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="bg-white border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
                <p className="mb-6">
                  Browse our successful projects and engineering technology implementations.
                </p>
                <Link 
                  to="/work" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  See our work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
