
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';
import { Clock, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
              Reach out to discuss how we can help with your engineering technology needs. We're here to answer any questions you may have.
            </p>
          </div>
        </section>

        <Contact />
        
        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-12 text-center">Visit Our Office</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start mb-4">
                  <MapPin className="mr-3" />
                  <div>
                    <h3 className="font-semibold text-lg">Main Office</h3>
                    <p className="text-muted-foreground">
                      1234 Innovation Drive<br />
                      Tech City, CA 98765<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3" />
                  <div>
                    <h3 className="font-semibold text-lg">Office Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="aspect-video bg-[#e6e6e6] rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">[Map Embed Placeholder]</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
