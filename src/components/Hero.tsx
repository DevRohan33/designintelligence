
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Engineering Simplicity Through Tech.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Turning complex civil tasks into user-friendly IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/services" className="px-6 py-3 btn-primary rounded-md text-center">
                Explore Services
              </Link>
              <Link to="/contact" className="px-6 py-3 border border-primary rounded-md text-center hover:bg-secondary transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-md flex items-center justify-center overflow-hidden">
              <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-70">
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i} 
                    className="border border-muted-foreground/20" 
                    style={{
                      transform: `rotate(${Math.random() * 45}deg)`,
                      opacity: Math.random() * 0.5 + 0.5
                    }}
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

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
            <h3 className="text-lg font-semibold">Our Solutions</h3>
            <p className="text-muted-foreground mt-2">Innovative solutions for engineering challenges.</p>
            <Link to="/solutions" className="inline-flex items-center mt-4 text-sm font-medium line-animation">
              Learn more <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
            <h3 className="text-lg font-semibold">Our Work</h3>
            <p className="text-muted-foreground mt-2">Explore our portfolio of successful projects.</p>
            <Link to="/work" className="inline-flex items-center mt-4 text-sm font-medium line-animation">
              See projects <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          <div className="p-6 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-muted-foreground mt-2">Ready to start your project? Get in touch today.</p>
            <Link to="/contact" className="inline-flex items-center mt-4 text-sm font-medium line-animation">
              Contact now <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
