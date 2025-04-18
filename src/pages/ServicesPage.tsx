
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Services from '@/components/Services';
import { Check } from 'lucide-react';

const features = [
  "Custom software design for civil engineering",
  "User-friendly interfaces for complex tasks",
  "Integration with existing systems",
  "Scalable solutions for growing firms",
  "Ongoing technical support and training",
  "Regular updates and improvements"
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              We provide specialized technology solutions tailored specifically for civil engineering challenges, 
              helping firms become more efficient and deliver better results.
            </p>
          </div>
        </section>

        <Services />
        
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Services</h2>
                <p className="text-muted-foreground mb-8">
                  Our specialized approach combines deep civil engineering knowledge with cutting-edge 
                  software development practices to create solutions that truly meet your needs.
                </p>
                
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="mr-2 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">Ready to transform your engineering workflow?</h3>
                <p className="mb-6">
                  Contact us today for a consultation and discover how our services can address your specific challenges.
                </p>
                <button className="px-6 py-3 btn-primary rounded-md">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
