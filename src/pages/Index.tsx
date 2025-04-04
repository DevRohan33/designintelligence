
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Civil Engineering <br />
                  Meets Technology
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Welcome to TechBridge, where we create innovative tech solutions for civil engineering challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link to="/services" className="px-6 py-3 btn-primary rounded-md text-center">
                    Our Expertise
                  </Link>
                  <Link to="/contact" className="px-6 py-3 border border-primary rounded-md text-center hover:bg-secondary transition-colors">
                    Get in Touch
                  </Link>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-secondary rounded-md flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
                    {[...Array(9)].map((_, i) => (
                      <div 
                        key={i} 
                        className="border border-muted-foreground/20"
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-primary rounded-full animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-24 h-24 md:w-32 md:h-32 border-2 border-primary/60 rounded-md animate-[spin_15s_linear_infinite_reverse]" />
                  </div>
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
